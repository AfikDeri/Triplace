<template>
	<div >
		<form @submit=getHotels v-if="!isHotelSelected">
		<ul class=" navbar">
		<li class="nav-item">
			<datepicker  v-on:selected="limitToDate" v-model="fromDate" placeholder="Departure" :disabled="fromRange"></datepicker>
		</li>
		<li class="nav-item">
			<datepicker v-model="toDate" placeholder="Return" :disabled="toRange"></datepicker>
		</li>
		<li class="nav-item dropdown">
			 <select class="btn dropdown-toggle destination" v-model="where" placeholder="Destination">
					<option disabled value="">Where</option>
					<option v-for="city in cities" :value="city.code">{{city.name}}</option>
				</select>
		</li>
		<li class="nav-item"><button class="btn btn-primary">Search hotels!</button></li>
	</ul>
	<div v-if="hotelsList.length>0" class="flights-wrapper">

	</div>
</form>
<div v-if="isHotelSelected">
	<h3>Your hotel has been added to your cart!</h3>
</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Datepicker from 'vuejs-datepicker';

	export default{
		name: "hotels",

		mounted(){
			// axios.get("http://dev.servpile.com/api/posts?api_token=uPfQo1ED5tVPkd6zQ42Y1AfMZsEHeo0QvD0ZlEVuWUMni7OIkTlXTcxphtUa")
			// .then((response) => {
			//
			// 	this.$store.commit("setPosts", response.data.posts);
			// });
		},

		data(){
			return {
				isHotelSelected: false,
				cities: [
					{name: 'Tel-Aviv', code: 'TLV'},
		      { name: 'Amsterdam', code:'AMS' },
		      { name: 'Rhodes', code:'RHO' },
					{name: 'Heraklion', code:'HER'}
    		],
				where: "Where",
				fromDate: new Date(),
				toDate: "Return",
				fromRange:{
        to: new Date() // Disable all dates after specific date
			},
			toRange:{
				to: this.fromDate
			},
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
			selectHotel(hotel){
					this.$store.commit("setHotel",flight);
					this.isHotelSelected = true;
			},
			limitToDate(){
			},
			getHotels(){
				var depDate = this.fromDate.getUTCFullYear() + '-' + ('0' + (this.fromDate.getMonth()+1)).slice(-2) + '-' + ('0' + this.fromDate.getDate()).slice(-2);
				var queryParams = {
		      apikey: "4nASj9auy2YzEHgLXOmup1lqFWGVRByK",
					destination: this.destination,
					departure_date:depDate,
					return_date: retDate
		    };
				if (this.toDate != "Return"){
					var retDate = this.toDate.getUTCFullYear() + '-' + ('0' + (this.toDate.getMonth()+1)).slice(-2) + '-' + ('0' + this.toDate.getDate()).slice(-2);
					queryParams["return_date"] = retDate;
				}
				axios.get("https://api.sandbox.amadeus.com/v1.2/flights/affiliate-search", {
		    params: queryParams
  })
				.then((response) => {
						if (response && response.data.results.length>0)
						this.flightsList = response.data.results;
					//this.$store.commit("setPosts", response.data.posts);
				});
			}

		}

	}

</script>
<style>
body{
	background-color:#4CAF50;
	background:#4CAF50;
}
.navbar{
	margin-top:110px;
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

</style>
