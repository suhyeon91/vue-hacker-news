//node module안의 axios 라이브러리를 호출한다.
import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList(){
    //ES5
   // return axios.get(config.baseUrl + 'news/1.json');
    //ES6
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList(){
    //ES5
   // return axios.get(config.baseUrl + 'ask/1.json');
    //ES6
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList(){
    //ES5
   // return axios.get(config.baseUrl + 'jobs/1.json');
    //ES6
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username){
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(id){
    return axios.get(`${config.baseUrl}item/${id}.json`)
}
export{
    fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo
}