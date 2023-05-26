import { mount } from "@vue/test-utils";
import TestView from "@/views/TestView.vue";

test("renders a title", async () => {
	const wrapper = mount(TestView, { props: { title: "유미" } });
	await wrapper.vm.$nextTick();

	expect(wrapper.find('[data-test="title"]').text()).toBe("제목: 유미");
});
