<template>
    <div class="w3-main w3-content" style="max-width:1600px;margin-top:83px;margin-bottom:70px;">
      <div class="w3-row w3-grayscale-min">
          <div class="col-sm-4" v-for="country in countries">
            <router-link :to="'/countries/' + country.name">
              <a>
                <div class="country">
                  <img :src="require('../assets/'+country.upper+'.jpg')" style="width:100%" @click="showCountry(country.name)" :alt="country.upper">
                  <div class="overlay">
                    <div class="text">{{ country.upper }}</div>
                  </div>
                </div>
              </a>
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',

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

<style>
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0, 140, 186, 0.48);
  }

  .country:hover .overlay {
    opacity: 1;
    cursor: pointer;
  }

  .country {
    position: relative;
  }

  .text {
    color: white;
    font-size: 40px;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .col-sm-4 {
    padding-left: 0;
    padding-right: 0;
}
</style>
