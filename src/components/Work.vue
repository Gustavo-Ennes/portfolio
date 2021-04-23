<template>

  <b-card
    no-body
  >
    <b-card-body class='bg'>
      <b-card-title class='title text-yellow text-shadow bg'><b>{{ project.title }}</b></b-card-title>
      <b-card-sub-title class="mb-2"><p class='text-white text-shadow'>{{ project.subtitle}}</p></b-card-sub-title>
      <b-card-text class='mono text-warning text-shadow bg'>
        {{ project.description }}
      </b-card-text>
      <b-row align-v='center' align-h='around'>
        <b-col v-for="tech in project.usedTechs" :key='tech' class='text-center'>
          <small class='mono text-white text-shadow techFont'>{{ tech }}</small>
        </b-col>
      </b-row>
    </b-card-body>

    <b-list-group class='text-full text-shadow text-center w-100' flush>
      <b-list-group-item><b-link :href='project.projectLink'>Page</b-link></b-list-group-item>
      <b-list-group-item><b-link :href='project.repo'>Repo</b-link></b-list-group-item>
      <b-list-group-item><b-link :href='project.presentation'>Presentation</b-link></b-list-group-item>
    </b-list-group>
  </b-card>


</template>

<script>
export default {
  name: "Work",
  props: ['project'],
}
</script>

<style lang='scss' scoped>
  .card{
    margin: 5%;
    border-radius:12px;
    &-title{
      @include size(15px, 20px, 30px,50px, 'f');
      background-color: rgba(0, 0, 0, 0.15);
      border-bottom-right-radius: 100px;
    }
    &-subtitle{
      @include size(12px, 15px, 20px,25px, 'f');
      margin-top: 10px;
    }
    &-text{
      @include size(13px, 17px, 24px, 30px, 'f');
      background-color: rgba(0, 0, 0, 0.2);
      margin-top: 10% !important;
      border-top-right-radius: 100px;
    }
  }
  .bg{
    background-color:rgba(67, 180, 255, 0.65) !important;
  }
  .text-include{
    @include size(11px, 15px, 20px, 25px, 'f');
  }

  .list-group-item{
    background-color: $color_yellow !important;
    :hover{
      background-color: $color_blue !important;
      color: $color_yellow !important;
    }
  }

  .techFont{
    @include size(10px, 12px, 15px, 18px, 'f');
  }


</style>  