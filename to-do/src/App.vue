<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList 
      v-bind:propsdata="todoItems" 
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem">
    </TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data: function() {
    return {
      todoItems: []
    }
  }, 
  methods: {
    addOneItem(todoItem) {
      const obj = {completed: false, item: todoItem};
      //overriding 방지
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);  //추가하면 바로 목록에서 보일 수 있음. 상위컴포넌트에서 반영이 돼서
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item); //브라우저 저장소 영역이라 화면에선 안 지워짐.
      this.todoItems.splice(index, 1) //js 배열 이벤트로 특정 인덱스에서 하나 지울 수 있음.
    },
    toggleOneItem(todoItem, index) {
//      todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      console.log(index);
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        //반복문은 무조건 let
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        console.log();
        
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>