<template>
    <div id="app">
        <tool-bar></tool-bar>
        <!-- 컴포넌트 태그는 파스칼로 등록을 해도, 케밥으로 바꿔서 하는 게 좋음.
케밥으로 했을 경우 자동 링크 생성 됨.
근데 파스칼로 해도 되네
-->
        <router-view></router-view>
        <!-- url 주소에 따라 view가 뿌려짐. -->
    </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
    name: "App",
    components: {
        ToolBar,
    },
};
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
</style>
