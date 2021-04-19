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
      apiUrl: "https://api.ennes.dev/portfolio",
      maintenance: false,
    }
  },
  components: {
    Index,
    Maintenance
  }
};
</script>

