<template>
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <a class="navbar-brand" href="#">Triplace</a>
	    </div>
	    <ul class="nav navbar-nav">

	    	<router-link to="/" tag="li">
	    		<a>Home</a>
	    	</router-link>

	    	<router-link to="/posts" tag="li">
	    		<a>Posts</a>
	    	</router-link>

	    	<li><a href="#" @click.prevent="logout">Logout</a></li>
	    </ul>
	  </div>
	</nav>
</template>

<script>
	export default{
		name: "app-menu",

		methods: {
			logout(){
				this.$store.commit("logout");
			}
		}
	}
</script>