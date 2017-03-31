<template>
	<div class="share">
		<h2>Summary</h2>
		<div v-if="flight != null" class="flights-wrapper">
			<div class="col-md-12 flight">
				<h4>Flight:</h4>
				<div v-for="singleFlight in flight.outbound.flights" class="connection-flight">
					<span> Flight Number: {{singleFlight.aircraft}}</span><br>
					<span>{{singleFlight.origin.airport}} --> {{singleFlight.destination.airport}}</span><br>
					<span>Departs At: {{singleFlight.departs_at.substring(11,100)}} </span><br>
					<span>Arrives At: {{singleFlight.arrives_at.substring(11,100)}}</span>
				</div>
				<div v-if="hotel!=null">
				<h4>Hotel:</h4>
				<h5>{{hotel.property_name}}</h5><br>
				<h5>{{hotel.rooms[0].room_type_info.room_type}}</h5>
				<h5>{{hotel.address.line1 + ' ' + hotel.address.city + ' ' + hotel.address.country}}</h5>
			</div>
			<h5 class="total-price" v-if="hotel!=null && flight!=null">Total Price:{{parseInt(hotel.total_price.amount) + (parseInt(flight.fare.total_price)) + hotel.total_price.currency }}</h5>

		</div>
		<div class="hotel" v-if="hotel != null">

		</div>
<button v-on:click="getFriends">Invite your trip partners! </button>
	</div>
</div>
</template>

<script>
	import axios from 'axios';
	import Datepicker from 'vuejs-datepicker';
	import facebook from '../helpers/facebook';

	export default{
		name: "share",

		data(){
			return {

				numOfGuests: ""
			};
		},
		components:{
		},
		computed: {
			posts(){
          return this.$store.state.posts;
      },
			flight(){
          return this.$store.state.flight;
      },
			hotel(){
				return this.$store.state.hotel;
			}
		},
		methods: {
			getFriends(){
				facebook.getFbFriends()
				.then(response => {
					if (response != null){

					}
				})
				.catch(error => {
				});
			}

			}
	}

</script>
<style>
.share {
	text-align:center;
}
.share button{
	font-size:21px;

}
.flights-wrapper{
	width: 60%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.flight{
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
.total-price{
    color: #4CAF50;
		text-align: center;
		font-size: 20px;
}
</style>
