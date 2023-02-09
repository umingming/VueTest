export default {
    SET_NEWS(state, news) { //인자는 state, 받는 인자 순
        state.news = news;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    SET_ITEM(state, item) {
        state.item = item;
    },
    SET_LIST(state, list) {
        state.list = list;
    }
}