<template>
  <b-row align-v='center' class='main'>
    <b-col cols='12'><h1 class='text-full display-2 title text-center text-shadow my-5'>Send a <span class='text-vue'>message</span> </h1></b-col>
    <b-col cols='12' md='6'>
      <h1 class='display-1 text-full title text-center text-shadow'>h e r e</h1>
    </b-col>
    <b-col cols='12' md='6'>
      <div class='m-2 mt-5 text-center'>
        <b-input 
        type="email" 
        v-model="email"        
        class='bg-10 text-success mono mb-3'
        placeholder='Enter your e-mail'
        :state='isEmailValid'>
        </b-input>
        <b-form-textarea
        id="textarea-state"
        v-model="text"
        :state="isMessageValid"
        placeholder="Enter at least 30 characters"
        rows="10"
        class='bg-10 text-success mono '
        >
        </b-form-textarea>
        <b-button
        class='my-5'
        :disabled='!isValid || emailSended'
        :class="{
          'bg-red': !isValid, 
          'bg-blue': (isValid && !emailSended),
          'bg-10': (isValid && emailSended)
        }"
        @click="sendMails"        
        >
          <b-overlay
            id="overlay-background"
            :show="btnLoading"
            :variant="'primary'"
            :opacity="'0.1'"
            rounded="sm"
          >
          {{ btnText }}
          </b-overlay>
          
        </b-button>
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
const axios = require('axios');

export default {
  name: 'TalkSection',
  props: ['api'],
  data(){
    return{
      text: '',
      email: '',
      btnLoading: false,
      emailSended: false
    }
  },
  computed: {
    isValid(){
      return (this.isMessageValid && this.isEmailValid);
    },
    isEmailValid(){
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(this.email)){
          return true
      }
      return (false)   
    },
    isMessageValid(){
      return this.text.length > 30
    },   
    btnText(){
      return !this.isValid ? 'Say hello!' : (!this.emailSended ? 'Send it!' : 'Done!')
    }
  },
  methods: {
    async handleClick(){
      await this.$emit('down');
    },
    async sendClientMail(){ 

      if(this.isValid){
        let res = await axios.post('send-mail/', {
          to: [this.email],
          from: null,
          html: "WelcomeTemplate", 
          text: null,
          subject: "Hi, I'm Gustavo!"
        })
        console.log(res)
      }
    },
    async sendMyMail(){

      if(this.isValid){
        let res = await axios.post('send-mail/', {
          to: ["reports@ennes.dev"],
          from: null,
          html: null, 
          text: `The client ${this.email} says:\n\n\n${this.text}`,
          subject: "THERE'S A MESSAGE IN MY PORTFOLIO"
        })
        console.log(res)
      }

    },
    async sendMails(){
      if(this.isValid && !this.emailSended){
        try{
          this.btnLoading = true

          await this.sendClientMail()
          await this.sendMyMail()

          this.btnLoading = false
          this.emailSended = true
        }catch(err){
          console.log(err)
        }
      }
     
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