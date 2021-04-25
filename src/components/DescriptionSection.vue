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
        <p class='mono p-2 cols-2 text-bg animate'>
            Web development experience <span class='text-shadow'>using </span>
            <span class='text-node'>Node.js</span>, 
            <span class='text-python'>Python</span>,
            <span class='text-red'>Java</span> in server side, 
            storing in no-sql database like <span class='text-success'>mongoDB</span> or a relational one,
            and handling the client side with the awesome <span class='text-vue'>Vue.js.... </span>

            <a class='text-full' v-b-modal.modal-me><small>Read more</small></a>
          <b-modal 
          id="modal-me" 
          size="xl" 
          title="Nice to meet you!"
          scrollable
          header-bg-variant='dark'
          header-text-variant='warning'
          body-bg-variant='dark'
          body-text-variant='warning'
          footer-bg-variant='dark'
          footer-text-variant='warning'
          header-class='mono'
          ok-only
          ok-title="Close"
          ok-variant='warning'
          title-class='modalTitle'
          >
            <template #modal-backdrop>
              <div class='vh-100 bd'>
                <img src='https://static0.colliderimages.com/wordpress/wp-content/uploads/2020/03/the-midnight-gospel-1.jpg' />'
              </div>
            </template>
            <b-row id='photo-place'>
              <b-col cols='12' lg='6'>
                <!-- <b-img src='https://i.postimg.cc/Mp7dbfyZ/eu.jpg' rounded='circle' fluid alt='My photo'></b-img> -->
                <b-img src='https://i.postimg.cc/wxVQ4YPH/badges.png' fluid alt='My hackerrank badges'></b-img>
              </b-col>

              <b-col cols='12' lg='6'>
                <p class='mono text-python my-3'>
                  A brazilian 30yo guy who was always fascinated about how computer works, 
                  and after 2017 and a delayed information systems bachelor starts  

                </p>
              </b-col>
            </b-row>                     
          </b-modal>
        </p>
      </div>
    </b-col>
    <b-col cols='12' class='w-100 text-center cols-3'>
      <p class='text-shadow mono text-yellow-l animate__delay__2s animate '>
        ...and a 8 minutes or more progrock
         songs
         while drinking a pure strong almost-no-sugar coffee skill too
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
  },
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

  .modal-content{
    background:rgba(0, 0, 0, 0.1) !important;
  }

  #photo-place{
    background: url(https://i.postimg.cc/Mp7dbfyZ/eu.jpg) center no-repeat;
    .col{
      background-color:rgba(0, 0,255, 0.1) !important;
    }
  }

</style>