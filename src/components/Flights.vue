<template>
	<div>
		<ul class=" col-xs-12 container navbar">

		<li><datepicker v-on:selected="limitToDate" v-model="fromDate" placeholder="From" :disabled="fromRange"></datepicker></li>
		<li><datepicker v-model="toDate" placeholder="To" :disabled="toRange"></datepicker></li>
</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	import Datepicker from 'vuejs-datepicker';

	export default{
		name: "flights",

		mounted(){
			// axios.get("http://dev.servpile.com/api/posts?api_token=uPfQo1ED5tVPkd6zQ42Y1AfMZsEHeo0QvD0ZlEVuWUMni7OIkTlXTcxphtUa")
			// .then((response) => {
			//
			// 	this.$store.commit("setPosts", response.data.posts);
			// });
		},

		data(){
			return {
				fromDate: "From",
				toDate: "To",
				fromRange:{
        to: new Date() // Disable all dates after specific date
			},
			toRange:{
				to: this.fromDate
			}


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
			limitToDate(){
				this.toRange = {
					to: this.fromDate
				}
			}
		}

	}

</script>
