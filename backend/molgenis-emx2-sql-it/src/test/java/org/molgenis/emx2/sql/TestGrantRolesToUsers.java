package org.molgenis.emx2.sql;

import static junit.framework.TestCase.assertTrue;
import static junit.framework.TestCase.fail;
import static org.junit.Assert.*;
import static org.molgenis.emx2.Column.column;
import static org.molgenis.emx2.Privileges.*;
import static org.molgenis.emx2.TableMetadata.table;
import static org.molgenis.emx2.sql.SqlDatabase.ADMIN_USER;

import java.util.Arrays;
import java.util.List;
import org.junit.BeforeClass;
import org.junit.Test;
import org.molgenis.emx2.*;
import org.molgenis.emx2.utils.StopWatch;

public class TestGrantRolesToUsers {
  private static Database database;

  @BeforeClass
  public static void setUp() {
    database = TestDatabaseFactory.getTestDatabase();
  }

  @Test
  public void testGrantRevokeMembership() {

    Schema schema = database.dropCreateSchema("testGrantRevokeMembership");
    List first = Arrays.asList("Viewer", "Editor", "Manager", "Owner");
    List second = schema.getRoles();
    assertTrue(
        first.size() == second.size() && first.containsAll(second) && second.containsAll(first));

    schema.addMember("user1", "Viewer");
    assertEquals(1, schema.getMembers().size());

    schema.addMember("user1", "Editor"); // should override previous
    assertEquals(1, schema.getMembers().size());
    assertEquals("Editor", schema.getRoleForUser("user1"));

    schema.removeMember("user1");

    assertEquals(0, schema.getMembers().size());
  }

  @Test
  public void testRolePermissions() {

    StopWatch.start("start: testRolePermissions()");

    // createColumn some schema to test with
    database.clearActiveUser(); // admin
    Schema schema = database.dropCreateSchema("testRolePermissions");

    // createColumn test users
    database.addUser("user_testRolePermissions_viewer");
    database.addUser("user_testRolePermissions_editor");
    database.addUser("user_testRolePermissions_manager");

    // grant proper roles
    schema.addMember("user_testRolePermissions_viewer", VIEWER.toString());
    schema.addMember("user_testRolePermissions_editor", EDITOR.toString());
    schema.addMember("user_testRolePermissions_manager", MANAGER.toString());

    StopWatch.print("testRolePermissions schema created");

    // test that viewer and editor cannot createColumn, and manager can
    try {
      database.setActiveUser("user_testRolePermissions_viewer");
      database.tx(
          db -> {
            db.getSchema("testRolePermissions").create(table("Test"));
            fail("role(viewers) should not be able to createColumn tables");
            // should not happen
          });
      database.clearActiveUser();
    } catch (Exception e) {
    }

    StopWatch.print("test editor permission");

    try {
      database.setActiveUser("user_testRolePermissions_editor");
      database.tx(
          db -> {
            db.getSchema("testRolePermissions").create(table("Test"));
            fail("role(editors) should not be able to createColumn tables");
            // should not happen
          });
      database.clearActiveUser();
    } catch (Exception e) {
    }
    StopWatch.print("test editor permission success");

    try {
      database.setActiveUser("user_testRolePermissions_manager");
      database.tx(
          db -> {
            try {
              db.getSchema("testRolePermissions").create(table("Test"));
              //                  .getMetadata()
              //                  .addColumn("ID", ColumnType.INT);
            } catch (Exception e) {
              e.printStackTrace();
              throw e;
            }
          });
      database.clearActiveUser();
    } catch (Exception e) {
      fail("role(manager) should be able to createColumn tables"); // should not happen
      throw e;
    }
    StopWatch.print("test manager permission -> created a table, success");

    // test that all can query
    try {
      database.setActiveUser("user_testRolePermissions_viewer");
      database.tx(
          db -> {
            StopWatch.print("getting Table");
            Table t = db.getSchema("testRolePermissions").getTable("Test");
            StopWatch.print("got table");
            t.retrieveRows();
            StopWatch.print("completed query");
          });
    } catch (Exception e) {
      e.printStackTrace();
      fail("role(viewers) should  be able to query "); // should not happen
    } finally {
      database.clearActiveUser();
    }
    StopWatch.print("test viewer query, success");

    // test that owner manager can assign roles and normal users cant
    try {
      database.setActiveUser("user_testRolePermissions_viewer");
      database.tx(
          db -> {
            StopWatch.print("settings permissions Table");
            db.getSchema("testRolePermissions").addMember("fail", VIEWER.toString());
          });
      fail("role(viewers) should not be able to add members");
    } catch (Exception e) {
      // correct
    } finally {
      database.clearActiveUser();
    }

    try {
      database.setActiveUser("user_testRolePermissions_manager");
      database.tx(
          db -> {
            StopWatch.print("settings permissions Table");
            db.getSchema("testRolePermissions")
                .addMember("user_testRolePermissions_success", VIEWER.toString());
            db.setActiveUser(ADMIN_USER);
            db.removeUser("user_testRolePermissions_success");
          });
    } catch (Exception e) {
      fail("roles(manager) should be able to assign roles, found exception " + e);
    } finally {
      database.clearActiveUser();
    }
  }

  @Test
  public void testRole() {
    try {
      Schema schema = database.dropCreateSchema("testRole");
      database.addUser("testadmin");
      database.addUser("testuser");

      // should not be able to see as user, until permission (later)
      database.setActiveUser("testuser");
      assertNull(schema.getRoleForActiveUser()); // should have no role in this schema
      assertFalse(database.getSchemaNames().contains("testRole"));
      assertNull(database.getSchema("testRole"));

      database.clearActiveUser();

      schema.addMember("testadmin", OWNER.toString());
      assertEquals(OWNER.toString(), schema.getRoleForUser("testadmin"));

      assertTrue(schema.getInheritedRolesForUser("testadmin").contains(OWNER.toString()));
      assertEquals(4, schema.getInheritedRolesForUser("testadmin").size());

      database.setActiveUser("testadmin");
      assertEquals(OWNER.toString(), schema.getRoleForActiveUser());
      database.clearActiveUser();

      schema.create(
          table("Person")
              .add(column("id").setPkey())
              .add(column("FirstName"))
              .add(column("LastName")));

      try {
        database.setActiveUser(Constants.MG_ROLE_PREFIX + "TESTROLE_VIEW");
        database.tx(
            db -> {
              db.getSchema("testRole").create(table("Test"));
            });
        // should throw exception, otherwise fail
        fail();
      } catch (MolgenisException e) {
        System.out.println("erorred correclty:\n" + e);
      }
      database.clearActiveUser();

      try {
        database.setActiveUser("testadmin");
        database.tx(
            db -> {
              db.getSchema("testRole").create(table("Test"));
              // this is soo cooool
              db.getSchema("testRole").addMember("testuser", VIEWER.toString());
            });

      } catch (Exception e) {
        // this is NOT expected
        e.printStackTrace();
        fail();
      }
    } finally {
      database.clearActiveUser();
    }
  }

  @Test
  public void testCaseSensitiveSchemaNames() {
    // following bug #405
    Schema s1 = database.dropCreateSchema("testCaseSensitiveSchemaNames");

    // add member to schema
    final String USER = "testCaseSensitiveSchemaNamesMANAGER";
    s1.addMember(USER, MANAGER.toString());
    assertEquals(1, s1.getMembers().size());

    // create another schema with case insensitive equal name
    Schema s2 = database.dropCreateSchema("testCaseSensitiveSchemaNAMES");
    assertEquals(0, s2.getMembers().size());

    // proof that USER can only add tables in one schema/drop in one schema
    database.setActiveUser(USER);
    s1.create(table("ATable", column("id").setPkey()));

    // proof that user can NOT add in other schema
    try {
      s2.create(table("ATable", column("id").setPkey()));
      fail("user should not be able to add tables in schema it has no permissions on");
    } catch (Exception e) {
      // correct
    }

    // proof user can drop
    database.clearActiveUser(); // reset to default user
    database.dropSchema(s2.getName()); // clean up
    database.removeUser(USER);
  }
}
