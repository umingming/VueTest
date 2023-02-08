<template>
    <div>
        <section>
            <!-- 질문 상세 정보 -->
            <div class="user-container">
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${fetchedItem.user}`">
                        {{ fetchedItem.user }}
                    </router-link>
                    <div class="time">
                        {{ fetchedItem.time_ago }}
                    </div>
                </div>
            </div>
            <h2>{{ fetchedItem.title }}</h2>
        </section>
        <section>
            <div v-html="fetchedItem.content"></div>
            <!-- html 태그 화면에 적용 시켜줌. -->
            <!-- 질문 댓글 -->
        </section>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "ItemView",
    computed: {
        // itemInfo() {
        //     return this.$store.state.item;
        // },
        ...mapGetters(["fetchedItem"]),
    },
    created() {
        const id = this.$route.params.id;
        this.$store.dispatch("FETCH_ITEM", id);
    },
};
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 6.7px;
}
</style>