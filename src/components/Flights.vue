<template>
	<div >
		<form @submit=getFlights v-if="!isFlightSelected">
		<ul class=" navbar">
		<li class="nav-item">
			<datepicker  v-model="fromDate" placeholder="Departure"></datepicker>
		</li>
		<li class="nav-item">
			<datepicker v-model="toDate" placeholder="Return" ></datepicker>
		</li>
		<li class="nav-item dropdown">
			 <select class="btn dropdown-toggle destination" v-model="origin" placeholder="Origin">
				  <option disabled value="">Origin</option>
				  <option v-for="airport in airports" :value="airport.code">{{airport.name}}</option>
				</select>
		</li>
		<li class="nav-item dropdown">
			 <select class="btn dropdown-toggle destination" v-model="destination" placeholder="Destination">
					<option disabled value="">Destination</option>
					<option v-for="airport in airports" :value="airport.code">{{airport.name}}</option>
				</select>
		</li>
		<li class="nav-item"><button class="btn btn-primary">Search flights</button></li>
	</ul>
	<div v-if="flightsList.length>0" class="flights-wrapper">
		<div v-for="flight in flightsList" class="col-md-12 flight" v-on:click="selectFlight(flight)" >
			<div class=" left-side">
			<div v-for=" singleFlight in flight.outbound.flights" class="connection-flight">
				<span> Flight Number: {{singleFlight.aircraft}}</span><br>
				<span>{{singleFlight.origin.airport}} --> {{singleFlight.destination.airport}}</span><br>
				<span>Departs At: {{singleFlight.departs_at.substring(11,100)}} </span><br>
				<span>Arrives At: {{singleFlight.arrives_at.substring(11,100)}}</span>
			</div>
		</div>
			<div class="right-side">
			<span class="travel-class">Class:{{flight.travel_class}}</span><br>
			<span>{{flight.airline}}</span><br>
			<span>{{flight.outbound.duration}}</span><br>
			<span>{{flight.fare.price_per_adult.total_fare}}</span>
		</div>
		</div>
	</div>
</form>
<div v-if="isFlightSelected">
	<h3>Your flight has been added to your quote!</h3>
	<div class="num-of-guests-wrapper">
		<button class="btn btn-primary" v-on:click="navHotels" >Continue >> </button>
	</div>
</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Datepicker from 'vuejs-datepicker';

	export default{
		name: "flights",

		mounted(){
		},

		data(){
			return {
				isFlightSelected: false,
				airports: [
					{name: 'Tel-Aviv', code: 'TLV'},
		      { name: 'Amsterdam', code:'AMS' },
		      { name: 'Rhodes', code:'RHO' },
					{name: 'Heraklion', code:'HER'}
    		],
				origin: "Origin",
				destination: "Destination",
				fromDate: "Departure",
				toDate: "Return",

			flightsList: []


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
			navHotels(){
				$("#step3").trigger("click");
				this.isFlightSelected = false;
			},
			selectFlight(flight){
					this.$store.commit("setFlight",flight);
					this.isFlightSelected = true;
			},
			limitToDate(){
			},
			getFlights(){
				var depDate = this.fromDate.getUTCFullYear() + '-' + ('0' + (this.fromDate.getMonth()+1)).slice(-2) + '-' + ('0' + this.fromDate.getDate()).slice(-2);
				var queryParams = {
		      apikey: "4nASj9auy2YzEHgLXOmup1lqFWGVRByK",
					origin: this.origin,
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
				});
			}

		}

	}

</script>
<style scoped>

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

</style>
