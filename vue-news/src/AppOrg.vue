<template>
    <div id="app">
        <input type="text" class="input">
        <button @click="test">입력</button>
        <div>{{ text }}</div>
    </div>
</template>

<script>
import bus from "./utils/bus";
import {callChatGPTAPI} from "@/api/index.js";

export default {
    name: "App",
    components: {
    },
    data() {
        return {
            loadingStatus: false,
            response: "",
        };
    },
    computed: {
        text() {
            return this.response;
        }
    },
    methods: {
        startSpinner() {
            this.loadingStatus = true;
        },
        endSpinner() {
            this.loadingStatus = false;
        },
        async test() {
            const { value } = document.querySelectorAll(".input")[0];
            console.log(process.env.VUE_APP_OPENAI_API_KEY);
            const response = await callChatGPTAPI(value);
            console.log(response);
            this.response = response;
        }
    },
    created() {
        bus.$on("start:spinner", this.startSpinner);
        bus.$on("end:spinner", this.endSpinner);
    },
    // 컴포넌트 역할이 끝나면 꼭 off 해줘야 됨.
    beforeDestroy() {
        bus.$off("start:spinner", this.startSpinner);
        bus.$off("end:spinner", this.endSpinner);
        // ()넣으면 에러 생김.
    },

    /*
        하이 오더 컴포넌트
        컴포넌트 로직을 재사용하기 위한 기술
    */

    /*
        데이터 호출 시점
        1. 라우터 네비게이션 가드
            : 특정 url 접근 전 동작을 정의하는 속성, 2보다 먼저
        2. 컴포넌트 라이프 사이클 훅
            : created, 컴포넌트가 생성되자마자 호출되는 로직

    */
};
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
a {
    text-decoration: none;
    color: #34495e;
}
a:hover {
    color: #42b883;
    text-decoration: underline;
}
a.router-link-exact-active {
    text-decoration: underline;
}
/* 부드러운 페이지 이동 */
.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
}
#app {
    width: 500px;
    margin: 0 auto;
}
input {
    width: 400px;
}
</style>




