<template>
  <div class="flex flex-col items-center justify-center pt-10">
    <TextBox />
  </div>
</template>

<script lang="ts">
import TextBox from './components/common/Textbox.vue';

export default {
  name: 'App',
  components: {
    TextBox,
  },
};
</script>
