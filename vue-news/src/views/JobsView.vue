<template>
    <div>
        <list-item :items="fetchedJobs"></list-item>
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
        ...mapGetters(["fetchedJobs"]),
    },
    created() {
        this.$store.dispatch("FETCH_JOBS");
    },
};
</script>
