<template>
  <div class="w3-main w3-content" style="max-width:1600px;margin-top:83px">
  
    <!-- Photo grid -->
    <div class="w3-row w3-grayscale-min">
      <div class="w3-quarter">
        <img v-for="country in countries" :src="country.image" style="width:100%" @click="showCountry('brazil')" alt="Canoeing again">
      </div>
      <div class="w3-quarter">
        <img v-for="country in countries" :src="country.image" style="width:100%" @click="showCountry('brazil')" alt="Canoeing again">
      </div>
      <div class="w3-quarter">
        <img v-for="country in countries" :src="country.image" style="width:100%" @click="showCountry('brazil')" alt="Canoeing again">
      </div>
      <div class="w3-quarter">
        <img v-for="country in countries" :src="country.image" style="width:100%" @click="showCountry('brazil')" alt="Canoeing again">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
      msg: 'Welcome to my awesome Vue.js App'
    }
  },

  computed: {
    countries(){
      return this.$store.state.countries;
    }
  },

  methods: {
    showCountry(countryName){
      console.log(countryName);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
