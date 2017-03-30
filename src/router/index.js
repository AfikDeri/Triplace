import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Posts from '../components/Posts'
import Flights from '../components/Flights'
import Contact from '../components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      component: Posts
    },
    {
      path: '/flights',
      component: Flights
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
