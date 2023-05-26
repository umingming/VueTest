<template>
	<div>
		<transition name="fade">
			<div class="discount" v-if="isShowBanner">
				<h4>{{ title }}: {{ value }}%</h4>
			</div>
		</transition>
		<button @click="sortPrice">정렬</button>
		<div v-for="(post, index) in posts" :key="index">
			<h4>{{ post.title }}</h4>
			<span>{{ post.price }}원</span>
			<button @click="showModal(index)">모달</button>
		</div>
		<transition name="fade">
			<modal
				v-if="isShowModal"
				:post="selectedPost"
				@close="
					title = $event;
					hideModal();
				"
			></modal>
		</transition>
	</div>
</template>

<script>
/*
	동적인 UI 만들기
	1. 현재 상태를 데이터에 저장해둠.
	2. 데이터에 따라 ui가 어떻게 보일지 작성
*/
/*
	Custom Event 자식에서 보낸 매개변수 바로 받을 수 있음.
	$event로
*/
/*
	라이프 사이클

*/
import posts from "./posts.js";
import Modal from "./components/Modal.vue";
export default {
	name: "App",
	data() {
		//리액트의 state
		return {
			counts: [0, 0, 0],
			products: ["a", "b", "c"],
			isShowModal: false,
			posts: posts,
			selectedPost: {},
			title: "지금 결제하면 할인",
			value: 30,
			isShowBanner: true,
		};
	},
	components: { Modal },
	mounted() {
		// setTimeout(() => {
		// 	this.isShowBanner = false;
		// }, 3000);
		setInterval(() => {
			this.value--;
		}, 1000);
	},
	methods: {
		showModal(index) {
			this.selectedPost = this.posts[index];
			this.isShowModal = true;
		},
		hideModal() {
			this.selectedPost = "";
			this.isShowModal = false;
		},
		sortPrice() {
			this.posts.sort((a, b) => a.price - b.price);
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
#modal {
	position: absolute;
	top: 0;
	width: 200px;
	height: 200px;
	background: white;
	border: 1px solid black;
}
/* transition 애니메이션 사용 */
.fade-enter-from {
	opacity: 0;
}
.fade-enter-active {
	transition: opacity 1s;
}
.fade-enter-to {
	opacity: 1;
}
.fade-leave-from {
	opacity: 1;
}
.fade-leave-active {
	transition: opacity 1s;
}
.fade-leave-to {
	opacity: 0;
}
.discount {
	width: 200px;
	height: 30px;
	margin: 0 auto;
	background: rgba(255, 192, 203, 0.24);
}
</style>
