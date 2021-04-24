<template>
  <main>
    <Index v-if='!maintenance' :api='apiUrl'/>
    <Maintenance v-else />
  </main>
</template>

<script>
import Index from './components/Index.vue'
import Maintenance from './components/MaintenanceScreen.vue'

export default {
  name: 'App',
  data(){
    return {
      apiUrl: "https://api.ennes.dev",
      maintenance: true,
    }
  },
  components: {
    Index,
    Maintenance
  },
  // mounted(){
  //   const htmlElements = document.getElementsByClassName('btn');
  //   console.log(htmlElements)
  // }
};
</script>

