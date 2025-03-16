<template>
  <div class="flex flex-col items-center justify-center pt-10">
    <TextBox />
    <ExpandBox />
  </div>
</template>

<script lang="ts">
import TextBox from './components/common/TextBox.vue';
import ExpandBox from './components/common/ExpandBox.vue';

export default {
  name: 'App',
  components: {
    TextBox,
    ExpandBox,
  },
};
</script>
