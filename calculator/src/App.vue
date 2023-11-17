<template>
  {{ test }}
  <div>
    <div>
      <button>%</button>
      <button>CE</button>
      <button>C</button>
      <button>X</button>
    </div>
    <div>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
    </div>
    <div>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
    </div>
    <div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const test = ref("test");
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
