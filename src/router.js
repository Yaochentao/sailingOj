import Vue from 'vue'
import Router from 'vue-router'

import Home from  './components/home/home'

import Rank from './components/rank/rank'
import problemList from './components/problem-list/problem-list'
import problemOj from './components/problem-oj/problem-oj'
import signUp from './components/sign-up/sign-up'
import signIn from './components/sign-in/sign-in'
import changePwd from './components/change-pwd/change-pwd'
import liveList from './components/live-list/live-list'
import live from './components/live/live'
import user from './components/user/user'
import details from './components/user/details'
import orders from './components/user/orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/user',
      component: user,
      redirect: '/user/details',
      children: [
        {
          path: 'details',
          component: details
        },
        {
          path: 'orders',
          component: orders
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/problem-list',
      component: problemList
    },
    {
      path: '/problem-oj',
      component: problemOj
    },
    {
      path: '/sign-up',
      component: signUp
    },
    {
      path: '/sign-in',
      component: signIn
    },
    {
      path: '/change-pwd',
      component: changePwd
    },
    {
      path: '/live-list',
      component: liveList
    },
    {
      path: '/live',
      component: live
    },

  ]
})
