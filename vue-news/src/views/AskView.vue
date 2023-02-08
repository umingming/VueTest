<template>
    <div>
        <ul class="ask-list">
            <li
                v-for="(item, index) in fetchedAsk"
                :key="index"
                class="post"
            >
                <div class="points">
                    {{ item.comments_count }}
                </div>
                <div>
                    <p class="ask-title">
                        <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by 
                        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
                        <!-- v-vind 데이터는 꼭 : 표기 해줘야 함. -->
                    </small>
                </div>
            </li>
        </ul>
        <p v-for="(item, index) in fetchedAsk" :key="index">
            <!-- <router-link :to="`/item/${item.url.split('=')[1]}`">{{
                item.title
            }}</router-link> -->
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

<style scope>
.ask-list {
    margin: 0;
    padding: 0;
}
.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 80px;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: center;
    /* 가로 중앙 정렬 */
    color: #42b883;
}
.link-text {
    color: #828282;
}
</style>