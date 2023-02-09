<template>
    <div>
        <ul class="list">
            <li v-for="(item, index) in items" :key="index" class="post">
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <div>
                    <p class="title">
                        <template v-if="item.domain">
                            <a :href="item.url">
                                {{ item.title }}
                            </a>
                        </template>
                        <template v-else>
                            <!-- 분기 처리는 template 이용 -->
                            <router-link :to="`/item/${item.id}`">
                                {{ item.title }}
                            </router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <template v-if="item.user">
                            <router-link
                                :to="`/user/${item.user}`"
                                class="link-text"
                            >
                                {{ item.user }}
                            </router-link>
                        </template>
                        <template v-else>
                            <a :href="item.url" class="link-text">
                                {{ item.domain }}
                            </a>
                        </template>
                        <!-- v-vind 데이터는 꼭 : 표기 해줘야 함. -->
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        items() {
            return this.$store.state.list;
        },
    },
};
</script>


<style scoped>
.list {
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
