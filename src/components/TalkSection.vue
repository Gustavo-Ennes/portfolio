<template>
  <b-row align-v='center' class='main vh-100'>
    <b-col cols='12'><h1 class='text-full display-2 title text-center text-shadow my-5'>Send a <span class='text-vue animate'>message</span></h1></b-col>
    <b-col cols='12' md='6'>
      <h1 class='display-1 text-full title text-center text-shadow animate'>h e r e</h1>
    </b-col>
    <b-col v-if='!emailSended' cols='12' md='6' class='form'>
      <div class='m-2 mt-5 text-center'>
        <b-input 
        type="email" 
        v-model="email"        
        class='bg-10 text-success mono mb-3 animate animate__zoom'
        placeholder='Enter your e-mail'
        :state='isEmailValid'>
        </b-input>
        <b-form-textarea
        id="textarea-state"
        v-model="text"
        :state="isMessageValid"
        placeholder="Enter at least 30 characters"
        rows="10"
        class='bg-10 text-success mono animate animate__zoom'
        >
        </b-form-textarea>
        <b-button
        class='my-5 animate'
        id='btn'
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

    <b-col cols='12' md='6' v-else class='thanks animate__animated animate__fadeInUp'>
      <h1 class='display-3 text-center text-shadow mono text-red'>Thank You</h1>
    </b-col>

    <b-col cols='12'>
      <h1 class='text-node title text-center my-5 text-shadow animate'>or <span class='text-white text-shadow'>contact me</span> in <span class='text-vue'>social</span> media</h1>
      <div class='socialWrapper my-5'>
        <b-row align-h='center' class='text-center logo'>
          <b-col>
            <a href='#'><i class="logo-face fab fa-facebook display-4 animate animate__zoom"></i></a>
          </b-col>

          <b-col>
            <a href='#'><i class="logo-github fab fa-github display-4 animate animate__zoom"></i></a>
          </b-col>

          <b-col>
            <a href='#'><i class="logo-linkedin fab fa-linkedin display-4 animate animate__zoom"></i></a>
          </b-col>

          <b-col>
            <a href='#'><i class="logo-hackerrank fab fa-hackerrank display-4 animate animate__zoom"></i></a>
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
    },
    myMailText(){
      return `
        The client ${this.email} says:\n\n\n${this.text}
      `
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
          to: ["talk-to-me@ennes.dev"],
          from: null,
          html: null, 
          text: this.myMailText,
          subject: "THERE'S A MESSAGE IN MY PORTFOLIO"
        })
        console.log(res)
      }

    },
    sendedMailAnimation(){
      let d = document.querySelector('.thanks')
      let f = document.querySelector('.form')
      f.classList.add('animate__animated', 'animate__fadeOutLeft')
      d.style.setProperty('visibility', 'visible')
      d.classList.add('animate__animated', 'animate__fadeInUp')


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
     
    },
    addInputListeners(){
      let inputs = document.querySelectorAll('.form-control')
      inputs.forEach(input => {
        input.addEventListener('focus', () => {
          input.addEventListener('animationend', () =>{
            input.classList.remove('animate__animated', 'animate__pulse')
          })
          input.style.setProperty('--animate-duration', '0.3s')
          input.classList.add('animate__animated', 'animate__pulse')
        })
      })
    },
    addLogoHoverListeners(){
      let logos = document.querySelectorAll('.logo-face, .logo-github, .logo-linkedin, .logo-hackerrank')

      logos.forEach( logo => {
        logo.addEventListener('mouseenter', () => {
          if(!logo.classList.contains('animating'))
            logo.classList.add('animate__animated', 'animate__jello', 'animating')
            logo.style.setProperty('--animate-duration', '0.2s')

            logo.addEventListener('animationend', () => {
              logo.classList.remove('animate__animated', 'animate__jello')
            })
            logo.addEventListener('mouseleave', () => {
              logo.classList.remove('animating')
            })
        })
      })
    }
  },
  mounted(){
    this.addInputListeners()
    this.addLogoHoverListeners()
  }
}
</script>

<style lang='scss' scoped>
  .main{
    height: 100% !important;
    background: url(https://www.vectorico.com/download/office/Mail-Icon.png) center no-repeat;
    background-position: cover;
  }

  .thanks{
    background: url(https://i.pinimg.com/originals/5a/f8/0b/5af80b1df4057cc10288c079dc826662.png) center no-repeat;
    background-size: 50%;
    height: 520px;
    background-color: rgba(255, 255, 255, 0.1);
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

  .logo{
    &-github:hover{
      color: #111;
    }
    &-linkedin:hover{
      color: #0371AE;
    }
    &-hackerrank:hover{
      color: #2DBC5F;
    }
  }

</style>