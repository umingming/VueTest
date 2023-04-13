import { createWebHistory, createRouter } from "vue-router";
import createTestView from "@/views/createTestView";
import MainView from "@/views/MainView";

const routes = [
	{
		path: "/",
		redirect: "/main",
	},
	{
		path: "/main",
		name: "MainView",
		component: MainView,
	},
	{
		path: "/youme",
		name: "YouMeView",
		component: createTestView("YouMe"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
