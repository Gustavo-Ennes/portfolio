<template>
  <b-card
    no-body
    class=''
  >
    <b-card-body class='bg h-100'>
      <b-card-title class='title text-yellow text-shadow bg'><b>{{ project.title }}</b></b-card-title>
      <b-card-sub-title class="mb-2"><p class='text-white text-shadow'>{{ project.subTitle}}</p></b-card-sub-title>
      <b-card-text class='mono text-warning text-shadow bg'>
        {{ project.description }}
      </b-card-text>
      <b-row align-v='end' align-h='around' class='mrgn'>
        <b-col v-for="tech in project.usedTechs" :key='tech' class='text-center'>
          <small class='mono text-white text-shadow techFont mt-5'>{{ tech }}</small>
        </b-col>
      </b-row>

    <b-list-group class='text-full text-shadow text-center w-100 h-35 mt-0' flush>
      <b-list-group-item><b-link :href='project.projectLink'>Page</b-link></b-list-group-item>
      <b-list-group-item><b-link :href='project.repo'>Repo</b-link></b-list-group-item>
      <b-list-group-item><b-link :href='project.presentation'>Presentation</b-link></b-list-group-item>
    </b-list-group>
    </b-card-body>
  </b-card>


</template>

<script>
export default {
  name: "Work",
  props: ['project']
}
</script>

<style lang='scss' scoped>
  .card{
    margin: 5%;
    border-bottom-left-radius:12px;
    border-bottom-right-radius: 12px ;
    background-color: transparent !important;

    &-title{
      @include size(15px, 20px, 30px,50px, 'f');
      background-color: rgba(0, 0, 0, 0.15);
      border-bottom-right-radius: 100px !important;
    }
    &-subtitle{
      @include size(10px, 12px, 14px, 18px, 'f');
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
    border-radius:12px;
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

  .mrgn{
    margin-top: 25% !important;
  }

  .techFont{
    @include size(8px, 10px, 12px, 15px, 'f');
  }
  .h{
    &-65{
      height: 65% !important;
    }
    &-35{
      height: 35% !important;
    }
    &-100{
      height: 100% !important;
    }
  }


</style>  