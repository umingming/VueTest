import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js';

export default {
    // FETCH_NEWS(context) { //mutatil호출을 위한 인자 제공
    //     fetchNewsList()
    //         // .then(response => context.commit('SET_JOBS', response.data))
    //         .then(({data}) => context.commit('SET_NEWS', data)) //({}) 사용해 필요한 값만 넣을 수 있음.
    //         .catch(error => console.log(error));
    // },
    FETCH_NEWS({ commit }) { //context 축약
        fetchNewsList()
            .then((response) => {
                commit('SET_NEWS', response.data); return response;
            })
    },
    FETCH_JOBS(context) {
        fetchJobsList()
            .then((response) => {
                context.commit('SET_JOBS', response.data);
                return response;
            })
    },
    FETCH_ASK(context) {
        fetchAskList()
            .then((response) => {
                context.commit('SET_ASK', response.data);
                return response;
            })
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => commit('SET_USER', data))
            .catch(error => console.log(error));
    },
    FETCH_ITEM({ commit }, id) {
        fetchItemInfo(id)
            .then(({ data }) => commit('SET_ITEM', data))
            .catch(error => console.log(error));
    },
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
            .then(({ data }) => commit('SET_LIST', data))
            .catch(error => console.log(error));
    }
}