<template>
	<Header />
	<Tab />
	<router-view></router-view>
</template>

<script setup>
import Header from "./components/header/header.vue";
import Tab from "./components/tab/tab.vue";
</script>
		<style lang="scss">
		#app {
			font-family: Avenir, Helvetica, Arial, sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-align: center;
			color: #2c3e50;
		}
		
		nav {
			padding: 30px;
		
			a {
				font-weight: bold;
				color: #2c3e50;
		
				&.router-link-exact-active {
					color: #42b983;
				}
			}
		}
		</style>
