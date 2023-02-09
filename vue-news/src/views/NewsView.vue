<template>
    <div>
        <list-item :items="fetchedNews"></list-item>
    </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import { mapGetters } from "vuex";
import bus from "../utils/bus.js";

export default {
    components: {
        ListItem,
    },
    computed: {
        ...mapGetters(["fetchedNews"]),
    },
    created() {
        bus.$emit("start:spinner");
        //스피너 동작 확인
        setTimeout(() => {
            this.$store
                .dispatch("FETCH_NEWS")
                .then(() => bus.$emit("end:spinner"))
                .catch((error) => console.log(error));
        }, 3000);
    },
};
</script>
