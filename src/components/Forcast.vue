<template>
		<div id="weather_hourly" style="width: 800px; height: 80px; margin: 0px auto; padding: 5px; display: inline;">

			<div class="row">
				<div class="col-xs-1"></div>
					<div v-for="daily in forcast.DailyForecasts" class="col-xs-2 daily-forcast text-center">
						<h5>{{ daily.Day.IconPhrase }}</h5>
						<img :src="require('../assets/weatherIcons/' + daily.Day.Icon + '-s.png')" alt="">
						<h6>{{ daily.Temperature.Minimum.Value + " " +daily.Temperature.Minimum.Unit + " / " + daily.Temperature.Maximum.Value + " " +daily.Temperature.Maximum.Unit }}</h6>
					</div>
			</div>

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

<style>
	.daily-forcast img{
		width: 90px;
		margin: 0px auto;
	}

	.daily-forcast h5{
		min-height: 60px;
	}
</style>
