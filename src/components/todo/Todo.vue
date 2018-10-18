<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<TodoHeader :addTodo="addTodo"/>&lt;!&ndash;方法1：通过props获取事件&ndash;&gt;-->
      <!--<TodoHeader @addTodo="addTodo"/>&lt;!&ndash;方法2：给TodoHeader标签对象绑定addTodo事件监听， 通过$emit触发事件&ndash;&gt;-->
      <TodoHeader ref="header"/><!--方法3：使用$on绑定事件监听，通过$emit触发事件-->
      <TodoList :todos="todos"/>
      <TodoFooter :todos="todos" :deleteCompletedTodos="deleteCompletedTodos"  :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import PubSub from 'pubsub-js'
export default {
  name: 'Todo',
  data () {
    return {
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
  },
  mounted () { // 执行异步代码
    // 给<TodoHeader/>绑定addTodo事件监听
    this.$refs.header.$on('addTodo', this.addTodo)
    // 方法4：使用PubSub订阅消息，绑定监听事件
    PubSub.subscribe('deleteTodo', (msg, index) => {
      this.deleteTodo(index)
    })
  },
  components: {TodoList, TodoHeader, TodoFooter},
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    deleteCompletedTodos () {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    selectAllTodos (isChecked) {
      this.todos.forEach(todo => todo.completed = isChecked)
    }
  },
  watch: { // 深度监视
    todos: {
      deep: true,
      handler: function (value) {
        // 获取最新值，保存到localStorage
        window.localStorage.setItem('todos_key', JSON.stringify(value))
      }
    }
  }
}
</script>

<style scoped>
  /*base*/
  body {
    background: #fff;
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
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
