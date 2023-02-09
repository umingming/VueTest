import Vue from 'vue'; //vue를 추가해줘야 사용할 수 있음.
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import NewsView from '../views/NewsView.vue';
import createListView from '../views/CreateListView.js';
import bus from '@/utils/bus';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({  //export해줘야 다른 파일에서 참고 가능
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news', //기본 path 지정 /로 들어갔을 때 /news로 이동함.
        },
        {
            path: '/news', //url 주소
            name: "news",
            component: NewsView, //url 주소로 갔을 때 표시될 컴포넌트, 페이지 
            beforeEnter,
        },
        {
            path: '/ask',
            name: "ask",
            component: createListView('AskView'),
            beforeEnter,
        },
        {
            path: '/jobs',
            name: "jobs",
            component: createListView('JobsView'),
            beforeEnter,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
    ]
});

function beforeEnter(to, from, next) {
    bus.$emit('start:spinner');
    setTimeout(() => {
        store
            .dispatch("FETCH_LIST", to.name)
            .then(() => next())
            .catch((error) => console.log(error));
    }, 3000);
}
// 라우터 네비게이션을 쓰면 사용자를 위한 ui 도구가 필요함.