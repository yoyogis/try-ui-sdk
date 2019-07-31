<template>
  <div>
    <h3 v-for="item in menuItems" v-bind:key="item.name" @click="selectMenuItem(item)"
    v-bind:class="{selectedMenuItem:selectedMenuItem===item}">{{item.name}}</h3>
    <h1>subName:{{subName}}</h1>
  </div>
</template>

<style>
.selectedMenuItem{
  color: red;
}
</style>


<script src='./header-nav.ts'></script>