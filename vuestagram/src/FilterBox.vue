<template>
	<div
		class="filter-item"
		:class="name"
		:style="{
			backgroundImage: `url(${image})`,
		}"
		@click="selectFilter"
	>
		{{ name }}
		<!-- <slot :msg="msg"></slot> -->
	</div>
</template>

<script>
export default {
	name: "FilterBox",
	props: {
		name: { type: String },
		image: { type: String },
	},
	data() {
		return {
			msg: "hi",
		};
	},
	methods: {
		selectFilter() {
			this.emitter.emit("selectFilter", this.name);
		},
	},
};
</script>

<style scoped>
.filter-item {
	width: 100px;
	height: 100px;
	margin: 10px 10px 10px auto;
	padding: 8px;
	display: inline-block;
	color: white;
	background-size: cover;
	background-position: center;
}
</style>
