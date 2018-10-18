<template>
  <div>
    <p>child tells me: {{ childWords }}</p>
    <component-child msgfromfather='hello!' @child-tell-me-something='listenToMyBoy'></component-child>
  </div>
</template>
<script>
import ComponentChild from './ComponentChild'
export default{
  data: function () {
    return {
      childWords: ''
    }
  },
  components: {
    ComponentChild
  },
  methods: {
    listenToMyBoy: function (msg) {
      this.childWords = msg
    }
  }
}
</script>

<style scoped>

</style>
