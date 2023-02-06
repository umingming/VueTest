import Vue from 'vue';
import Vuex from 'vuex'; //npm i vuex
import { fetchNewsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: []
    },
    mutations: {
        SET_NEWS(state, news) { //인자는 state, 받는 인자 순
            state.news = news;
        }
    },
    actions: { //api 호출
        FETCH_NEWS(context) { //mutatil호출을 위한 인자 제공
            fetchNewsList()
                .then(response => context.commit('SET_NEWS', response.data)) //state에 바로 넣어줄 수 없음.
                .catch(error => console.log(error));
        }
    }
});