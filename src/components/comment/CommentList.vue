<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length === 0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentItem v-for="(comment, index) in comments" :key="index" :comment="comment" :deleteComment="deleteComment"
            :index="index"/>
    </ul>
  </div>
</template>

<script>
import CommentItem from './CommentItem'
export default {
  name: 'CommentList',
  // 声明接收属性
  props: ['comments', 'deleteComment'],
  components: {
    CommentItem
  }
}
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }
</style>
