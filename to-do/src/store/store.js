import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i=0; i<localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                }
            }
        }
        return arr;
    },
}

// 밖에서 store 변수를 사용할 수 있음.
export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, todoItem, index) {
            localStorage.removeItem(todoItem.item); //브라우저 저장소 영역이라 화면에선 안 지워짐.
            state.todoItems.splice(index, 1) //js 배열 이벤트로 특정 인덱스에서 하나 지울 수 있음.
        },
        toggleOneItem(state, todoItem, index) {
            //      todoItem.completed = !todoItem.completed;
//            state.todoItems[index].completed = !state.todoItems[index].completed;
            console.log(state.todoItems[index]);
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
            console.log(index);
        }
    }    

});