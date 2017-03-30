<template>
	<div>
		<img src="http://murphysportfishing.com/media2/images/700/fishing-report/weekly-weather-forecast-as-of-feb-17-2014.png" class="forecast-img" alt="">
		<div v-for="post in posts">
			<div class="row post-wrapper">
			  <div class="col-md-12">
			    <div class="row">
			      <div class="col-md-8">
			        <h4><strong><a href="#">{{ post.title }}</a></strong></h4>
			      </div>
			    </div>
			    <div class="row">
			      <div class="col-md-2">
			        <a href="#" class="thumbnail">
			            <img :src="post.user.avatar" alt="">
			        </a>
			      </div>
			      <div class="span10">      
			        <p>{{ post.body }}</p>
			        <p><a class="btn" href="#">Read more</a></p>
			      </div>
			    </div>
			    <div class="row">
			      <div class="col-md-8">
			        <p></p>
			        <p>
			          <i class="fa fa-user"></i> by {{ post.user.name }}
			          | <i class="fa fa-calendar"></i> {{ post.created_at }}
			        </p>
			      </div>
			    </div>
			  </div>
			</div>
			<hr>
		</div>

	</div>
</template>

<script>

	export default{
		name: "posts",

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

<style>
	.forecast-img{
		width: 100%;
		margin: 30px 0px;
	}
</style>