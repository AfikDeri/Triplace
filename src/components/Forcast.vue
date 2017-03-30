<template>
	<div>
		<h4 class="text-center">Forcast here...</h4>
	</div>
</template>

<script>
	import buildWeatherTo7DaysURL from '../helpers/urls.js'
	import axios from 'axios';

	export default{
		name: "forcast",

		mounted(){

			//get your weather
			axios.get(buildWeatherTo7DaysURL("36.0857", "-115.1541"))
				.then(response => {
					console.log(data);
					//this.forcast = response.data;
				});
		},

		data(){
			return {
				forcast: {}
			}
		}


	}
</script>
