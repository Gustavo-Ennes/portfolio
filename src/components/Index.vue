<template>
	<b-row align-v='center'>
		<b-col id='titleSection' cols='12' class='section section-title' :style="style">
			<TitleSection @down="scrollTo('description')"/>
		</b-col>


		<b-col id='descriptionSection' cols='12' class='section section-description color-yellow' :style="style">
			<DescriptionSection @down="scrollTo('works')"/>
		</b-col>


		<b-col id='workSection' cols='12' class='section section-works color-dark' :style="style">
			<WorkSection @down="scrollTo('talkToMe')"/>
		</b-col>


		<b-col id='talkSection' cols='12' class='section section-talk_to_me' :style="style">
			<TalkSection @down="scrollTo('contacts')" />
		</b-col>
	</b-row>
	
</template>


<script>
import TitleSection from './TitleSection.vue';
import DescriptionSection from './DescriptionSection.vue';
import WorkSection from './WorkSection.vue';
import TalkSection from './TalkSection.vue';

const smoothScroll = require('smoothscroll');
const h = window.screen.availHeight;

export default{
	name: "Index",
	props: ['api'],
	data(){
		return{
			scrollPoints: {
				'title': '',
				'description': '',
				'skills': '',
				'works': '',
				'talkToMe': '',
				'contacts': '',
			},
			screen_h: h,
		}
	},
	components: {
		TitleSection,
		DescriptionSection,
		WorkSection,
		TalkSection
	},
	methods: {
		scrollTo(pointName){
			try {
				smoothScroll(this.scrollPoints[pointName])
			} catch (error) {
				console.log(error)
			}
		}
	},
	computed: {
		style(){
			return {minHeight: (this.screen_h) + "px",}
		}
	},
	mounted(){
		this.scrollPoints['title'] = document.querySelector('#titleSection');
		this.scrollPoints['description'] = document.querySelector('#descriptionSection');
		this.scrollPoints['skills'] = document.querySelector('#skillSection');
		this.scrollPoints['works'] = document.querySelector('#workSection');
		this.scrollPoints['talkToMe'] = document.querySelector('#talkSection');
		this.scrollPoints['contacts'] = document.querySelector('#contactSection')
	}	
};	
</script>

<style lang='scss'>

	.section{
		&-title{
			background-color: $color_dark;
		}
	}

	.color{
		&-blue{
			background-color: $color_blue;
		}
		&-dark{
			background-color: $color_dark;
		}
		&-red{
			background-color: $color_red;
		}
		&-green{
			background-color: $color_green;
		}
		&-bg{
			background-color: $color_bg;
		}
		&-yellow{
			background-color: $color_yellow;
		}
	}
</style>