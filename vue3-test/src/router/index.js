import { createWebHistory, createRouter } from "vue-router";
import createTestView from "@/views/createTestView";
import MainView from "@/views/MainView";
import EscapeView from "@/views/EscapeView";

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
		path: "/escape",
		name: "EscapeView",
		component: EscapeView,
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
