<template>
	<div class="w3-container">
	  <h2>Posts from {{ city }}</h2>

	  <div class="w3-row">
	    <a href="javascript:void(0)" onclick="openCity(event, 'London');">
	      <div class="w3-half tablink w3-bottombar w3-hover-light-grey w3-padding">London</div>
	    </a>
	    <a href="javascript:void(0)" onclick="openCity(event, 'Paris');">
	      <div class="w3-half tablink w3-bottombar w3-hover-light-grey w3-padding">Paris</div>
	    </a>
	  </div>

	  <div id="London" class="w3-container city" style="display:none">
	    <h2>London</h2>
	    <p>London is the capital city of England.</p>
	  </div>

	  <div id="Paris" class="w3-container city" style="display:none">
	    <h2>Paris</h2>
	    <p>Paris is the capital of France.</p> 
	  </div>
	</div>
</template>

<script>
	export default{
		name: "country",

		mounted(){
			this.city = this.$route.params.name;
		},

		data(){
			return {
				city: ""
			}
		}
	}
</script>

<style scoped>
	
</style>