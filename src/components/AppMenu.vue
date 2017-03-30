<template>
	<div>
		<nav class="w3-sidebar w3-bar-block w3-black w3-animate-right w3-top w3-text-light-grey w3-large side-nav" style="z-index:3;width:250px;font-weight:bold;display:none;right:0;" v-show="showMenu">
			<button class="w3-bar-item w3-button w3-center w3-padding-16" @click.prevent="$store.commit('toggleNav', false)">
					<i class="fa fa-arrow-right" aria-hidden="true"></i>
			</button>
			<router-link to="/" class="w3-bar-item w3-button w3-center w3-padding-16">
				<a>
						MY TRIP
				</a>
			</router-link>
			<router-link to="/contact" class="w3-bar-item w3-button w3-center w3-padding-16">
				<a>
						CONTACT
				</a>
			</router-link>
			<button @click.prevent="logout" class="w3-bar-item w3-button w3-center w3-padding-16">
					LOG OUT
			</button>
		</nav>

		<!-- Top menu on small screens -->
		<header class="w3-container w3-top w3-white w3-xlarge w3-padding-16" id="menu-nav">
		  <span class="w3-left w3-padding" style="cursor:pointer">
				<router-link to="/"  id="logo-text">
					<i class="fa fa-plane"></i> Triplace
				</router-link>
			</span>
			<div class="pull-right search">
				<input type="text" name="query" placeholder="Search..." @input="$store.dispatch('searchTyped', $event.target.value)"><i class="fa fa-search"></i>
				<a href="#" class="w3-button w3-white menu-btn" @click.prevent="$store.commit('toggleNav', true)">☰</a>
			</div>
		</header>

		<!-- Overlay effect when opening sidebar on small screens -->
		<div class="w3-overlay w3-animate-opacity" v-show="showMenu" style="cursor:pointer" title="close side menu" id="myOverlay"></div>
	</div>
</template>

<script>
  	export default{
		name: "app-menu",

		computed: {
				showMenu(){
					return this.$store.state.showMenu;
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
	.search input{
		   color: #000;
			 font-size: 16px;
				height: 21px;
				background: #337ab7;
				border: none;
				border-bottom: #fff 1px solid;
				color: #fff;
				outline: none;
	}
	i.fa.fa-search {
    font-weight: 100;
    font-size: 15px;
    margin-left: -19px;
}
</style>
