<template>
    <div>
        <p v-for="(job, index) in $store.state.jobs" :key="index">
            <a :href="job.url">{{ job.title }}</a>
            <small>{{ job.time_ago }} by {{ job.domain }}</small>
        </p>
    </div>
</template>

<script>
// import { fetchJobsList } from "../api/index.js";
export default {
    data() {
        return {
            jobs: [],
        };
    },
    created() {
        this.$store.dispatch("FETCH_JOBS");
        // fetchJobsList()
        //     .then(response => this.jobs = response.data)
        //     .catch(error => console.log(error));
    },
};
</script>

<style>
</style>