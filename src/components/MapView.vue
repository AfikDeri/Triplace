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
			let country = this.$route.params.name;
			let coords;
			switch (country) {
				case "brazil":
					coords = {lat: -22.9612286, lng: -43.2066321}; //brazil
					break;
				case "bolivia":
					coords = {lat: -16.4896890, lng: -68.1192940}; //bolivia
					break;
				case "peru":
					coords = {lat: -12.046374, lng: -77.042793}; //peru
					break;
				case "argentina":
					coords = {lat: -34.603684, lng: -58.381559};//argentina
					break;
				case "belize":
					coords = {lat: 17.251011, lng: -88.75902}; //belize
					break;
				case "chile":
					coords = {lat: -33.448890, lng: -70.669265};//chile
					break;
				case "mexico":
					coords = {lat: 19.432608, lng: -99.133208};//mexico
					break;
				case "colombia":
					coords = {lat: 4.710989, lng: -74.072092};//colombia
					break;
				case "ecuador":
					coords = {lat: -0.180653, lng: -78.467838};//ecuador
					break;
				default:
					coords = {lat: -22.9612286, lng: -43.2066321}; //brazil
					break;
			}

			this.map = new google.maps.Map(document.getElementById('map'), {
				zoom: 12,
				center: coords
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
				'<div class="pull-right"><a href="/posts/' + post.id + '">View post</a></div>'+
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
