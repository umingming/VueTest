import ListView from './ListView.vue';
import bus from '../utils/bus.js';

// 하이오더컴포넌트: AskView, NewsView, JobsView 페이지 컴포넌트를 재활용함.
// 단점은 통신이 까다로움.
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