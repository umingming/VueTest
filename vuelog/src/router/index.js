import { createWebHistory, createRouter } from "vue-router";
import ListView from "@/views/ListView.vue";
import DetailView from "@/views/DetailView.vue";
import DetailAuthor from "@/components/detail/DetailAuthor";
import DetailComment from "@/components/detail/DetailComment";

const routes = [
	//router 위에 쓸 수록 우선권을 가짐.
	{
		path: "/list",
		component: ListView,
	},
	{
		//정규식으로 밸리데이션 가능함.
		path: "/detail/:id",
		component: DetailView,
		children: [
			{
				//상대경로로 작성
				path: "author",
				component: DetailAuthor,
			},
			{
				path: "comment",
				component: DetailComment,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
