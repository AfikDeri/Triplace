<template>
    <div class="w3-main w3-content" style="max-width:1600px;margin-top:83px;margin-bottom:70px;">
      <div class="w3-row w3-grayscale-min">
          <div class="w3-third">
            <img :src="require('../assets/Argentina.jpg')" style="width:100%" @click="showCountry('argentina')" alt="Argentina">
            <img :src="require('../assets/Belize.jpg')" style="width:100%" @click="showCountry('belize')" alt="Belize">
            <img :src="require('../assets/Bolivia.jpg')" style="width:100%" @click="showCountry('bolivia')" alt="Bolivia">
          </div>

          <div class="w3-third">
            <img :src="require('../assets/Brazil.jpg')" style="width:100%" @click="showCountry('brazil')" alt="Brazil">
            <img :src="require('../assets/Chile.jpg')" style="width:100%" @click="showCountry('chile')" alt="Chile">
            <img :src="require('../assets/Colombia.jpg')" style="width:100%" @click="showCountry('colombia')" alt="Colombia">
          </div>

          <div class="w3-third">
            <img :src="require('../assets/Mexico.jpg')" style="width:100%" @click="showCountry('mexico')" alt="Mexico">
            <img :src="require('../assets/Ecuador.jpg')" style="width:100%" @click="showCountry('ecuador')" alt="Ecuador">
            <img :src="require('../assets/Peru.jpg')" style="width:100%" @click="showCountry('peru')" alt="Peru">
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
