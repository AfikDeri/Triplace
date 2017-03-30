import Vue from 'vue'
import Router from 'vue-router'
import {store} from '../store'
import Home from '../components/Home'
import Posts from '../components/Posts'
import Post from '../components/Post'
import Flights from '../components/Flights'
import Country from '../components/Country'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'

Vue.use(Router)

let router = new Router({
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
      path: '/posts/:id',
      component: Post
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
    },
    {
    	path: "*",
    	component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  	store.commit("toggleNav", false);
  	next();
})

export default router;
