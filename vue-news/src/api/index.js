import axios from 'axios'; //패키지.js에서 설치된 라이브러리를 들고 오는 것.

//1. HTTP 리퀘스트와 리스폰스와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/' //기본 url 설정
};
//2.API 함수들을 정의: API 함수들을 호출할 때 중복을 줄일 수 있음.
async function fetchNewsList() {
    try {
        return await axios.get(`${config.baseUrl}news/1.json`); //await 붙은 상태로 리턴해도 됨.
    } catch (error) {
        console.log(error);
    }
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`); //리턴이 핵심
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`); //리턴이 핵심
}
function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`); //리턴이 핵심
}
function fetchItemInfo(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`); //리턴이 핵심
}
function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}