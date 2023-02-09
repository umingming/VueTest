import Vue from 'vue'; //vue를 추가해줘야 사용할 수 있음.
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

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
        },
        {
            path: '/ask',
            name: "ask",
            component: AskView,
        },
        {
            path: '/jobs',
            name: "jobs",
            component: JobsView,
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
