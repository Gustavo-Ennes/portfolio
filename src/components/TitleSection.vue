<template>
	<b-row class='title-section' align-v='center'>
		<b-col cols='12' lg='10' class='cols-1'>
			<div class='p-3'>
				<h1 class='title bigger exclamation text-python animate__animated animate__bounce'>
					{
				</h1>
				<h1 class='text-center text-light title bigger'>
					hello: <small id='handPeace' class='far fa-hand-peace text-full animate__animated animate__fadeInDownBig animate__delay__1s'></small>
				</h1>
				<h1 :class="{'animate__hinge animate__delay__1s': isScrolling}" class='text-right text-warning exclamation bigger animate__animated animate__rubberBand animate__delay-1s'>}</h1>
			</div>
		</b-col>
		<b-col cols='12' lg='2' class='cols-2'>
		</b-col>
		<b-col cols='12' class='w-100'>
			<vue-typed-js 
			:strings="strings"
			:typeSpeed='50'
			:backSpeed='35'
			:startDelay='1500'
			:backDelay='1000'
			:cursorChar="'_'"
			class='text-center w-100 text-red'
			>
				<h2 class='text-light w-100 carrot'>
				>	<span class='typing mono text-center '></span>
				</h2>
			</vue-typed-js>
		</b-col>
		<b-col cols='12' class='text-center cols-3'>
			<b-link class='btn mrgBtn mono animate' @click="handleClick">See more</b-link>
		</b-col>
		<!-- <b-col cols='12 text-center'>
			<b-img id='titleImg' src="https://miro.medium.com/max/1200/1*izk2NkHnucNIl5A-YtlZKw.png" fluid></b-img>
		</b-col> -->
	</b-row>
</template>

<script>
export default {
	name: 'TitleSection',
	methods: {
		async handleClick(){
			this.clicked = true
			await this.$emit("down");
		},
		handleScroll(){
			this.isScrolling = true;
		},
		addScrollListener(){
			window.addEventListener('scroll', this.handleScroll)		
		},
		addHandListener(){
			let hand = document.querySelector('#handPeace')
			hand.addEventListener("mouseenter", () => {
				hand.classList.remove('animate__fadeInDownBig')
				hand.classList.remove('animate__jackInTheBox')
				hand.classList.add('animate__jackInTheBox')
			})
			hand.addEventListener('animationend', () => {
				hand.classList.remove('animate__jackInTheBox')
			})
		},
	},
	data(){
		return{
			clicked: false,
			isScrolling: false,
			startAnother: false,
			isBtnVisible: false,
			strings: [
				"<span class='text-red'> new </span>SoftwareEngineer( <b class='text-vue'>vue</b> )",
				"<span class='text-red'> new </span>SoftwareEngineer( <b class='text-node'>node</b> )",
				"<span class='text-red'> new </span>SoftwareEngineer( <b class='text-python'>python</b> )",
				"<span class='text-red'> new </span>SoftwareEngineer( <b class='text-django'>django</b> )",
				"<span class='text-red'> new </span>SoftwareEngineer( <b class='text-full'>'__full_stack__'</b> )"
			]
		}
	},
	mounted(){
		this.addHandListener()
		this.addScrollListener()
	}
};
</script>

<style lang='scss'>

	@import url('https://fonts.googleapis.com/css2?family=Bungee&family=Just+Another+Hand&display=swap');

	.cols{
		&-1{
			margin-top:1% !important;
		}
		&-2{
			margin-top: 10% !important;
		}
		&-3{
			margin-top: 5% !important;
			margin-bottom: 2% !important;
		}
	}
	
	.title-section{
		height: 100%;

		.btn{
			border: 2px solid #b38f01;
			background-color:  #f8c500;
			color:rgb(67, 180, 255);
		}
		.exclamation{
			font-family:"Just Another Hand", cursive ;
		}
		.typed-cursor{
			color:$color_bg;
		}
		#title{
			text-align: center !important;
		}
	}
</style>