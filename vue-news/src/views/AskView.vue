<template>
    <div>
        <p v-for="(item, index) in fetchedAsk" :key="index">
            <a :href="item.url">{{ item.title }}</a>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

// import { fetchAskList } from "../api/index.js";
export default {
    computed: {
        // ...mapState({
        //     ask: (state) => state.ask,
        // }),
        // ...mapGetters({
        //     askItems: "fetchedAsk",
        // }),
        ...mapGetters(["fetchedAsk"]), //바로 쓰고 싶으면 배열로
    },
    created() {
        this.$store.dispatch("FETCH_ASK");
        // fetchAskList()
        //     .then(response => this.ask = response.data)
        //     .catch(error => console.log(error));
    }, //create, beforeMount 에서 데이터 요청을 함. 이유는, Mounted 후 데이터 요청을 하면 화면이 다시 그려짐.
};
</script>

<style>
</style>