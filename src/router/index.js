import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Container from '@/components/Container'

import List from '@/components/pages/List'
import Add from '@/components/pages/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Container,
      children: [
        {
          path: '/',
          component: List
        },
        {
          path: '/add',
          component: Add
        }
      ]
    }
  ]
})
