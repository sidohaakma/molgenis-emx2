<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <p class="lead">
      A demo app to take emx-2 for a spin
    </p>
    <hr>
    <table class="table caption-top">
      <caption>Variables</caption>
      <thead style="position: sticky; top: 20px" >
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Label</th>
          <th scope="col">Unit</th>
          <th scope="col">mandatory</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="variable in variableDataPage.Variables" :key="variable.name">
          <td>{{variable.name}}</td>
          <td>{{variable.description}}</td>
          <td>{{variable.label}}</td>
          <td>{{variable.unit ? variable.unit.name : ''}}</td>
          <td>{{variable.mandatory}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { request, gql } from 'graphql-request'

export default defineComponent({
  name: 'CohortDemo',
  props: {
    msg: String,
  },
  data () {
    return {
      variableDataPage: {}
    }
  },
  async created () {
    const query = gql`
    {
      Variables(limit: 100) {
        name
        description
        label
        mandatory
        unit{
          name
        }
      }
    }
    `

    this.variableDataPage = await request('/CohortsCentral/catalogue/graphql', query)
  }
});
</script>

