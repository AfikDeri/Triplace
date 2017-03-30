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
    </div>
    <div v-else>
        <login></login>
    </div>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu';
import Login from './components/Login';

export default {
    name: 'app',
    mounted() {
      if (localStorage.getItem("userInfo") != null){
        this.$store.commit("setUser", JSON.parse(localStorage.getItem("userInfo")));
      }
    },
    computed: {
        user(){
            return this.$store.state.user;
        }
    },

    components:{
        AppMenu, Login
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
