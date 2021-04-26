<template>
  <b-row class='img-bg'>
    <b-col cols='12' class='w-100 text-right mt-1 cols-1'>
      <small class='text-node'>
          <vue-typed-js 
          :strings="[`stringify( <span class='text-full'>me</span> );`]"
          :typeSpeed='50'
          :backSpeed='35'
          :startDelay='1500'
          :backDelay='1000'
          :cursorChar="'_'"
          >
            <span class='mono title animate'>
              >
              <span class='typing'></span>
            </span>
          </vue-typed-js>
      </small>
    </b-col>
    <b-col id='descTitle' cols='12' md='8' lg='6' offset-md='2' offset-lg='3' class='text-center'>
      <div class='m-1'>
        <h1 class='title display-3 shdwBlue animate'>
          <span class='text-vue hi'>Hi</span>, 
          I'm <span class='shdwBlue'>Gus</span>tavo 
          <span class='shdwBlue ennes'>Ennes!</span>
        </h1>
        <div class='mono p-2 cols-2 text-bg animate fromPortal'>
          <p id='description' class='animate__late'>
            Web development <span class='text-shadow'>using </span>
            <span class='text-node'>Node.js</span>, 
            <span class='text-python'>Python</span>,
            <span class='text-red'>Java</span> in server side, 
            storing in no-sql database like <span class='text-success'>mongoDB</span> or a relational one,
            and handling the client side with the awesome <span class='text-vue'>Vue.js.... </span>
          </p>
          <!-- <a class='text-full' v-b-modal.modal-me><small>Read more</small></a> -->
          <b-modal 
          id="modal-me" 
          size="xl" 
          title="Nice to meet you!"
          header-text-variant='warning'
          body-text-variant='warning'
          footer-text-variant='warning'
          header-class='modalHeader'
          ok-only
          ok-title="Close"
          ok-variant='warning'
          title-class='modalTitle'
          modal-class='modalClass'
          >
            <template #modal-backdrop>
              <div class='vh-100 bd'>
                <img src='https://static0.colliderimages.com/wordpress/wp-content/uploads/2020/03/the-midnight-gospel-1.jpg' />'
              </div>
            </template>
            <b-row>
              <b-col cols='12' lg='6'>
                <b-img src='https://i.postimg.cc/Mp7dbfyZ/eu.jpg' rounded='circle' fluid alt='My photo'></b-img>
              </b-col>

              <b-col cols='12' lg='6'>


                <b-row>
                  <b-col cols='12'>
                    <h1 class='text-center title text-full mx-auto'>My hackerrank badges</h1>
                   <b-img src='https://i.postimg.cc/wxVQ4YPH/badges.png' fluid alt='My hackerrank badges'></b-img>
                  </b-col>
                  <b-col cols='12'>
                    <p class='mono text-python my-3'>
                      A beginner realising, after few projects, that the things I know are a drop, the things that 
                      I know that I don't know is a river and the things that I don't know that I don't know is the hugeness of all oceansz\
                    </p>
                  </b-col>
                </b-row>


              </b-col>
            </b-row>                     
          </b-modal>
        </div>
      </div>
    </b-col>
    <b-col cols='12' class='w-100 text-center cols-3'>
      <p class='text-shadow mono text-yellow-l animate__delay__2s animate '>
        ...while listen to a 8 minutes or more progrock
         song while drinking a pure strong almost-no-sugar coffee <i class='fas fa-mug-hot display-4 animate__late'></i>
      </p>
    </b-col>
		<b-col cols='12' class='text-center cols-4'>
			<b-link class='btn btn-dark text-full mrgBtn mono animate' @click="handleClick">See projects</b-link>
		</b-col>
  </b-row>
</template>

<script>

export default {
  name: 'DescriptionSection',
  props: ['doEffectHeight'],
  data(){
    return{
      clicked: false,
    }
  },
  methods:{
    async handleClick(){
      this.clicked = true
      await this.$emit('down');
    },
    addDescriptionListener(){
			let obj = document.querySelector('#description')
			obj.addEventListener("mouseenter", () => {
        if(!obj.classList.contains('animating')){
          obj.classList.add('animate__animated', 'animate__jackInTheBox', 'animating')
        }
      })
			obj.addEventListener('animationend', () => {
				obj.classList.remove('animate__animated', 'animate__jackInTheBox')
			})
      obj.addEventListener('mouseleave', () => {
        obj.classList.remove('animating')
      })
    },
  },
  mounted(){
    this.addDescriptionListener()
  }
}
</script>

<style lang='scss' scoped>
  .cols{
    &-1{
      margin-top: 5% !important;
    }
    &-2{
      margin-top: 25% !important;
    }
    &-3{
      margin-top: 15% !important;
    }
    &-4{
      margin-top: 15% !important;
      margin-bottom: 5% !important;
    }
  }

  .shdwBlue{
    @include textShadow($color_yellow);
  }

  .mrgn{
    @include margin(40px, 60px, 220px, 280px, 'mt');
  }

  .text-bg{
    margin:5px;
    background-color:rgba(0, 0, 0, 0.85);
    border-top-right-radius: 120px;
    color:white;
    @include size(10px, 12px, 20px, 30px, "f");
  }

  .img-bg{
    background: transparent url(https://mystickermania.com/cdn/stickers/rick-and-morty/sticker_2060.png) center no-repeat;
  }

  .ennes{
    @include medium{
      color: $color_yellow;
      text-shadow:-3px 2px 2px #000 !important;
      font-style: bold;
    }
    @include small{
      color: $color_yellow;
      text-shadow:-3px 2px 2px #000 !important;
      font-style: bold;
    }
    @include verySmall{
      color: $color-bg;
      text-shadow:-3px 2px 2px #000 !important;
      font-style: bold;
    }
    .hi{
      color: $color_bg;
      text-shadow:-3px 2px 2px #000 !important;
    }
  }
  
  .modalTitle{
    @include size(15px ,18px, 20px, 25px, 'f');
  }

  .modalHeader{
    background-color: rgba(0, 0, 0, 0.01) !important; 
  }
</style>