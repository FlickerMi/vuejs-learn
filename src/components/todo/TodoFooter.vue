<template>
  <div class="todo-footer">
    <label>
      <!--<input type="checkbox" v-model="isAllChecked"/>-->
      <slot name="checkAll"></slot>
    </label>
    <span>
        <!--<span>已完成{{completedSize}} / 全部{{todos.length}}</span>-->
        <slot name="count"></slot>
      </span>
    <!--<button class="btn btn-danger" v-show="completedSize" @click="deleteCompletedTodos">清除已完成任务</button>-->
    <slot name="deleteCompleted"></slot>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter'
  // props: {
  //   todos: Array,
  //   deleteCompletedTodos: Function,
  //   selectAllTodos: Function
  // },
  // computed: {
  //   completedSize () {
  //     return this.todos.filter(todo => todo.completed).length
  //     // return this.todos.reduce((preTotal, todo) => preTotal + (todo.completed ? 1 : 0), 0)
  //   },
  //   isAllChecked: {
  //     get () {
  //       return this.completedSize === this.todos.length &&
  //         this.completedSize > 0
  //     },
  //     set (value) {
  //       this.selectAllTodos(value)
  //     }
  //   }
  // }
}
</script>

<style scoped>
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
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
