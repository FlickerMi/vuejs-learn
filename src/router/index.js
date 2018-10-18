import Vue from 'vue'
import Router from 'vue-router'
import ComponentFather from '@/components/componentTest/componentFather'
import Todo from '@/components/todo/Todo'
import Comment from '@/components/comment/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/component',
      name: 'ComponentFather',
      component: ComponentFather
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }
  ]
})
