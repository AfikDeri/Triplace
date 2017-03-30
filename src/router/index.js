import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Posts from '../components/Posts'
import Flights from '../components/Flights'
<<<<<<< HEAD
import Country from '../components/Country'
=======
import Contact from '../components/Contact'
>>>>>>> f45be20d945ee2a9815bc3bf61ce84d874ecb285

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
    	path: '/countries/:name',
    	component: Country
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
