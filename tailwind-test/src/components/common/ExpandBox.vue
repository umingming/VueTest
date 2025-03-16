<template>
  <div class="w-96 border">
    <div class="h-10 bg-red-500" @click="toggleExpanded"></div>
    <div
      class="h-0 overflow-auto bg-blue-500 transition-all"
      :class="{ '!h-40': isExpanded }"
    >
      글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이
      글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이
      글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이
      글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이
      글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이
      글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이
      글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이
      글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이
      글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이
      글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이
      글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이 써볼게용 글자를 많이
      써볼게용 글자를 많이 써볼게용 글자를 많이 써볼게용
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'ExpandBox',
  setup() {
    const isExpanded = ref(false);

    const toggleExpanded = () => {
      isExpanded.value = !isExpanded.value;
    };

    return {
      isExpanded,
      toggleExpanded,
    };
  },
};
</script>
