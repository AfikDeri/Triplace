<template>
	<div class="posts-list">
		<div v-for="post in posts">

			<div class="left-panel">
		        <div class="col-xs-12 col-sm-12 col-lg-12">
		            <div class="panel panel-default">
		    		    <div class="panel-body">
		    				<div class="col-md-12">
		    					<div class="thumbnail">
		    						<img :src="post.user.avatar" alt=""/>
		    					</div>
		    					<div class="icerik-bilgi">
										<router-link :to="'/posts/' + post.id">
											<a><h2>{{ post.title }}</h2></a>
										</router-link>

		    						<p>{{ post.body }}</p>
		    						<div class="btn-group">
		    							<a class="btn btn-social btn-facebook" href="#" data-toggle="tooltip" title="Share Facebook"><i class="fa fa-facebook"></i></a>
		    							<a class="btn btn-social btn-twitter" href="#" data-toggle="tooltip" title="Share Twitter"><i class="fa fa-twitter"></i></a>
		    							<a class="btn btn-social btn-google" href="#" data-toggle="tooltip" title="Share Google"><i class="fa fa-google"></i></a>
		    						</div>
		    						<router-link :to="'/posts/' + post.id" class="btn btn-link pull-right">
		    							View Post <i class="fa fa-chevron-right"></i>
		    						</router-link>
		    					</div>
		    				</div>
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
.thumbnail img {
    max-height: 100px;
    padding-left: 17px;
    padding-top: 17px;
    padding-right: 34px;
}
.thumbnail {
    float: left;
}
a, p, h2{text-decoration:none;}

/* PANEL */
.left-panel .panel-default{border-bottom-left-radius:7px; border-bottom-right-radius:7px; border-bottom:2px #DDD solid;}
.left-panel .panel-default .panel-body {padding:0; margin:0;}
.left-panel .panel-default .panel-body .col-md-12{margin:0; padding:0;}
.left-panel .panel-default .panel-body .thumbnail{border:none; margin:0; padding:0; position:relative;}
.left-panel .panel:hover img {opacity:.8;}
.left-panel .panel-default .panel-body .icerik-bilgi{margin:30px;}
.icerik-bilgi .btn-primary{float:right; margin-bottom:30px;}
.icerik-bilgi h2{margin-bottom:30px; color:#333;}
.icerik-bilgi h2:hover{color:#E74C3C; text-decoration:none;}
.icerik-bilgi a:hover{text-decoration:none;}
.icerik-bilgi p{margin-bottom:30px; line-height:25px; font-size:16px;}
.icerik-bilgi .btn-group{float:left;}
.btn-group a{font-size:26px; color:#CCC;}
.btn-group .btn-facebook:hover{color:#3B5998;}
.btn-group .btn-twitter:hover{color:#55ACEE;}
.btn-group .btn-google:hover{color:#DD4B39;}

@media (min-width: 1000px){
	.posts-list{
		width: 65%;
		margin: 0px auto;
	}
}
</style>
