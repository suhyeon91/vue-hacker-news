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
    <spinner :loading="loadingStatus"></spinner>
  </div>
  
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner
  },
  data(){
    return {
      loadingStatus: false
    };
  },
  method: {
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }
  },
  created(){
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('start:spinner', this.endSpinner);
  },
  beforeDestroy(){
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
 body {
   padding: 0;
   margin: 0;
 }

 a {
   color: #34495e;
   text-decoration: none;
 }
 a:hover {
   color: #42b883;
   text-decoration: underline;
 }
 a.router-link-exact-active {
   text-decoration: underline;
 } 
 
 /* Router Transition */
 .page-enter-active, .page-leave-active {
   transition: opacity .5s;
 }
 .page-enter, .page-leave-to{
   opacity: 0;
 }
</style>
