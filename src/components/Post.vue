<template>
	<div v-if="post">
		<article>
    
    <header id="main-header">
        
        <h1>{{ post.title }}</h1>
        
    </header>
    
    <div class="background-bar">
        
    </div>
    
    <section class="container-fluid main-body">
        <section class="row">
            
            <div class="hidden-xs col-sm-1 col-md-2">
                
            </div>
            
            <div class="col-xs-12 col-sm-10 col-md-8">
            
                <div class="content-holder">
                    
                    <div class="content-description">
                        
                        <div class="author-avatar">
                            <img :src="post.user.avatar" class="img-circle" />
                        </div>
                        <div class="author-name">
                            <h3>{{ post.user.name }}</h3>
                        </div>
                        <div class="row blog-info">
                            <div class="col-xs-12 col-sm-offset-6 col-sm-6">
                                <span class="lead text-muted"><i class="fa fa-clock-o"></i> {{ fromNow(post.created_at) }}</span>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div class="content-body">
                        <p>{{ post.body }}</p>
                    </div>

                    <div id="comments-section">

						<h2 class="page-header">Comments</h2>
					        <section class="comment-list">

					          <article class="row" v-for="comment in post.comments">
					            <div class="col-md-2 col-sm-2 hidden-xs">
					              <figure class="thumbnail">
					                <img class="img-responsive" :src="comment.user.avatar" />
					                <figcaption class="text-center">{{ comment.title }}</figcaption>
					              </figure>
					            </div>
					            <div class="col-md-10 col-sm-10">
					              <div class="panel panel-default arrow left">
					                <div class="panel-body">
					                  <header class="text-left">
					                    <div class="comment-user"><i class="fa fa-user"></i> {{ comment.user.name }}</div>
					                    <time class="comment-date" datetime="16-12-2014 01:05"><i class="fa fa-clock-o"></i> {{ fromNow(comment.created_at) }}</time>
					                  </header>
					                  <div class="comment-post">
					                    <p>{{ comment.body }}</p>
					                  </div>
					                  <p class="text-right"><a href="#" class="btn btn-default btn-sm"><i class="fa fa-reply"></i> reply</a></p>
					                </div>
					              </div>
					            </div>
				          	</article>
				          </section>
                    </div>
                    
                </div>
            
            </div>
            
            <div class="hidden-xs col-sm-1 col-md-2">
                
            </div>
            
        </section>
    </section>
    
</article>
	</div>
</template>

<script>
	import axios from 'axios';
	import moment from 'moment';

	export default{
		name: "post",

		mounted(){
			let postId = this.$route.params.id;	

			axios.get("http://dev.servpile.com/api/posts/"+postId+"?api_token=uPfQo1ED5tVPkd6zQ42Y1AfMZsEHeo0QvD0ZlEVuWUMni7OIkTlXTcxphtUa")
			.then((response) => {

				this.post = response.data.post;
			
			});
		},

		data(){
			return {
				post: null
			};
		},

		methods:{
			fromNow(value){
				return moment(value).fromNow();
			}
		}
	}
</script>

<style scoped>
	header#main-header {
    margin-top: 0;
    background: url("http://lorempixel.com/1200/500/nature");
    min-height: 500px;
    background-size: cover;
    display: table;
    width: 100vw;
}

header h1 {
    text-align: center;
    color: #fff;
    display: table-cell;
    vertical-align: middle;
    font-size: 3em;
    text-shadow: 2px 3px rgba(0,0,0,0.75);
}

.background-bar {
    background: #dedede;
    height: 90px;
    -webkit-box-shadow: inset 0px 4px 12px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    inset 0px 4px 12px 0px rgba(50, 50, 50, 0.75);
    box-shadow:         inset 0px 4px 12px 0px rgba(50, 50, 50, 0.75);
}

.main-body {
    background: #ffffff;
    -webkit-box-shadow: 0px -4px 14px 0px rgba(50, 50, 50, 0.35);
    -moz-box-shadow:    0px -4px 14px 0px rgba(50, 50, 50, 0.35);
    box-shadow:         0px -4px 14px 0px rgba(50, 50, 50, 0.35);
}

.content-holder {
    margin-top: -140px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 2px;
}

.content-description {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background: #fff;
    height: 130px;
    padding: 10px;
    -webkit-box-shadow: 0px 0px 12px 4px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    0px 0px 12px 4px rgba(50, 50, 50, 0.75);
    box-shadow:         0px 0px 12px 4px rgba(50, 50, 50, 0.75);
}

.author-social {
    position: absolute;
    margin-top: -35px;
}
.author-social-left {
    left : 0;
    width: 40%;
    text-align: right;
}
.author-social-right {
    right : 0;
    width: 40%;
}
.author-social img {
    background: #e8e8e8;
    border-radius: 50%;
    border: 2px solid #e8e8e8;
}

.author-avatar {
    text-align:center;
    margin-top: -70px;
}
.author-avatar img {
    width: 100px;
    border: 4px solid #e8e8e8;
    -webkit-box-shadow: 0px 0px 12px 4px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    0px 0px 12px 4px rgba(50, 50, 50, 0.75);
    box-shadow:         0px 0px 12px 4px rgba(50, 50, 50, 0.75);
}
.author-name {
    text-align:center;
}
.blog-info {
    text-align: center;
}

.content-body {
    background: #fff;
    min-height: 150px;
    padding: 40px 5px;
    font-size: 1.2em;
    color: #303030;
}
.content-body p{
	border-left: #7f7f7f 1px solid;
    padding-left: 10px;
}

.comment-list .row {
  margin-bottom: 0px;
}
.comment-list .panel .panel-heading {
  padding: 4px 15px;
  position: absolute;
  border:none;
  /*Panel-heading border radius*/
  border-top-right-radius:0px;
  top: 1px;
}
.comment-list .panel .panel-heading.right {
  border-right-width: 0px;
  /*Panel-heading border radius*/
  border-top-left-radius:0px;
  right: 16px;
}
.comment-list .panel .panel-heading .panel-body {
  padding-top: 6px;
}
.comment-list figcaption {
  /*For wrapping text in thumbnail*/
  word-wrap: break-word;
}
/* Portrait tablets and medium desktops */
@media (min-width: 768px) {
  .comment-list .arrow:after, .comment-list .arrow:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
  }
  .comment-list .panel.arrow.left:after, .comment-list .panel.arrow.left:before {
    border-left: 0;
  }
  /*****Left Arrow*****/
  /*Outline effect style*/
  .comment-list .panel.arrow.left:before {
    left: 0px;
    top: 30px;
    /*Use boarder color of panel*/
    border-right-color: inherit;
    border-width: 16px;
  }
  /*Background color effect*/
  .comment-list .panel.arrow.left:after {
    left: 1px;
    top: 31px;
    /*Change for different outline color*/
    border-right-color: #FFFFFF;
    border-width: 15px;
  }
  /*****Right Arrow*****/
  /*Outline effect style*/
  .comment-list .panel.arrow.right:before {
    right: -16px;
    top: 30px;
    /*Use boarder color of panel*/
    border-left-color: inherit;
    border-width: 16px;
  }
  /*Background color effect*/
  .comment-list .panel.arrow.right:after {
    right: -14px;
    top: 31px;
    /*Change for different outline color*/
    border-left-color: #FFFFFF;
    border-width: 15px;
  }
}
.comment-list .comment-post {
  margin-top: 6px;
}
.thumbnail img {
    max-height: 100px;
    padding-left: 10px;
    padding-top: 7px;
    padding-right: 10px;
    padding-bottom: 11px;
}

@media(max-width:768px){
    header {
        min-height: 300px;
    }
    .author-avatar {
        margin-top: -50px;
    }
	.author-avatar img {
	    width: 75px;
	}
	.author-name h3 {
	    font-size: 1.2em;
	}
	.author-social {
	    margin-top: -25px;
	}
	.author-social img {
	    width: 32px;
	}
}
</style>