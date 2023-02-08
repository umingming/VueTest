<template>
    <div>
        <ul class="jobs-list">
            <li
                v-for="(item, index) in $store.state.jobs"
                :key="index"
                class="post"
            >
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <div>
                    <p class="jobs-title">
                        <a v-bind:href="item.url">
                            {{ item.title }}
                        </a>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <a :href="item.url" class="link-text">
                            {{ item.domain }}
                        </a>
                        <!-- v-vind 데이터는 꼭 : 표기 해줘야 함. -->
                    </small>
                </div>
            </li>
        </ul>
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

<style scoped>
.jobs-list {
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
