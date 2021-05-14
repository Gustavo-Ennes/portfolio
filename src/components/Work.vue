<template>
  <!-- <div class="project animate animate__zoom work h-100">
    
  </div> -->
  <div class='project bg animate animate__zoom'>
    <b-row align-v='center'>
      <b-col cols='12' class='project-top'>
        <div class='project-header bg p-2'>
          <h5 class='project-title title text-yellow text-shadow bg'><b class='animate__late'>{{ project.title }}</b></h5>
          <p class='project-subtitle text-white text-shadow translate'>{{ project.subTitle}}</p>
        </div>
        <div class="project-body bg">
          <p class='project-text mono text-shadow text-white font translate'>{{ project.description }}</p>

          <b-row align-v='center' align-h='around'>
            <b-col v-for="tech in project.usedTechs" :key='tech' class='text-center'>
              <small class='mrgn mono text-white text-shadow techFont p-1'>{{ tech }}</small>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col cols='12' class='project-footer'>
        <ul class="list-group list-group-flush text-full text-shadow text-center p-2 h-100">
          <li class='list-group-item'><b-link :href='project.projectLink'><span class='translate'>Page</span></b-link></li>
          <li class='list-group-item'><b-link :href='project.repo'><span class='translate'>Repo</span></b-link></li>
          <li class='list-group-item'><b-link :href='project.presentation'><span class='translate'>Presentation</span></b-link></li>
        </ul>
      </b-col>
    </b-row>
  </div>

</template>

<script>
export default {
  name: "Work",
  props: ['project']
}
</script>

<style lang='scss' scoped>
  .project{
    margin:20px;
    visibility: hidden;
    border-radius:10px;

    &-header{
      border-top-left-radius: 10px !important;
      border-top-right-radius: 10px !important;
    }

    &-title{
      @include size(15px, 20px, 30px,50px, 'f');
      background-color: rgba(0, 0, 0, 0.15);
      border-bottom-right-radius: 100px !important;
      padding: 5px;
    }
    &-subtitle{
      @include size(10px, 12px, 14px, 18px, 'f');
      margin-top: 10px;
      padding: 5px;
    }
    &-text{
      @include size(10px, 12px, 15px, 18px, 'f');
      margin-top: 10% !important;
      border-top-right-radius: 100px;
      padding: 5px;
    }
  }
  .bg{
    background-color:rgba(65, 185, 255, 0.14);
  }
  .text-include{
    @include size(11px, 15px, 20px, 25px, 'f');
  }
  .list-group{
    border-radius:10px !important
  }
  .list-group-item{
    background-color: $color_yellow !important;
    :hover{
      background-color: $color_blue !important;
      color: $color_yellow !important;
    }
  }

  .animate__late{
    visibility: hidden;
  }

  .mrgn{
    margin-top: 25% !important;
  }

  .techFont{
    @include size(8px, 10px, 12px, 15px, 'f');
  }


</style>  