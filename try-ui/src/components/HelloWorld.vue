<template>
  <div class="hello">
    <button @click="click()">click</button>
    <button @click="rename()">rename</button>
    <template v-if='outsideState&&selectedUser'>
      <div>{{outsideState.length}}</div>
      <div>{{selectedUserAge}}</div>
      <h3>{{selectedUser}}</h3>
        <div v-for="(item, index) in outsideState" :key="index" @click="select(item)">
          {{item.name}}
          <span>{{item.age}}</span>
        </div>
    </template>
    

  </div>
</template>

<script lang="ts" src='./HelloWorld.ts'>
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
