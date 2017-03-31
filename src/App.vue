<template>
  <div id="app">

    <div v-if="user">
        <app-menu></app-menu>
        <div id="content">
            <transition name="fade">
                <router-view
                    keep-alive>
                </router-view>
            </transition>
        </div>
        <app-footer></app-footer>
    </div>
    <div v-else>
        <login></login>
    </div>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu';
import Login from './components/Login';
import AppFooter from './components/AppFooter';

export default {
    name: 'app',
    mounted() {
      if (localStorage.getItem("userInfo") != null){
        this.$store.commit("setUser", JSON.parse(localStorage.getItem("userInfo")));
      }
      this.getLocation();
    },
    computed: {
        user(){
            return this.$store.state.user;
        }
    },

    methods: {
      getLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(this.showPosition);
          } else {
              x.innerHTML = "Geolocation is not supported by this browser.";
          }
      },
      showPosition(position) {
        this.$store.location = position.coords;
        console.log(position.coords);
      }
    },

    components:{
        AppMenu, Login, AppFooter
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
