<template>
	<div>
		<nav class="w3-sidebar w3-bar-block w3-black w3-animate-right w3-top w3-text-light-grey w3-large" style="z-index:3;width:250px;font-weight:bold;display:none;right:0;" v-show="showMenu">
		  <a href="#" @click.prevent="showMenu = false" class="w3-bar-item w3-button w3-center w3-padding-32">CLOSE</a>
		  <a href="#" @click.prevent="showMenu = false" class="w3-bar-item w3-button w3-center w3-padding-16">PORTFOLIO</a>
		  <a href="#about" @click.prevent="showMenu = false" class="w3-bar-item w3-button w3-center w3-padding-16">ABOUT ME</a>
			<router-link to="/contact" class="w3-bar-item w3-button w3-center w3-padding-16">
				<a @click.prevent="showMenu = false">
						CONTACT
				</a>
			</router-link>
		</nav>

		<!-- Top menu on small screens -->
		<header class="w3-container w3-top w3-white w3-xlarge w3-padding-16" id="menu-nav">
		  <span class="w3-left w3-padding" style="cursor:pointer">
				<router-link to="/">
					<i class="fa fa-plane"></i> Triplace
				</router-link>
			</span>
		  <a href="#" class="w3-right w3-button w3-white" @click.prevent="showMenu = true">☰</a>
		</header>

		<!-- Overlay effect when opening sidebar on small screens -->
		<div class="w3-overlay w3-animate-opacity" v-show="showMenu" style="cursor:pointer" title="close side menu" id="myOverlay"></div>
	</div>
</template>

<script>
  	export default{
		name: "app-menu",

		data(){
			return {
				showMenu: false
			}
		},

		methods: {
			logout(){
				this.$store.commit("logout");
			}
		}
	}
</script>

<style>
	#menu-nav{
		box-shadow: 1px 1px 18px #000;
		color: #fff!important;
    	background-color: #337ab7!important;
	}
</style>
