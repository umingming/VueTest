<template>
    <div>
        <list-item :items="fetchedNews"></list-item>
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
        ...mapGetters(["fetchedNews"]),
    },
    created() {
        this.$store.dispatch("FETCH_NEWS");
    },
};
</script>
