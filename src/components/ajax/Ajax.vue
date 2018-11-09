<template>
  <div v-if="!repoUrl">loading...</div>
  <div v-else>most star rep is <a :href="repoUrl">{{repoName}}</a></div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Ajax',
  data () {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted () {
    const url = `https://api.github.com/search/repositories?q=vu&sort=stars`
    // 方式1：使用vue-resource获取数据
    /* this.$http.get(url).then(
      response => {
        const result = response.data
        const topRepo = result.items[0]
        this.repoUrl = topRepo.html_url
        this.repoName = topRepo.name
      },
      response => {
        alert('请求失败')
      }
    ) */
    // 方式2：使用axios获取数据
    axios.get(url).then(response => {
      const result = response.data
      const topRepo = result.items[0]
      this.repoUrl = topRepo.html_url
      this.repoName = topRepo.name
    }).catch(error => {
      console.log(error)
      alert('请求失败')
    })
  }
}
</script>

<style scoped>

</style>
