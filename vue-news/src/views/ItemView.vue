<template>
    <div>
        <section>
            <user-profile :info="fetchedItem">
                <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                    {{ fetchedItem.user }}
                </router-link>
                <template slot="time">
                    Posted {{ fetchedItem.time_ago }}
                </template>
            </user-profile>
        </section>
        <section>
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
import UserProfile from "../components/UserProfile.vue";

export default {
    name: "ItemView",
    components: {
        UserProfile,
    },
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