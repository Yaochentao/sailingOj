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
import notice from './components/user/notice'
import ability from './components/user/ability'
import submitHistory from './components/user/submit-history'
import uploadHistory from './components/user/upload-history'
import collection from './components/user/collection'
import admin from './components/admin/admin'
import userManage from './components/admin/user-manage'
import problemManage from './components/admin/problem-manage'
import noticeManage from './components/admin/notice-manage'
import tagManage from './components/admin/tag-manage'
import uploadProblem from './components/upload-problem/upload-problem'
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
        },
        {
          path: 'notice',
          component: notice
        },
        {
          path: 'ability',
          component: ability
        },
        {
          path: 'submit-history',
          component: submitHistory
        },
        {
          path: 'upload-history',
          component: uploadHistory
        },
        {
          path: 'collection',
          component: collection
        }
      ]
    },
    {
      path: '/upload-problem',
      component: uploadProblem
    },
    {
      path: '/admin',
      redirect: '/admin/user-manage',
      component: admin,
      children: [
        {
          path: 'user-manage',
          component: userManage
        },
        {
          path: 'problem-manage',
          component: problemManage
        },
        {
          path: 'notice-manage',
          component: noticeManage
        },
        {
          path: 'tag-manage',
          component: tagManage
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
