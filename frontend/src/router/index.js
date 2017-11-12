import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
// import Home from '@/components/Home'
import Pending from '@/components/Pending'
import Ongoing from '@/components/Ongoing'
import Completed from '@/components/Completed'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      props: true,
      component: App
    },
    {
      path: '/pending',
      name: 'Pending',
      props: true,
      component: Pending
    },
    {
      path: '/ongoing',
      name: 'Ongoing',
      props: true,
      component: Ongoing
    },
    {
      path: '/completed',
      name: 'Completed',
      props: true,
      component: Completed
    },
    {
      path: '/test',
      name: 'Test',
      props: true,
      component: Test
    }
  ]
})
