<template>
	<div>
		<ul>
			<li v-for="daily in forcast.DailyForecasts">{{ daily.Day.IconPhrase }}</li>
		</ul>
	</div>
</template>

<script>
	import {buildWeatherForecastURL} from '../helpers/urls.js'
	import axios from 'axios';

	export default{
		name: "forcast",

		mounted(){
			
			let country = this.$route.params.name;
			let id;

			this.countries.map(ctr => {
				if(ctr.name == country){
					id = ctr.id;
				}
			});

			if(id != undefined){
				//get your weather
				axios.get(buildWeatherForecastURL(id))
					.then(response => {
						console.log(response.data);
						this.forcast = response.data;
					});
			}

		},
		data(){
			return {
				forcast: {}
			}
		},
		computed: {
			countries(){
				return this.$store.state.countries;
			}
		}


	}
</script>
