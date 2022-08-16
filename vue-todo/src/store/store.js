import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 밖에서 store 변수를 사용할 수 있음.
export const store = new Vuex.Store({
    state: {
        headerText: 'TODO it!'
    }
});