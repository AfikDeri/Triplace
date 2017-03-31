<template>
	<div class="w3-container main-title">
		<forcast></forcast>

		<hr>
		<div id="category-filter">
			<span>Filter By:</span>
			<button class="btn" @click.prevent="selectCategory('All')" :class="cat == 'All' ? 'btn-primary' : ''">All</button>
			<button class="btn" @click.prevent="selectCategory(category)" :class="cat.name == category.name ? 'btn-primary' : ''" v-for="category in categories">{{ category.name }}</button>
		</div>
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
			<posts :country="country"></posts>
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

			this.countries.map(ctr => {
				if(ctr.name == this.country){
					this.$store.commit("setCountry", ctr);
				}
			});

			this.selectCategory("All");
		},

		computed: {
			posts(){
				return this.$store.state.posts;
			},
			countries(){
				return this.$store.state.countries;
			},
			categories(){
	        	return this.$store.state.categories;
	        }
		},

		data(){
			return {
				viewType: "list",
				country: "",
				cat: ""
			}
		},
		methods: {
			selectCategory(category){
				this.cat = category;

				let url = "http://dev.servpile.com/api/posts?country="+this.country+"&api_token=uPfQo1ED5tVPkd6zQ42Y1AfMZsEHeo0QvD0ZlEVuWUMni7OIkTlXTcxphtUa";

				let categoryId = category == "All" ? "" : "&category="+ this.cat.id;

				axios.get(url + categoryId)
				.then((response) => {
					this.$store.commit("setPosts", response.data.posts);
					this.$store.commit("setCategories", response.data.categories);

					eventBus.$emit("postsRefreshed");
				});
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
