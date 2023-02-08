<template>
    <div>
        <ul class="news-list">
            <li
                v-for="(item, index) in $store.state.news"
                :key="index"
                class="post"
            >
                <div class="points">
                    {{ item.points }}
                </div>
                <div>
                    <p class="news-title">
                        <a v-bind:href="item.url">
                            {{ item.title }}
                        </a>
                    </p>
                    <small class="link-text">
                        by
                        <router-link
                            :to="`/user/${item.user}`"
                            class="link-text"
                            >{{ item.user }}</router-link
                        >
                        <!-- v-vind 데이터는 꼭 : 표기 해줘야 함. -->
                    </small>
                </div>
            </li>
        </ul>
        <div v-for="(item, index) in $store.state.news" :key="index">
            <!-- url접근 v-bind 왜? item 안에 있는 데이터를 연결하기 위해서! 기본이면 걍 href 쓰면 됨. -->
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
// import { fetchNewsList } from "../api/index.js";

export default {
    data() {
        return {
            users: [],
        };
    },
    created() {
        this.$store.dispatch("FETCH_NEWS");
        //화살표 함수를 사용하면 호출되는 위치로 this가 바인딩됨/.
        // fetchNewsList()
        //     .then(response => this.users = response.data)
        //     .catch(error => console.log(error));

        // var vm = this; //axios 내에서 화살표함수를 안 쓸 경우 this를 따로 할당해줘야 함.
        // axios.get('https://api.hnpwa.com/v0/news/1.json')
        //     .then(response => this.users = response.data) //화살표 함수 사용할 경우 this 쓸 수 있음.
        //     .catch(error => console.log(error))
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

<!-- 페이지 역할을 하는 컴포넌트는 최대한 라우팅 배제
    뭔가 있는 건 컴포넌트에 만든다.
 -->
 <!-- 
    axios 설치: npm i axios --save
  -->