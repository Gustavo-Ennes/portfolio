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
      maintenance: true
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
  },
  metaInfo: {
    // Children can override the title.
    title: 'My Page Title',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: '%s ← My Site',
    link: {rel: 'canonical', href: 'https://www.ennes.dev'},
    // Define meta tags here.
    meta: [
      {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'Gustavo Ennes portfolio'},
      {property: 'og:title', content: 'Gustavo Ennes portfolio'},
      {property: 'og:site_name', content: 'Ennes Dev'},
      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'https://www.ennes.dev'},
      //{property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'Gustavo Ennes portfolio'},

      // Twitter card
      {name: 'twitter:card', content: 'portfolio'},
      {name: 'twitter:site', content: 'https://www.ennes.dev'},
      {name: 'twitter:title', content: 'Gustavo Ennes portfolio'},
      {name: 'twitter:description', content: 'Gustavo Ennes portfolio'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@alligatorio'},
      // {name: 'twitter:image:src', content: 'https://www.my-site.com/my-special-image.jpg'},

      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Gustavo Ennes portfolio'},
      {itemprop: 'description', content: 'Gustavo Ennes portfolio'},
      // {itemprop: 'image', content: 'https://www.my-site.com/my-special-image.jpg'}
    ]
  }
}
</script>


