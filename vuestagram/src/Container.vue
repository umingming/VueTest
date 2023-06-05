<template>
	<div>
		<div v-if="index === 1">
			<post
				v-for="(post, index) in posts"
				:key="index"
				:post="post"
				@onClick="TOGGLE_LIKES(index)"
			></post>
		</div>

		<div v-else-if="index === 2">
			<div
				class="upload-image"
				:class="filter"
				:style="{
					backgroundImage: `url(${image})`,
				}"
			></div>
			<div class="filters">
				<filter-box
					v-for="filter in filters"
					:key="filter"
					:name="filter"
					:image="image"
				>
					<!-- <template v-slot:default="name">
						{{ name.msg }}
					</template> -->
				</filter-box>
			</div>
		</div>

		<div v-else-if="index === 3">
			<div
				class="upload-image"
				:class="filter"
				:style="{
					backgroundImage: `url(${image})`,
				}"
			></div>
			<div class="write">
				<textarea
					class="write-box"
					:value="modelValue"
					@input="handleInput"
				></textarea>
			</div>
		</div>
		<div v-else-if="index === 4">
			<my-page :index="1"></my-page>
		</div>
	</div>
</template>

<script>
/*
	slot props 부모가 자식 데이터 쓸 때
	slot 에서 :으로 보낼 거 정하고, 그럼 왜 :한 다음에 이름 지정해서 보내지...? 
	부모에선 :default로 받으면ㄷ ㅚㅁ.  object형식으로 받아져서.
*/
/*
	mitt : 손자에서 부모로 데이터 보내기
*/
import Post from "./Post.vue";
import MyPage from "./MyPage.vue";
import FilterBox from "./FilterBox.vue";
import { mapState, mapMutations } from "vuex";

export default {
	name: "ContainerView",
	components: { Post, FilterBox, MyPage },
	props: {
		index: { type: Number },
		image: { type: String },
		modelValue: { type: String, required: true },
	},
	data() {
		return {
			filters: [
				"aden",
				"_1977",
				"brannan",
				"brooklyn",
				"clarendon",
				"earlybird",
				"gingham",
				"hudson",
				"inkwell",
				"kelvin",
				"lark",
				"lofi",
				"maven",
				"mayfair",
				"moon",
				"nashville",
				"perpetua",
				"reyes",
				"rise",
				"slumber",
				"stinson",
				"toaster",
				"valencia",
				"walden",
				"willow",
				"xpro2",
			],
			filter: "",
		};
	},
	computed: {
		...mapState(["posts"]),
	},
	mounted() {
		this.emitter.on("selectFilter", name => {
			this.filter = name;
		});
	},
	methods: {
		...mapMutations(["TOGGLE_LIKES"]),
		handleInput({ target: { value } }) {
			this.$emit("update:modelValue", value);
		},
	},
};
</script>

<style scoped>
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
.upload-image {
	width: 100%;
	height: 450px;
	background: cornflowerblue;
	background-size: cover;
}
.filters {
	overflow-x: scroll;
	white-space: nowrap;
}
.filter-1 {
	width: 100px;
	height: 100px;
	background-color: cornflowerblue;
	margin: 10px 10px 10px auto;
	padding: 8px;
	display: inline-block;
	color: white;
	background-size: cover;
}
.filters::-webkit-scrollbar {
	height: 5px;
}
.filters::-webkit-scrollbar-track {
	background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
	background: #555;
}
.write-box {
	border: none;
	width: 90%;
	height: 100px;
	padding: 15px;
	margin: auto;
	display: block;
	outline: none;
}
</style>
