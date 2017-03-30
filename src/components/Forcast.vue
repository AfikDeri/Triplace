<template>
	<div>
		<h4 class="text-center">Forcast here...</h4>
	</div>
</template>

<script>
	import {buildWeatherTo7DaysURL} from '../helpers/urls.js'
	import axios from 'axios';

	export default{
		name: "forcast",

		mounted(){
			// Create an instance using the config defaults provided by the library
			// At this point the timeout config value is `0` as is the default for the library
			var instance = axios.create({
			    timeout: 1000,
					withCredentials: true,
					auth: {
			    username: '78db17aa-24d2-4c11-ae64-390a42b6a7a8',
			    password: 'Wi3qAPbsPp'

			  }
			});

			//get your weather
			instance.get(buildWeatherTo7DaysURL("36.0857", "-115.1541"))
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
