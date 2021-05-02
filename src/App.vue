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
        // animate elements while scrolling
        const toAnimateElements = document.querySelectorAll(".animate");
        toAnimateElements.forEach( (el) => {
          animate(el);
        });

        
  // -ms-transform: skewY(20deg); /* IE 9 */
  // transform: skewY(20deg);
      });
    }
  },
  mounted(){
    this.makeTransparent()
    this.addScrollListener()
  },
  metaInfo: {
    // Children can override the title.
    title: `
        Full-stack web developer freelancer, Javascript developer, Python developer, Node developer, 
        Vue developer, Django developer, Gustavo Ennes portfolio, Gustavo Ennes dev, Gustavo Ennes projects, 
        Gustavo Ennes freelancer
      `,
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: 'Gustavo Ennes %s',
    link: {rel: 'canonical', href: 'https://www.ennes.dev'},
    // Define meta tags here.
    meta: [
      {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
      {description: `
        Full-stack web developer freelancer, node, python, django, RESTful api's, Cloud Functions, 
        relational and non-relational databases. Check out my portfolio to see my projects!
      `},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content:  `
        Full-stack web developer freelancer, node, python, django, RESTful api's, Cloud Functions, 
        relational and non-relational databases. Check out my portfolio to see my projects!
      `},
      {property: 'og:title', content: 'Web developer Gustavo Ennes website'},
      {property: 'og:site_name', content: 'Ennes Dev'},
      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'Web developer Gustavo Ennes website'},
      //{property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content:  `
        Full-stack web developer freelancer, node, python, django, RESTful api's, Cloud Functions, 
        relational and non-relational databases. Check out my portfolio to see my projects!
      `},

      
      // Google / Schema.org markup:
      {itemprop: 'name', content: 'ennes.dev'},
      {itemprop: 'description', content:  `
        Full-stack web developer freelancer, node, python, django, RESTful api's, Cloud Functions, 
        relational and non-relational databases. Check out my portfolio to see my projects!
      `},
      // {itemprop: 'image', content: 'https://www.my-site.com/my-special-image.jpg'}
      {itemprop: 'jobTitle', content: 'full-stack web developer'},
      {itemprop: 'knowsAbout', content: 'web development, javascript, vue, node, python, django'},
      {itemprop: 'aditionalName', content: 'Web developer Gustavo Ennes website'},
      {itemprop: 'address', content: 'ilha solteira, são paulo - brasil'},
      {itemprop: 'email', content: 'gustavo@ennes.dev'},
    ]
  }
}
</script>


