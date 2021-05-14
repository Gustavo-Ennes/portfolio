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
          <p id='description' class='animate__late translate'>
            Web development <span class='text-shadow'>using </span>
            <span class='text-node'>Node.js</span>, 
            <span class='text-python'>Python</span>,
            <span class='text-red'>Java</span> in server, 
            storing in no-sql database like <span class='text-success'>mongoDB</span> or a relational one,
            and handling the client side with the awesome <span class='text-vue'>Vue.js.... </span>
          </p>

          <!-- Button trigger modal -->
          <button type="button" class="btn btn-warning text-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            see more
          </button>

          <!-- Modal -->
          <div class="modal modal-fullscreen fade" id="staticBackdrop" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title title" id="staticBackdropLabel"><b>Ennes, Gustavo. Nice to meet you!</b></h5>
                  <button type="button" class="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body mono">
                  I'm a problem solver who wants to increase daily my efficiency at solution searching, its applications and implications. A Brazil based beginner in web development,I'm a Information Systems Bachelor student who desires to increase your skills in development of any kind of technology. A computer always was my teenage dream, and  the magic that happens beginning with just 0 and 1 goes, everyday, dictating more and more how our lives can be more easy and accessible and solving unimaginable problems to us few decades ago, inspired me at the computer archteture college subject . It was just a dream until about a year ago, when a realize that I can and I want to learn more about this role, so I've decided to focus in the learning process of to read, search and test solutions, to apply them to my projects and build a portfolio, independently of a language or technology in particular. I hope to contact you soon.
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-warning text-success" data-bs-dismiss="modal">back</button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </b-col>
    <b-col cols='12' class='w-100 text-center cols-3'>
      <p class='text-shadow mono text-yellow-l animate__delay__2s animate'>
        <span class='translate'>..while listen to a 14 minutes progrock song drinking a pure strong almost-no-sugar coffee</span> <i class='fas fa-mug-hot display-4 animate__late'></i>
      </p>
    </b-col>
		<b-col cols='12' class='text-center cols-4'>
			<b-link class='btn btn-dark text-full mrgBtn mono animate' @click="handleClick"><span class='translate'>See projects</span></b-link>
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
    }
  },
  async mounted(){
    this.addDescriptionListener()
  }
}
</script>

<style lang='scss' scoped>
  .modal{
      background: url(https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/04/Netflix-The-Midnight-Gospel-Clancy-5-Cropped.jpg) center no-repeat;
      background-position: cover;

      &-title{
        color:#eee;
        text-shadow: 1px 1px 2px #000;
        padding:5px;
        border-radius: 10px;
        background-color: rgba(50, 150, 50, 0.4);
      }

      &-content{
        background:rgba(50, 150, 50, 0.8) !important;
        color:$color_yellow !important;
        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
      }

      &-header{
        background: url('../assets/badges.png') center no-repeat;
        background-size: 100% 100%;
      }
  }
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