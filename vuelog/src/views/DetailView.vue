<template>
	<div>
		<h3>제목: {{ blogs[index].title }}</h3>
		<p>내용: {{ blogs[index].content }}</p>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "DetailView",
	props: {
		blogs: { type: Array },
	},
	data() {
		return {
			//params 자리에 기입된 거 꺼내 쓸 수 있음.
			index: this.$route.params.id,
		};
	},
};
</script>

<style></style>
