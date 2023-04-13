import { defineComponent, h } from "vue";
import TestView from "@/views/TestView.vue";

export default function createTestView(name) {
	return defineComponent({
		name: `${name}View`,
		setup() {
			const title = name;
			return {
				title,
			};
		},
		render() {
			return h(TestView, {
				title: this.title,
			});
		},
	});
}
