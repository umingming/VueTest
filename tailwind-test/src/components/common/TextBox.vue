<template>
  <textarea
    ref="textareaRef"
    class="max-h-96 w-96 resize-none overflow-auto border p-2"
    rows="4"
    @input="resizeTextarea"
  />
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'TextBox',
  setup() {
    const textareaRef = ref<HTMLTextAreaElement | null>(null);

    const resizeTextarea = () => {
      if (textareaRef.value) {
        textareaRef.value.style.height =
          textareaRef.value.scrollHeight + 2 + 'px';
      }
    };

    return {
      textareaRef,
      resizeTextarea,
    };
  },
};
</script>
