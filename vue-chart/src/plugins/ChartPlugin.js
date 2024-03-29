import Chart from "chart.js";

// 플러그인: 인스턴스 생성 시 모든 플러그를 정의
export default {
    install(Vue) {
        Vue.prototype.$_Chart = Chart;
        // $_ : 권고하는 플러그인 접두사
        console.log('chart plugin loaded');
    }
}