import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../components/HomeView'
import OptionsView from '../components/OptionsView'
import GameView from '../components/GameView'
import AboutView from '../components/AboutView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/options/:id',
      name: 'options',
      component: OptionsView
    },
    {
      path: '/game/:id',
      name: 'game',
      component: GameView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})
