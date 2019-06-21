import Vue from 'vue'
import Router from 'vue-router'
import Display from '../components/Display.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '*',
      component: Display
    },
    {
      path: '/hw',
      component: Display
    }
  ]
})
export default router