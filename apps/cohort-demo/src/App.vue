<template>
  <cohort-demo msg="Cohort demo"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CohortDemo from './components/CohortDemo.vue';

export default defineComponent({
  name: 'App',
  components: {
    CohortDemo
  }
});
</script>
