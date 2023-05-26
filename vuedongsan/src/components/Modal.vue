<template>
	<div id="modal">
		{{ post.title }}
		<input ref="input" v-model="month" />
		{{ month }}
		<button @click="$emit('close', post.title, post.id)">닫기</button>
	</div>
</template>

<script>
/*
	$event 는 e 이벤트 매개변수와 같음.
	@input="month = $event.target.value"
	는 v-model="month"
*/
export default {
	props: {
		post: Object,
	},
	data() {
		return {
			month: 1,
		};
	},
	beforeUpdate() {
		if (this.month == 2) {
			const $input = this.$el.querySelector("input");
			console.dir($input);
			alert("2 안 돼!");
		}
	},
};
</script>
