import Vue from 'vue'
import Router from 'vue-router'
import myHome from 'view/myHome'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/myHome',
    component: myHome,
    // childRoutes: [{
    //   path: '/myHome',
    //   component: 'myHome'
    // }]
  }]
})