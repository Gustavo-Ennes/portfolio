<template>
  <main>
    <Index v-if='!maintenance' :api='apiUrl'/>
    <Maintenance v-else />
  </main>
</template>

<script>
import Maintenance from './components/MaintenanceScreen.vue';
import Index from './components/Index.vue';

export default {
  name: 'App',
  data(){
    return {
      apiUrl: "https://api.ennes.dev",
      maintenance: false
    }
  },
  components: {
    Index,
    Maintenance
  },
  methods: {
    makeTransparent(){
      let els = document.querySelectorAll(".animate, .animate__late")
      els.forEach( el => {
        el.style.setProperty('visibility', 'hidden')
      })
    },
    addScrollListener(){
      let animate = require('../utils/animateCSS')

      document.addEventListener('scroll',() => {
        const toAnimateElements = document.querySelectorAll(".animate");
        toAnimateElements.forEach( (el) => {
          animate(el);
        });
      });
    }
  },
  mounted(){
    this.makeTransparent()
    this.addScrollListener()
  }
}
</script>


