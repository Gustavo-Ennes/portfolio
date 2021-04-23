<template>
  <b-row align-h='around' align-v='center'>
    <b-col cols='12' class='cols-1'>
      <h1 class='title bigger text-full text-center'>Projects</h1>
    </b-col>

    <b-col v-for='project in projects' :key='project._id' cols='12' md='6' lg='4' class='cols-2 bg'>
      <Work :project='project'/>
    </b-col>
    
		<b-col cols='12' class='text-center cols-3'>
			<b-link class='btn btn-dark text-full mono' @click="handleClick">Talk to me</b-link>
		</b-col>
  </b-row>  
</template>

<script>
import Work from './Work.vue';

export default {
  name: "WorkSection",
  props: ['api'],
  data(){
    return{
      projects: []
    }
  },
  components: {
    Work,
  },
  methods: {
    async handleClick(){
      await this.$emit('down');
    }
  },
  async mounted(){
    let res = await fetch(`${this.api}/portfolio/project`)
    let json = await res.json()
    this.projects = json.projects
  }
}
</script>  

<style lang='scss' scoped>
  .cols{
    &-1{
      margin-top: 10% !important;
    }
    &-2{
      margin-top: 5% !important;
    }
    &-3{
      margin-top: 15% !important;
    }
  }

</style>