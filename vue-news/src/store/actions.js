import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

export default {
    // FETCH_NEWS(context) { //mutatil호출을 위한 인자 제공
    //     fetchNewsList()
    //         // .then(response => context.commit('SET_JOBS', response.data))
    //         .then(({data}) => context.commit('SET_NEWS', data)) //({}) 사용해 필요한 값만 넣을 수 있음.
    //         .catch(error => console.log(error));
    // },
    FETCH_NEWS({ commit }) { //context 축약
        fetchNewsList()
            .then(({ data }) => commit('SET_NEWS', data))
            .catch(error => console.log(error));
    },
    FETCH_JOBS(context) {
        fetchJobsList()
            .then(response => context.commit('SET_JOBS', response.data))
            .catch(error => console.log(error));
    },
    FETCH_ASK(context) {
        fetchAskList()
            .then(response => context.commit('SET_ASK', response.data))
            .catch(error => console.log(error));
    }
}