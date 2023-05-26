import { mount } from "@vue/test-utils";
import MainView from "@/views/MainView.vue";

describe("MainView", () => {
	test("renders a todo", () => {
		const wrapper = mount(MainView);
		expect(wrapper.find('[data-test="todo"]').text()).toBe(
			"Learn Vue.js 3",
		);
	});
});
