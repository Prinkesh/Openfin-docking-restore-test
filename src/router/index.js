import Vue from 'vue'
import Router from 'vue-router'
import ParentComponent from '@/components/ParentComponent'
import ChildComponent from '@/components/ChildComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/parent',

      component: ParentComponent
    },
    {
      path: '/child',

      component: ChildComponent
    }
  ]
})
