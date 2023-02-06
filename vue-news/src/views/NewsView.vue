<template>
    <div>
        <div v-for="(user, index) in users" :key="index">
            {{ user.title }}
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import { fetchNewsList } from "../api/index.js";

export default {
    data() {
        return {
            users: [],
        };
    },
    created() {
        //화살표 함수를 사용하면 호출되는 위치로 this가 바인딩됨/.
        fetchNewsList()
            .then(response => this.users = response.data)
            .catch(error => console.log(error));

        // var vm = this; //axios 내에서 화살표함수를 안 쓸 경우 this를 따로 할당해줘야 함.
        // axios.get('https://api.hnpwa.com/v0/news/1.json')
        //     .then(response => this.users = response.data) //화살표 함수 사용할 경우 this 쓸 수 있음.
        //     .catch(error => console.log(error))
    },
};
</script>

<style>
</style>

<!-- 페이지 역할을 하는 컴포넌트는 최대한 라우팅 배제
    뭔가 있는 건 컴포넌트에 만든다.
 -->
 <!-- 
    axios 설치: npm i axios --save
  -->