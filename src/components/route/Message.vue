<template>
  <div>
    <p>message</p>
    <ul>
      <li v-for="(message) in messages" :key="message.id">
        <router-link :to="`/route/message/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push</button>
        <button @click="replaceShow(message.id)">replace</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    setTimeout(() => {
      const messages = [{
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
      }]
      this.messages = messages
    }, 1000)
  },
  methods: {
    pushShow (id) {
      this.$router.push(`/route/message/detail/${id}`)
    },
    replaceShow (id) {
      this.$router.replace(`/route/message/detail/${id}`)
    }
  }
}
</script>

<style scoped>

</style>
