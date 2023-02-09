import ListView from './ListView.vue';

// 하이오더컴포넌트: AskView, NewsView, JobsView 페이지 컴포넌트를 재활용함.
// 단점은 통신이 까다로움.
export default function createListView(name) {
    return {
        // 재사용할 컴포넌트 옵션
        name: name,
        render(createElement) {
            return createElement(ListView);
        }
    }
}