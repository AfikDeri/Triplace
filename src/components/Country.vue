<template>
	<div class="w3-container">
	  <h2 class="main-title">{{ country }}</h2>


	  <h4 class="text-center">Weekly forcast</h4>
	  <forcast></forcast>
	  <hr>
	
	  <div class="w3-row">
	    <a href="#" @click.prevent="viewType = 'list'">
	      <div class="w3-half tablink w3-bottombar w3-hover-light-grey w3-padding" :class="viewType == 'list' ? 'w3-border-blue' : ''">All posts</div>
	    </a>
	    <a href="#" @click.prevent="viewType = 'map'">
	      <div class="w3-half tablink w3-bottombar w3-hover-light-grey w3-padding" :class="viewType == 'map' ? 'w3-border-blue' : ''">Map View</div>
	    </a>
	  </div>

	  <div class="w3-container city" v-if="viewType == 'list'">
		<posts></posts>
	  </div>

	  <div class="w3-container city" v-if="viewType == 'map'">
	    <map-view></map-view>
	  </div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Posts from './Posts';
	import MapView from './MapView';
	import Forcast from './Forcast';

	export default{
		name: "country",

		mounted(){
			this.country = this.$route.params.name;	

			axios.get("http://dev.servpile.com/api/posts?country="+this.country+"&api_token=uPfQo1ED5tVPkd6zQ42Y1AfMZsEHeo0QvD0ZlEVuWUMni7OIkTlXTcxphtUa")
			.then((response) => {

				this.$store.commit("setPosts", response.data.posts);
			});
		},

		computed: {
			posts(){
				return this.$store.state.posts;
			}
		},

		data(){
			return {
				viewType: "list",
				country: ""
			}
		},
		components: {
			Posts, MapView, Forcast
		}
	}
</script>

<style scoped>
	.post-wrapper {
	    background: #eee;
	    border-radius: 7px;
	}
</style>