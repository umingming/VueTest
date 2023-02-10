<template>
    <canvas ref="lineChart" id="lineChart"></canvas>
</template>

<script>
// import Chart from "chart.js";
// package.js에 설치된 라이브러리와 동일해야 함.
//2버전으로 하니 import 됨.
//라이브러리를 컴포넌트마다 불러오는 불필요한 로직 생김.

export default {
    mounted() {
        // 태그에 접근하기 떄문
        const ctx = this.$refs.lineChart;
        /*
            레퍼런스 속성의 이점.
            에러 없는 코딩 가능
        */

        new this.$_Chart(ctx, {
            type: "line",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [65, 59, 80, 81, 56, 55],
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    },
};
</script>

<style>
</style>