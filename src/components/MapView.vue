<template>
	<div>
		<div id="map"></div>
	</div>
</template>

<script>
	export default{
		name: "map-view",

		mounted(){
			this.createMap();

            eventBus.$on("postsRefreshed", this.createMap);
		},
		data(){
			return {
				map: ""
			};
		},
		computed: {
			posts(){
				return this.$store.state.posts;
			}
		},

		methods: {
			createMap(){
				var rio = {lat: -22.9612286, lng: -43.2066321};

				this.map = new google.maps.Map(document.getElementById('map'), {
	                zoom: 12,
	                center: rio
	            });

	            this.renderMarkers();
			},
			renderMarkers(){
				this.posts.map(post => {
					var contentString = '<div id="content">'+
                        '<div id="siteNotice">'+
                        '</div>'+
                        '<img class="maps-avatar" src="' + post.user.avatar + '">'+
                        '<h1 id="firstHeading" class="firstHeading">'+ post.title +'</h1>'+
                        '<div id="bodyContent">'+
                        '<p>'+ post.body +'</p>'+
                        '</div>'+
                        '</div>';

                    var infowindow = new google.maps.InfoWindow({
                      content: contentString
                    });

                    var marker = new google.maps.Marker({
                        position: {
                            lat: post.lat,
                            lng: post.lng
                        },
                        icon: post.category.icon,
                        map: this.map
                    });

                    marker.addListener('click', function() {
                        infowindow.open(this.map, marker);
                    });
				});
			}
		}
	}
</script>

<style>
	#map {
        height: 600px;
        width: 100%;
    }

    img.maps-avatar {
        float: left;
        max-width: 60px;
        margin-right: 10px;
    }
</style>