<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
import Add from './CommentAdd'
import List from './CommentList'
export default {
  name: 'Comment',
  data () {
    return {
      comments: [ /* 数据在哪个组件，更新数据的方法就应该定义在哪个组件 */
        {
          name: 'A',
          content: '还行'
        },
        {
          name: 'B',
          content: '不好'
        }
      ]
    }
  },
  methods: {
    // 添加评论
    addComment (comment) {
      this.comments.unshift(comment)
    },
    // 根据下标删除
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  },
  components: {List, Add},
  comments: {
    Add,
    List
  }
}
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
