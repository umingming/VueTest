<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <AlertModal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>
          {{ str }}
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
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
  data: function() {
    return {
      newTodoItem: "",
      showModal: false,
      str: "",
    }
  },
  created() {
    this.str = '\u0041\uD55C';
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== '') {
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function() {
      this.newTodoItem = '';
    },
    getValue: function() {
      this.str = '\u0041\uD55C';
      return this.str;
    },
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
  cursor: pointer;
}
.closeModalBtn {
  color: #42b983;
}
</style>