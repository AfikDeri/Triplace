<template>
	<div id="weather_hourly" style="width: 800px; height: 80px; margin: 0px auto; padding: 5px; display: inline;">
		<div id="weather-wrapper">
			<div class="row">
				<div class="col-xs-1 daily-forcast-margin"></div>
				<div v-for="daily in forcast.DailyForecasts" class="col-xs-2 daily-forcast text-center">

					<h5>{{ forcastDate(daily.Date) }}</h5>
					<img :src="require('../assets/weatherIcons/' + daily.Day.Icon + '-s.png')" alt="">
					<h6>{{ forcastTemp(Math.round((daily.Temperature.Minimum.Value - 32) * 5 / 9), Math.round((daily.Temperature.Maximum.Value - 32) * 5 / 9), daily.Temperature.Minimum.Unit) }}</h6>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {buildWeatherForecastURL} from '../helpers/urls.js'
	import axios from 'axios';
	import moment from 'moment'

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
						// console.log(response.data);
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
		},

		methods: {
			forcastDate(value){
				return moment(value).format("MMM Do");
			},

			forcastTemp(min, max, unit){
				if(unit == "F")
					unit = "C";
				return min + " " + unit + " / " + max + " " + unit;
			}

		}


	}
</script>

<style>
	.daily-forcast-margin {
		min-height: 50px;
	}

	.daily-forcast img{
		width: 80px;
		margin: 0px auto;
	}

	.daily-forcast h5{
		min-height: 20px;
		font-size: 15px;
	}

	@media (min-width: 1000px){
		#weather-wrapper{
			width: 70%;
			margin: 0px auto;
		}
	}
</style>
