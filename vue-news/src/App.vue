<template>
  <div id="app">
    <!-- 스크립트에서 파스칼로 되있는항목은 소문자에 단어 사이를 -로 연결 -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <!-- router view: url에 맞게 입력 -->
    
    <!-- url이 만약 news -->
    <!-- <JobsView></JobsView> -->
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar
  }
}
</script>

<style>
 body{
   padding: 0;
   margin: 0;
 }
 /* Router Transition */
 .page-enter-active, .page-leave-active{
   transition: opacity .5s;
 }
 .page-enter, .page-leave-to{
   opacity: 0;
 }
</style>
