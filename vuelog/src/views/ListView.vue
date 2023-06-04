<template>
	<div>
		<div class="blog" v-for="blog in blogs" :key="blog.number">
			<h5 @click="$router.push(`/detail/${blog.number}`)">
				{{ blog.title }}
			</h5>
			<p>{{ blog.date }}</p>
		</div>
	</div>
</template>

<script>
export default {
	/*
		go(-1, 1)로 앞으로 가기 뒤로 가기 할 수 있음.
	*/
	name: "ListView",
	props: {
		blogs: { type: Array },
	},
};
</script>

<style></style>
