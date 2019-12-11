<template>
  <div>
      <p v-for="item in fetchedAsk">
        <!-- <a :href="item.url">{{ item.title }}</a> -->
        <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
        <small>{{ item.time_ago}}, {{ item.domain }}</small>
      </p>
      <!-- #3 -->
      <!-- <div v-for="item in fetchedAsk">{{ item.title }}</div> -->
      <!-- #1, 2 -->
      <!-- <div v-for="item in this.$store.state.ask">{{ item.title }}</div> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
        // #3
        ...mapGetters(['fetchedAsk'])
        // #2
        // ...mapState({
        //     ask: state => state.ask
        // })
        // #1
        // ask(){
        //     return this.$store.state.ask;
        // }
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>