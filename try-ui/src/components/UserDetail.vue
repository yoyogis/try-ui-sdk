<template>
    <div v-if='user'>
        <h1>{{user.name}}</h1>
        <h2>{{user.age}}</h2>
    </div>
</template>
<script src='./UserDetail.ts'></script>