<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{todo.title}}</span>
    </label>
    <button v-show="isShow" class="btn btn-danger" @click="deleteItem">删除</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object,
    index: Number,
    deleteTodo: Function
  },
  data () {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  methods: {
    handleEnter (isEnter) {
      if (isEnter) {
        this.bgColor = '#aaa'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    deleteItem () {
      const {todo, index, deleteTodo} = this
      if (window.confirm(`确定删除${todo.title}吗？`)) {
        deleteTodo(index)
      }
    }
  }
}
</script>

<style scoped>
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }
</style>
