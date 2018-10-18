<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h1>{{ msgfromfather }}</h1>
      <button @click="onClickMe">click me</button>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: 'Hello from component Child!'
    }
  },
  props: [
    'msgfromfather'
  ],
  methods: {
    onClickMe: function () {
      console.log(this.msgfromfather)
      this.$emit('child-tell-me-something', this.msg)
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
