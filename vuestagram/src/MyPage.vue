<template>
	<div style="padding: 10px">
		<h4>팔로워</h4>
		<input placeholder="?" @input="filterFollowers" />
		<div
			class="post-header"
			v-for="follower in filteredFollowers"
			:key="follower.id"
		>
			<div
				class="profile"
				:style="{
					backgroundImage: `url(${follower.image})`,
				}"
			></div>
			<span class="profile-name">{{ follower.name }}</span>
		</div>
	</div>
</template>

<script>
/*
	ref, reactive 둘이 비슷
	toRefs: props 쓰기 위해서.
*/
import { toRefs, ref, onMounted, computed } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
	name: "MyPage",
	props: {
		index: { type: Number },
	},
	//첫번쨰 파라미터는 props, 두번째는 arrows
	setup(props) {
		const test = toRefs(props);
		const { index } = toRefs(props);
		console.log(test, index);
		//실시간 재렌더링하려고
		const followers = ref([]);
		const filteredFollowers = ref([]);

		const count = computed(() => {
			return followers.value.length;
		});
		console.log(count.value);

		const store = useStore();
		console.log(store.state.posts);
		onMounted(() => {
			axios.get("/follower.json").then(({ data }) => {
				//value 써야 넣어짐.
				followers.value = data;
				filteredFollowers.value = followers.value;
			});
		});

		function filterFollowers({ target: { value } }) {
			const pattern = new RegExp(value, "i");
			filteredFollowers.value = followers.value.filter(i =>
				pattern.test(i.name),
			);
		}

		return { followers, filterFollowers, filteredFollowers };
	},
};
</script>

<style scoped></style>
