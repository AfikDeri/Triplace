<template>
<div>
	<div class="container mytrips"><h1>My Trips </h1>
	</div>
<div id="exTab1" class="container">
<ul class="nav nav-pills">
			<li class="active">
        <a  href="#1a" data-toggle="tab">Flights</a>
			</li>
			<li><a href="#2a" data-toggle="tab">Hotels</a>
			</li>
			<li><a href="#3a" data-toggle="tab">Transportation</a>
			</li>
		</ul>

			<div class="tab-content clearfix">
				<!--Include flights-->
			  <div class="tab-pane active" id="1a">
          <h3 class="component-title">Select your flight..</h3>
					<Flights></Flights>
				</div>
				<!--Include Hotels-->
				<div class="tab-pane" id="2a">
          <h3>We use the class nav-pills instead of nav-tabs which automatically creates a background color for the tab</h3>
				</div>
				<!--Transportation-->
        <div class="tab-pane" id="3a">
          <h3>We applied clearfix to the tab-content to rid of the gap between the tab and the content</h3>
				</div>
			</div>
  </div>
</div>


</template>

<script>
	import axios from 'axios';
	import Flights from './Flights';
	export default{
		name: "mytrip",

		mounted(){

		},

		data(){
			return {

			};
		},
		components:{
			Flights
		},
		computed: {

			posts(){
	            return this.$store.state.posts;
	        }
		},
		methods: {

		}

	}

</script>
<style>

.mytrips{
	padding-top:50px;
}
.component-title{
	text-align:center;
}

</style>
