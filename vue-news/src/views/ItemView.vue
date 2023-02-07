<template>
    <div>
        <p>id: {{ itemInfo.id }}</p>
        <p>user: {{ itemInfo.user }}</p>
        <p>created: {{ itemInfo.time_ago }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        itemInfo() {
            return this.$store.state.item;
        },
    },
    created() {
        const id = this.$route.params.id;
        this.$store.dispatch("FETCH_ITEM", id);
    },
};
</script>

<style>
</style>