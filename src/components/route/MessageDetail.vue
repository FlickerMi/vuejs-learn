<template>
  <div>
    <p>detailId: {{$route.params.id}}</p>
    <ul>
      <li>id: {{messageDetail.id}}</li>
      <li>title: {{messageDetail.title}}</li>
      <li>content: {{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutDetail',
  data () {
    return {
      messageDetail: {}
    }
  },
  mounted () {
    setTimeout(() => {
      const allMessageDetails = [
        {
          id: 1,
          title: 'title1',
          content: 'content1'
        },
        {
          id: 2,
          title: 'title2',
          content: 'content2'
        },
        {
          id: 3,
          title: 'title3',
          content: 'content3'
        }
      ]
      this.allMessageDetails = allMessageDetails
      const id = this.$route.params.id * 1
      this.messageDetail = allMessageDetails.find(detail => detail.id === id)
    }, 1000)
  },
  watch: {
    $route: function (value) { // 监视路由路径，发生变化
      const id = value.params.id * 1
      this.messageDetail = this.allMessageDetails.find(detail => detail.id === id)
    }
  }
}

</script>

<style scoped>

</style>
