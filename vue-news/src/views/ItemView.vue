<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="itemInfo">
        <!-- <div slot="username">{{ itemInfo.user }}</div> -->
        <router-link slot="username" :to="`/user/${itemInfo.user}`">
          {{ itemInfo.user }}
        </router-link>
        <template slot="time">{{ itemInfo.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ itemInfo.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="itemInfo.content">
        {{ itemInfo.content }}
      </div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile
  },
  computed: {
    itemInfo(){
      return this.$store.state.item;
    }
  },
  created(){
    const askId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', askId);
  },
}
</script>

<style scoped>
  .user-container{
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  .fa-user{
    font-size: 2.5rem;
  }
  .user-discription{
    padding-left: 8px;
  }

  .time{
    font-size: 0.7rem;
  }
</style>

