<template>
	<div >
		<form @submit.prevent="getHotels" v-if="!isHotelSelected">
		<ul class=" navbar">
		<li class="nav-item">
			<datepicker v-model="fromDate" placeholder="Departure" ></datepicker>
		</li>
		<li class="nav-item">
			<datepicker v-model="toDate" placeholder="Return" ></datepicker>
		</li>
		<li class="nav-item dropdown">
			 <select class="btn dropdown-toggle destination" v-model="where" placeholder="Where">
					<option disabled value="">Where</option>
					<option v-for="city in cities" :value="city.code">{{city.name}}</option>
				</select>
		</li>
		<li class="nav-item"><button class="btn btn-primary">Search hotels!</button></li>
	</ul>
	<div id="map"></div>
	<div v-if="hotelsList.length>0" class="flights-wrapper">
	</div>
</form>
<div class="hotel-complete" v-if="isHotelSelected">
	<h3>Your hotel has been added to your cart!</h3>
	<div class="num-of-guests-wrapper">
		<button class="btn btn-primary" v-on:click="navSummary" >Continue >> </button>
	</div>
</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Datepicker from 'vuejs-datepicker';

	export default{
		name: "hotels",

		mounted(){
			$("body").on("click", ".reserve", function(){
				var hotelName = $(this).data("hotel");
				eventBus.$emit("HotelClicked", hotelName);
			});

			eventBus.$on("HotelClicked", this.hotelClicked);
		},

		data(){
			return {
				numOfGuests: this.$store.state.numOfGuests,
				bounds: "",
				map: "",
				isHotelSelected: false,
				cities: [
					{name: 'Tel-Aviv', code: 'TLV'},
		      { name: 'Amsterdam', code:'AMS' },
		      { name: 'Rhodes', code:'RHO' },
					{name: 'Heraklion', code:'HER'},
					{name: 'Rio De Janeiro', code: 'GIG'}
    		],
				where: "Where",
				fromDate: "Check-in",
				toDate: "Check-out",
				hotelsList: []
			};
		},
		components:{
			Datepicker
		},
		computed: {

			posts(){
	            return this.$store.state.posts;
	        }
		},
		methods: {
			navSummary(){
				$("#step4").trigger("click");
				this.isHotelSelected = false;
			},
			hotelClicked(hotelCode){
				this.isHotelSelected = true;

				let selectedHotel;

				this.hotelsList.map(hotel => {
					if(hotel.property_code == hotelCode){
						selectedHotel = hotel;
					}
				})

				this.$store.commit("setHotel",selectedHotel);
			},
			limitToDate(){
			},
			getHotels(){
				var depDate = this.fromDate.getUTCFullYear() + '-' + ('0' + (this.fromDate.getMonth()+1)).slice(-2) + '-' + ('0' + this.fromDate.getDate()).slice(-2);
				var retDate = this.toDate.getUTCFullYear() + '-' + ('0' + (this.toDate.getMonth()+1)).slice(-2) + '-' + ('0' + this.toDate.getDate()).slice(-2);
				var queryParams = {
		      apikey: "4nASj9auy2YzEHgLXOmup1lqFWGVRByK",
					location: this.where,
					check_in:depDate,
					check_out:retDate,
					currency:"EUR",
					number_of_results:20,
					radius:42
		    };

				axios.get("https://api.sandbox.amadeus.com/v1.2/hotels/search-airport", {
		    params: queryParams
  			})
				.then((response) => {
						this.hotelsList = response.data.results;
						for(var i=0;i<this.hotelsList.length;i++){
							var flag = false;
							for(var j=0;j<this.hotelsList[i].rooms.length;j++){
								if (this.hotelsList[i].rooms[j].room_type_info.number_of_beds == this.numOfGuests){
									flag = true;
								}
							}
							if (!flag){
								delete this.hotelsList[i];
								i++;
							}
						}
						var rio = {lat: -22.9612286, lng: -43.2066321};
			            this.map = new google.maps.Map(document.getElementById('map'), {
			                zoom: 12,
			                center: rio,
											clickable:true
			            });
									this.renderMarkers();
					//this.$store.commit("setPosts", response.data.posts);
				});
			},
			renderMarkers(){
				this.bounds = new google.maps.LatLngBounds();
				this.hotelsList.map(hotel => {
					if (hotel.marketing_text == undefined){
						hotel.marketing_text = "";
					}
						var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h4 id="firstHeading" class="firstHeading">'+ hotel.property_name +'</h4>'+
                '<div id="bodyContent">'+
								'<p class="marketing-content">' + hotel.marketing_text + '</p>'+
								'<div class="reserve" data-hotel="'+hotel.property_code+'">Reserve</div>' +
                '<div class="price">'+ hotel.total_price.amount + hotel.total_price.currency +
                '</div>'+
                '</div>';

            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: hotel.location.latitude,
                    lng: hotel.location.longitude
                },
                icon :{
									url: 'https://cdn3.iconfinder.com/data/icons/map/500/hotel-512.png',
									scaledSize: new google.maps.Size(40, 40)
								},
                map: this.map
            });
            marker.addListener('click', function() {
                infowindow.open(this.map, marker);
								infowindow.addListener
            });
						this.bounds.extend(marker.position);
				});
				this.map.fitBounds(this.bounds);

			}
		}

	}

</script>
<style>
#map {
			height: 600px;
			width: 100%;
			height: 350px;
    	width: 60%;
			text-align: center;
			margin-left: auto;
			margin-right: auto;
	}


.navbar{
	margin-top:40px;
	text-align:center;
}
.nav-item {
	display:inline-block;
}
.nav-item{
		height: 40px;
    padding-right: 5px;
    font-size: 18px;
		color:#000;
}
.nav-item button{
	  height: 38px;
    margin-top: -5px;
}
.nav-item .destination{
	height: 35px;
    margin-top: -4px;
		background:#fff;
		border-radius:0;
		text-align:left;
}
.flights-wrapper{
	width: 60%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.flight{
	cursor:pointer;
	width:100%;
	background:#fff;
	border-radius:10px;
	margin-left: auto;
	margin-right: auto;
	position: Relative;
	display: block;
	margin-bottom: 15px;
	padding: 14px;
}
.flight:hover{
	background:#dddddd;
}
.connection-flight{
	display:inline-block;
	padding-right:15px;

}
.left-side{
	float:left;
}
.right-side{
	float:right;
}
img.maps-avatar {
		float: left;
		max-width: 60px;
		margin-right: 10px;
}
.price{
		text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 18px;
    color: #4CAF50;
}
.reserve{
		text-align: left;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 18px;
    color: #4CAF50;
		cursor:pointer;
}
.hotels-map #content{
	margin:0;
}
div#content{
	margin:0;
}
 .gm-style-iw{
	min-height:100px;
}
.hotel-complete{
	margin-top:100px;
}
.marketing-content{
	font-size:14px;
	text-overflow: ellipsis;
	max-height: 43px;
	width: 100%;
	overflow: hidden;
	height: 31px;
	width: 90%;
}
h3{
	color:#ffffff;
}
</style>
