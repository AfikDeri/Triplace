<template>
	<div class="w3-container main-title">
		<button id="add-post" @click.prevent="showModal = true">Create Post <i class="fa fa-plus"></i></button>
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

		<modal v-show="showModal" @close="showModal = false">
	    	<h3 slot="header">Create a new post</h3>
	    	<div slot="body">
	    		<form action="" method="GET">
	    			<div class="form-group">
	    				<label for="is_question">Question or Suggestion?</label>
	    				<select name="is_question" class="form-control" v-model="post.is_question">
	    					<option value="1">Question</option>
	    					<option value="0">Suggestion</option>
	    				</select>
	    			</div>
	    			<div class="form-group">
	    				<label for="category_id">Category</label>
	    				<select name="category_id" class="form-control" v-model="post.category_id">
	    					<option v-for="category in categories" :value="category.id">{{ category.name }}</option>
	    				</select>
	    			</div>
	    			<div class="form-group">
	    				<label for="title">Title</label>
	    				<input type="text" class="form-control" name="title" v-model="post.title">
	    			</div>
	    			<div class="form-group">
	    				<label for="body">Whats on your mind?</label>
	    				<textarea rows="3" class="form-control" name="body" v-model="post.body"></textarea>
	    			</div>
	    		</form>
	    	</div>
	    	<div slot="footer">
                <button @click="createPost" class="modal-default-button">SUBMIT</button>
                <button @click="showModal = false" class="modal-default-button">CLOSE</button>
            </div>
	  	</modal>
	</div>
</template>

<script>
	import axios from 'axios';
	import Posts from './Posts';
	import MapView from './MapView';
	import Modal from './Modal';
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
			user(){
				return this.$store.state.user;
			},
			countries(){
				return this.$store.state.countries;
			},
			categories(){
	        	return this.$store.state.categories;
	        },
	        location(){
	        	return this.$store.state.location;
	        }
		},

		data(){
			return {
				viewType: "list",
				country: "",
				cat: "",
				showModal: false,
				address: "",
				post: {
					title: "",
					body: "",
					is_question: 0,
					category_id: 1
				}
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
			},
			createPost(){

				let url = "http://dev.servpile.com/api/posts?api_token=uPfQo1ED5tVPkd6zQ42Y1AfMZsEHeo0QvD0ZlEVuWUMni7OIkTlXTcxphtUa";

				let data = {
					user_id: this.user.id,
					category_id: this.post.category_id,
					title: this.post.title,
					body: this.post.body
				};

				axios.post(url, data)
				.then(response => {
					// swal("Done", "Your post has been created successfully.", "success");
					this.showModal = false;
					this.selectCategory("All");
				});

			}
		},
		components: {
			Posts, MapView, Forcast, Modal
		}
	}
</script>

<style scoped>
	.post-wrapper {
	    background: #eee;
	    border-radius: 7px;
	}
	button#add-post {
	    margin-top: 100px;
	    float: left;
	    position: fixed;
	    height: 90px;
	    width: 70px;
	    left: 0;
	    border-radius: 0px 8px 8px 0px;
	    background: #337ab7;
	    color: #fff;
	}
	.main-title {
	    margin-top: 70px;
	}
</style>
