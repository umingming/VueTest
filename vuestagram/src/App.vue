<template>
	<div>
		<div class="header">
			<button v-for="i in 3" :key="i" @click="tabIndex = i">
				{{ i }}
			</button>
			<ul class="header-button-left">
				<li>Cancel</li>
			</ul>
			<ul class="header-button-right">
				<li @click="moveTab">Next</li>
			</ul>
			<img src="./assets/logo.png" class="logo" />
		</div>
		<container
			:index="tabIndex"
			:image="image"
			v-model="content"
		></container>
		<button @click="more">더보기</button>
		<div class="footer">
			<ul class="footer-button-plus">
				<input
					type="file"
					id="file"
					class="inputfile"
					@change="upload"
				/>
				<label for="file" class="input-plus">+</label>
			</ul>
		</div>
	</div>
</template>

<script>
import Container from "./Container.vue";
import posts from "./constants/post";
import { mapMutations, mapActions } from "vuex";

/*
	이미지 보여주기
	1. FileReader()
	2. URL.createObjectURL() <- 좀 더 가벼움.
*/
/*
	PWA: 사이트를 그대로 앱으로 설치 가능하게 실은 웹인데 앱으로 사용 가능한 것 아래의 파일 있으면 됨,
	- manifest.json: app 정보 담는 파일
	- service-worker.js: 하드에 있는 거 쓰라고 하는 거

	1. vue add pwa
	2. npm run build 하면 dist에서 위 파일 만들어줌.


*/

export default {
	name: "App",
	components: { Container },
	data() {
		return {
			posts: posts,
			index: 0,
			tabIndex: 4,
			image: "",
			content: "",
			filter: "",
			data: new Date(),
		};
	},
	//computed 데이터는 계산 결과 저장용 함수로 호출해도 계쏙 실행하는 게 아니라 저장됨.
	created() {
		this.SET_POSTS(this.posts);
	},
	mounted() {
		this.emitter.on("selectFilter", name => {
			this.filter = name;
		});
	},
	methods: {
		...mapMutations(["SET_POSTS"]),
		...mapActions(["FETCH_MORE_POST"]),
		more() {
			this.FETCH_MORE_POST();
		},
		upload({ target }) {
			const file = target.files[0];
			this.image = URL.createObjectURL(file);
			/*
				blob으로 뜨는데, binary 데이터 담는 것.
				multiple 이라고 하면 여러개 선택할 수 있음.
				accept로 이미지만 떠서 제한 할 수 있음 accept="image/*"
			*/
			this.tabIndex = 2;
		},
		moveTab() {
			if (this.tabIndex === 3) {
				const post = {
					name: "유미",
					userImage: "https://placeimg.com/100/100/arch",
					postImage: this.image,
					likes: 0,
					date: "May 15",
					liked: false,
					content: this.content,
					filter: this.filter,
				};
				this.posts.unshift(post);
				//publish
				this.tabIndex = 1;
			} else {
				++this.tabIndex;
			}
		},
	},
};
</script>

<style>
body {
	margin: 0;
}
ul {
	padding: 5px;
	list-style-type: none;
}
.logo {
	width: 22px;
	margin: auto;
	display: block;
	position: absolute;
	left: 0;
	right: 0;
	top: 13px;
}
.header {
	width: 100%;
	height: 40px;
	background-color: white;
	padding-bottom: 8px;
	position: sticky;
	top: 0;
}
.header-button-left {
	color: skyblue;
	float: left;
	width: 50px;
	padding-left: 20px;
	cursor: pointer;
	margin-top: 10px;
}
.header-button-right {
	color: skyblue;
	float: right;
	width: 50px;
	cursor: pointer;
	margin-top: 10px;
}
.footer {
	width: 100%;
	position: sticky;
	bottom: 0;
	padding-bottom: 10px;
	background-color: white;
}
.footer-button-plus {
	width: 80px;
	margin: auto;
	text-align: center;
	cursor: pointer;
	font-size: 24px;
	padding-top: 12px;
}
.sample-box {
	width: 100%;
	height: 600px;
	background-color: bisque;
}
.inputfile {
	display: none;
}
.input-plus {
	cursor: pointer;
}
#app {
	box-sizing: border-box;
	font-family: "consolas";
	margin-top: 60px;
	width: 100%;
	max-width: 460px;
	margin: auto;
	position: relative;
	border-right: 1px solid #eee;
	border-left: 1px solid #eee;
}
</style>
