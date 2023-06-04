<template>
	<div>
		<app-nav></app-nav>
		<!-- router-view로 props 보낼 수 있음. -->
		<router-view :blogs="blogs"></router-view>
	</div>
</template>

<script>
import AppNav from "./components/AppNav.vue";
import blogs from "@/constants/blog";
export default {
	name: "App",
	components: {
		AppNav,
	},
	data() {
		return {
			blogs,
		};
	},
};
</script>

<style></style>
