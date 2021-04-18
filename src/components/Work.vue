<template>

  <b-card
    no-body
  >
    <b-card-body class='bg'>
      <b-card-title class='title text-yellow text-shadow bg'><b>Kratodo</b></b-card-title>
      <b-card-sub-title class="mb-2"><p class='text-white text-shadow'>A Simple todo app</p></b-card-sub-title>
      <b-card-text class='mono text-warning text-shadow bg'>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </b-card-text>
    </b-card-body>

    <b-list-group class='text-full text-shadow text-center w-100' flush>
      <b-list-group-item><a href='#'>Page</a></b-list-group-item>
      <b-list-group-item><a href='#'>Repo</a></b-list-group-item>
      <b-list-group-item><a href='#'>Presentation</a></b-list-group-item>
    </b-list-group>
  </b-card>


</template>

<script>
export default {
  name: "Work",
  methods: {
    handleClick(){
      
    }
  }
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


</style>  