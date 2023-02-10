<template>
    <canvas id="barChart"></canvas>
</template>

<script>
import Chart from "chart.js";
// package.js에 설치된 라이브러리와 동일해야 함.
//2버전으로 하니 import 됨.

export default {
    mounted() {
        // 태그에 접근하기 떄문
        const ctx = document.getElementById("barChart");

        new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1,
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