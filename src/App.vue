<template>
  <div id="app">
    
    <div v-if="user">
        <app-menu></app-menu>
        <router-view></router-view>
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

</style>
