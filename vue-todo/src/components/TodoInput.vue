<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <AlertModal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <template v-slot:header>
        <h3>
          경고!
          <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
        </h3>
      </template>
      <template v-slot:body>
        <h3>무언가를 입력하세요</h3>
      </template>
      <template v-slot:footer>
        <h3>copy right</h3>
      </template>
    </AlertModal>
    <!-- <AlertModal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>경고</h3>
      </template>
    </AlertModal> -->
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
  data: function() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem);        
        this.clearInput();
        // var obj = {completed: false, item: this.newTodoItem};
        // localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); //자바스크립트 객체를 스트링 값으로 변환.
        //이렇게만 하면 새로고침해야 화면에 반영됨.
      } else {
        this.showModal = !this.showModal;
      }
//      localStorage.setItem(this.newTodoItem, obj);  //값을 로컬스트리지에서 확인할 수 없음. [object Object]로 감.
    },
    clearInput: function() {
      this.newTodoItem = '';
    }
  },
  components: {
    AlertModal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>