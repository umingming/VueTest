<template>
    <div>
        <ul class="news-list">
            <li v-for="(item, index) in items" :key="index" class="post">
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <div>
                    <p class="title">
                        <a v-if="item.domain" :href="item.url">
                            {{ item.title }}
                        </a>
                        <router-link v-else :to="`/item/${item.id}`">
                            {{ item.title }}
                        </router-link>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <router-link
                            v-if="item.user"
                            :to="`/user/${item.user}`"
                            class="link-text"
                        >
                            {{ item.user }}
                        </router-link>
                        <a v-else :href="item.url" class="link-text">
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
export default {
    props: {
        items: { type: Array },
    },
};
</script>


<style scoped>
.news-list {
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
