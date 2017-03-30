<template>
    <div class="w3-main w3-content" style="max-width:1600px;margin-top:83px;margin-bottom:70px;">
      <div class="w3-row w3-grayscale-min">
          <div class="w3-third">
            <router-link to="/countries/argentina">
              <a>
                <div class="country">
                  <img :src="require('../assets/Argentina.jpg')" style="width:100%" @click="showCountry('argentina')" alt="Argentina">
                  <div class="overlay">
                    <div class="text">Argentina</div>
                  </div>
                </div>
              </a>
            </router-link>
            <router-link to="/countries/belize">
              <a>
                <div class="country">
                  <img :src="require('../assets/Belize.jpg')" style="width:100%" @click="showCountry('belize')" alt="Belize">
                  <div class="overlay">
                    <div class="text">Belize</div>
                  </div>
                </div>
              </a>
            </router-link>
            <router-link to="/countries/bolivia">
              <a>
                <div class="country">
                  <img :src="require('../assets/Bolivia.jpg')" style="width:100%" @click="showCountry('bolivia')" alt="Bolivia">
                  <div class="overlay">
                    <div class="text">Bolivia</div>
                  </div>
                </div>
              </a>
            </router-link>
          </div>

          <div class="w3-third">
            <router-link to="/countries/brazil">
              <a>
                <div class="country">
                  <img :src="require('../assets/Brazil.jpg')" style="width:100%" @click="showCountry('brazil')" alt="Brazil">
                  <div class="overlay">
                    <div class="text">Brazil</div>
                  </div>
                </div>
              </a>
            </router-link>

            <router-link to="/countries/chile">
              <a>
                <div class="country">
                  <img :src="require('../assets/Chile.jpg')" style="width:100%" @click="showCountry('chile')" alt="Chile">
                  <div class="overlay">
                    <div class="text">Chile</div>
                  </div>
                </div>
              </a>
            </router-link>

            <router-link to="/countries/colombia">
              <a>
                <div class="country">
                  <img :src="require('../assets/Colombia.jpg')" style="width:100%" @click="showCountry('colombia')" alt="Colombia">
                  <div class="overlay">
                    <div class="text">Colombia</div>
                  </div>
                </div>
              </a>
            </router-link>

          </div>

          <div class="w3-third">
            <router-link to="/countries/mexico">
              <a>
                <div class="country">
                  <img :src="require('../assets/Mexico.jpg')" style="width:100%" @click="showCountry('mexico')" alt="Mexico">
                  <div class="overlay">
                    <div class="text">Mexico</div>
                  </div>
                </div>
              </a>
            </router-link>

            <router-link to="/countries/ecuador">
              <a>
                <div class="country">
                  <img :src="require('../assets/Ecuador.jpg')" style="width:100%" @click="showCountry('ecuador')" alt="Ecuador">
                  <div class="overlay">
                    <div class="text">Ecuador</div>
                  </div>
                </div>
              </a>
            </router-link>

            <router-link to="/countries/peru">
              <a>
                <div class="country">
                  <img :src="require('../assets/Peru.jpg')" style="width:100%" @click="showCountry('peru')" alt="Peru">
                  <div class="overlay">
                    <div class="text">Peru</div>
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
</style>
