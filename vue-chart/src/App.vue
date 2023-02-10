<template>
    <div id="app">
        <h1>Chart.js</h1>
        <bar-chart></bar-chart>
        <line-chart></line-chart>
    </div>
</template>

<script>
import BarChart from "./components/BarChart.vue";
import LineChart from "./components/LineChart.vue";
// package.js에 설치된 라이브러리와 동일해야 함.
//2버전으로 하니 import 됨.

export default {
    name: "App",
    components: {
        BarChart,
        LineChart,
    },
};
</script>

<style>
</style>
