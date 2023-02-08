<template>
    <div>
        <list-item :items="fetchedAsk"></list-item>
    </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        ListItem,
    },
    computed: {
        ...mapGetters(["fetchedAsk"]),
    },
    created() {
        this.$store.dispatch("FETCH_ASK");
    },
};
</script>