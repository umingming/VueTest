export default {
    SET_NEWS(state, news) { //인자는 state, 받는 인자 순
        state.news = news;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    }
}