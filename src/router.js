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
import problemDetail from './components/problem-detail'
import myLive from './components/user/my-live'
import orderManager from './components/admin/orderManager'
import liveManage from './components/admin/live-manage'
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
          path: 'my-live',
          component: myLive
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
      path: '/problem-detail',
      component: problemDetail
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
          path: 'orderManager',
          component: orderManager
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
        },
        {
          path: 'live-manage',
          component: liveManage
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
