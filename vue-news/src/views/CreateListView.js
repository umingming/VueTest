import ListView from './ListView.vue';
import bus from '../utils/bus.js';

// 하이오더컴포넌트: AskView, NewsView, JobsView
export default function createListView(name) {
    return {
        // 재사용할 컴포넌트 옵션
        name: name,
        created() {
            bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store
                    .dispatch("FETCH_LIST", this.$route.name)
                    .then(() => bus.$emit("end:spinner"))
                    .catch((error) => console.log(error));
            }, 3000);
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}