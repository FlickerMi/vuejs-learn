<template>
  <div>
    <!--路由链接-->
    <router-link to="/route/home">Home</router-link>
    <router-link to="/route/message">Message</router-link>
    <!--用于渲染当前路由组件-->
    <keep-alive>
      <router-view message="hello"></router-view>
    </keep-alive>
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
