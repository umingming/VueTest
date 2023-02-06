<template>
    <div>
        <div v-for="(item, index) in ask" :key="index">
            {{ item.title }}
        </div>
    </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";
export default {
    data() {
        return {
            ask: []
        }
    },
    created() {
        fetchAskList()
            .then((response) => (this.ask = response.data))
            .catch((error) => console.log(error));
    } //create, beforeMount 에서 데이터 요청을 함. 이유는, Mounted 후 데이터 요청을 하면 화면이 다시 그려짐.
};
</script>

<style>
</style>