<template>
    <div class="header">
        <router-link to="/news">News</router-link> |
        <router-link to="/ask">Ask</router-link> |
        <router-link to="/jobs">Jobs</router-link> |
        <!-- to로 이동할 url 지정 -->
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* scoped는 해당 컴포넌트에만 적용됨. */
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}
/* router~ 기본으로 제공되는 태그임. */
.header .router-link-exact-active {
    color: #35495e;
}
.header a {
    color: white;
}
</style>