<template>
  <div>
    <p>child tells me: {{ childWords }}</p>
    <component-a msgfromfather='hello!' @child-tell-me-something='listenToMyBoy'></component-a>
  </div>
</template>
<script>
import ComponentA from './ComponentChild'
export default{
  data: function () {
    return {
      childWords: ''
    }
  },
  components: {
    ComponentA
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
