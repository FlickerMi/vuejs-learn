<template>
  <div>
    <p>{{message}}, home</p>
    <p>
      <input type="text">
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    message: String
  }
}
</script>

<style scoped>

</style>
