<template>
  <div class="container">
    <Search/>
    <UserMain/>
  </div>
</template>

<script>
import Search from './Search'
import UserMain from './Main'
export default {
  name: 'User',
  components: {
    Search,
    UserMain
  }
}
</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css";
</style>
