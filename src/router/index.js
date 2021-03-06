import Vue from 'vue'
import Router from 'vue-router'
import ComponentFather from '@/components/componentTest/componentFather'
import Todo from '@/components/todo/Todo'
import Comment from '@/components/comment/Comment'
import Ajax from '@/components/ajax/Ajax'
import User from '@/components/user/User'
import Mint from '@/components/mintUI/Mint'
import Route from '@/components/route/Route'
import RouteHome from '@/components/route/Home'
import RouteMessage from '@/components/route/Message'
import RouteMessageDetail from '@/components/route/MessageDetail'

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
    },
    {
      path: '/ajax',
      name: 'Ajax',
      component: Ajax
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/mint',
      name: 'Mint',
      component: Mint
    },
    {
      path: '/route',
      name: 'Route',
      component: Route,
      children: [
        {
          path: '/',
          redirect: '/route/home'
        },
        {
          path: 'home',
          name: 'RouteHome',
          component: RouteHome
        },
        {
          path: 'message',
          name: 'RouteMessage',
          component: RouteMessage,
          children: [
            {
              path: 'detail/:id',
              name: 'RouteMessageDetail',
              component: RouteMessageDetail
            }
          ]
        }
      ]
    }
  ]
})
