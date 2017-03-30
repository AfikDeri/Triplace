<template>
	<div>
		<h4 class="text-center">Forcast here...</h4>
	</div>
</template>

<script>
	import axios from 'axios';

	export default{
		name: "forcast",

		mounted(){

			//get your weather
			//
			// axios.get("http://someurl.com")
			// 	.then(response => {
			// 		this.forcast = response.data;
			// 	});
		},

		data(){
			return {
				forcast: {}
			}
		}


	}
</script>