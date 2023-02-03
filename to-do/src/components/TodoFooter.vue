<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">
      Clear All
    </span>
    <div class="editable" contenteditable="true">
      {{str}}
    </div>
    <textarea :value="getValue()"></textarea>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data: function() {
    return {
      str: "\u0041",
    }
  },
  methods: {
    ...mapMutations({
        clearTodo: 'clearAllItems'
    }),
    getValue: function() {
      this.str = '\u0041\uD55C';
      return this.str;
    },
  }
}  
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background: #fff;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
  cursor: pointer;
}
.editable {
    width: 300px;
    height: 200px;
    border: 1px solid #dcdcdc;
    overflow-y: auto;
    text-align: left;
}
</style>