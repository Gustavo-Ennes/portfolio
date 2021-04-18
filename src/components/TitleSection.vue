<template>
	<b-row class='title-section' align-v='center'>
		<b-col cols='12' lg='10' class='cols-1'>
			<div class='p-3'>
				<h1 class='title bigger exclamation text-python'>
					{
				</h1>
				<h1 class='text-center text-light title bigger'>
					hello: <small class='far fa-hand-peace text-full'></small>
				</h1>
				<h1 class='text-right text-warning exclamation bigger'>}</h1>
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
			<b-link class='btn mrgBtn mono' @click="handleClick">See more</b-link>
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
		handleTypeCompleted(){
			this.isBtnVisible = true
		},
		async handleClick(){
			await this.$emit("down");
		}
	},
	data(){
		return{
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