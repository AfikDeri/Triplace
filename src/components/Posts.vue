<template>
	<div>
		
		<ul>
			<li v-for="post in posts">{{ post.title }}</li>
		</ul>

	</div>
</template>

<script>
	import axios from 'axios';

	export default{
		name: "posts",

		mounted(){
			axios.get("http://dev.servpile.com/api/posts?api_token=uPfQo1ED5tVPkd6zQ42Y1AfMZsEHeo0QvD0ZlEVuWUMni7OIkTlXTcxphtUa")
			.then((response) => {

				this.$store.commit("setPosts", response.data.posts);
			});
		},

		computed: {

			posts(){
	            return this.$store.state.posts;
	        }
		},
		methods: {
			//
		}
	}

</script>