import Vue from 'vue'
import Router from 'vue-router'
import Questionnaire from './views/Questionnaire'
import Login from "./views/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire
    },
  ]
})
