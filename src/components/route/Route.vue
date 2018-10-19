<template>
  <div>
    <!--路由链接-->
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <!--用于渲染当前路由组件-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Route'
}
</script>

<style scoped>
.router-link-active{
  color: #f00;
}
</style>
