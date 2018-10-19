<template>
  <mt-button @click.native="handleClick" type="primary" style="width: 100%">按钮</mt-button>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'Mint',
  methods: {
    handleClick () {
      Toast('点击了测试')
    }
  }
}
</script>

<style scoped>

</style>
