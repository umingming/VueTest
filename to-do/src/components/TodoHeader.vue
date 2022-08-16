<template>
  <header>
    <h1>{{ this.$store.state.headerText }}</h1>
  </header>
</template>

<script>
export default {

}
</script>

<!-- scoped; 컴포넌트 안에서만 유효한 속성 -->
<style scoped> 
h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>