<template>
  <b-row align-v='center' class='main'>
    <b-col cols='12'><h1 class='text-full display-2 title text-center text-shadow my-5'>Send a <span class='text-vue'>message</span> </h1></b-col>
    <b-col cols='12' md='6'>
      <h1 class='display-1 text-full title text-center text-shadow'>h e r e</h1>
    </b-col>
    <b-col cols='12' md='6'>
      <div class='m-2 mt-5 text-center'>
        <b-form-textarea
        id="textarea-state"
        v-model="text"
        :state="isValid"
        placeholder="Enter at least 30 characters"
        rows="10"
        class='bg-10 text-success mono '
        ></b-form-textarea>
        <b-button
        class='my-5'
        :disabled='!isValid'
        :class="{'bg-red': !isValid}"
        >{{ btnText }}</b-button>
      </div>
    </b-col>

    <b-col cols='12'>
      <h1 class='text-node title text-center my-5 text-shadow '>or <span class='text-white text-shadow'>contact me</span> in <span class='text-vue'>social</span> media</h1>
      <div class='socialWrapper my-5'>
        <b-row align-h='center' class='text-center'>
          <b-col cols='3'>
            <a href='#'><i class="fab fa-facebook display-4"></i></a>
          </b-col>

          <b-col cols='3'>
            <a href='#'><i class="fab fa-github display-4"></i></a>
          </b-col>

          <b-col cols='3'>
            <a href='#'><i class="fab fa-linkedin display-4"></i></a>
          </b-col>

          <b-col cols='3'>
            <a href='#'><i class="fab fa-hackerrank display-4"></i></a>
          </b-col>
        </b-row>
      </div>
      
    </b-col>

  </b-row>  
</template>

<script>
export default {
  name: 'TalkSection',
  data(){
    return{
      text: '',
    }
  },
  computed: {
    isValid(){
      return this.text.length > 30;
    },
    btnText(){
      return !this.isValid ? 'Say hello!' : 'Send it!'
    }
  },
  methods: {
    async handleClick(){
      await this.$emit('down');
    }
  }

}
</script>

<style lang='scss' scoped>
  .main{
    background: url(https://www.vectorico.com/download/office/Mail-Icon.png) center no-repeat;
  }

  .bg{
    &-10{
      background-color: rgba(255, 255, 255, 0.4) !important;
    }
    &-red{
      background-color: $color_red !important;
    }
    &-blue{
      background-color: $color_blue !important;
    }
  }
  .btn{
    background-color: $color_blue;
  }

</style>