<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="click()">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <UserDetail/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import UserDetail from '@/components/UserDetail.vue';

@Component({
  components: {
    HelloWorld, UserDetail,
  },
})
export default class Home extends Vue {
}
</script>
