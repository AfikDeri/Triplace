<template>
<div class="mytrips">
	<div class="container ">

		<h1>My Trips </h1>
	</div>
<div id="exTab1" class="container">
<ul class="nav nav-pills">
			<li class="active">
				<a  id="step1" href="#1d" data-toggle="tab">Travellers</a>
			</li>
			<li>
        <a id="step2"  href="#1a" data-toggle="tab">Flights</a>
			</li>
			<li><a id="step3" href="#2a" data-toggle="tab">Hotels</a>
			</li>
			<li><a id="step4" href="#3a" data-toggle="tab">Invite your friends</a>
			</li>
		</ul>

			<div class="tab-content clearfix">
				<!--Include flights-->
				<div class="tab-pane active" id="1d">
					<h3 class="component-title">How many friends will travel with you?</h3>
					<div class="num-of-guests-wrapper">
					<select class="btn dropdown-toggle destination" v-model="numOfGuests" placeholder="Where">
						 <option disabled value="">Guests</option>
						 <option v-for="guest in guests" :value="guest">{{guest}}</option>
					 </select>
				 </div>
				 <div class="num-of-guests-wrapper">
					 <button class="btn btn-primary" v-on:click="submitStep(1)" >Continue >> </button>
				 </div>
				</div>
			  <div class="tab-pane" id="1a">
          <h3 class="component-title">Select your flight..</h3>
					<Flights></Flights>

				</div>
				<!--Include Hotels-->
				<div class="tab-pane" id="2a">
          <h3 class="component-title">
						Select your hotel..
					</h3>
					<Hotels></Hotels>

				</div>
				<!--Transportation-->
        <div class="tab-pane" id="3a">
					<div class="Summary">
					</div>
          <h3 class="component-title">You're trip is ready! Now it's time to invite your friends :)</h3>
					<Share></Share>
				</div>
			</div>
  </div>
</div>
</template>

<script>
	import axios from 'axios';
	import Flights from './Flights';
	import Hotels from './Hotels';
	import Share from './Share';
	export default{
		name: "mytrip",

		mounted(){

		},

		data(){
			return {
				flightWizard: false,
				numOfGuests: 1,
				guests: [1,2,3,4]
			};
		},
		components:{
			Flights,
			Hotels,
			Share
		},
		computed: {

			posts(){
	            return this.$store.state.posts;
	        }
		},
		methods: {
		submitStep(step){
			if (step == 1){
				this.$store.commit("setNumOfGuests",this.numOfGuests);
				$("#step2").trigger("click");
			}
			else if (step == 2){
				$("#step3").trigger("click");
			}
			else if(step == 3){
				$("#step4").trigger("click");
			}
		}
		}

	}

</script>
<style>

.mytrips{
	padding-top:12%;
	background: url('../assets/bg.jpg');
	height:100vh;
	width:100%;
	background-attachment: fixed;
	background-repeat: no-repeat;
}
.component-title{
	text-align:center;
}
.nav-pills a{
	background-color:#337ab7;
}
.nav-pills.active a{

}
.num-of-guests-wrapper{
	text-align:center;
	padding-top:20px;
}
.num-of-guests-wrapper button{
	padding-right: 30px;
padding-left: 30px;
padding-top: 10px;
padding-bottom: 10px;
}
select{
		width: 150px;
		height: 40px;
		font-size: 20px;
		text-align: center;
}
.nav-pills li a{
	color:#000000;
}
</style>
