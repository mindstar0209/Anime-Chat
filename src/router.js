import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import DefineChatbot from './views/define-chatbot'
import Chat from './views/chat'
import Search from './views/search'
import Personal from './views/personal'
import ComingSoon from './views/coming-soon'
import Profile from './views/profile'
import Login from './views/login'
import Home from './views/home'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'DefineChatbot',
      path: '/define-chatbot',
      component: DefineChatbot,
    },
    {
      name: 'chat',
      path: '/chat',
      component: Chat,
    },
    {
      name: 'Search',
      path: '/search',
      component: Search,
    },
    {
      name: 'Personal',
      path: '/personal',
      component: Personal,
    },
    {
      name: 'ComingSoon',
      path: '/ComingSoon',
      component: ComingSoon,
    },
    {
      name: 'Profile',
      path: '/profile',
      component: Profile,
    },
    {
      name: 'Home',
      path: '/home',
      component: Home,
    },
    {
      name: 'Login',
      path: '/',
      component: Login,
    },
  ],
})
