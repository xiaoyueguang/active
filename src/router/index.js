import Vue from 'vue'
import Router from 'vue-router'

const Rule = r => require.ensure([], () => r(require('@/views/rule/rule.vue')), 'rule')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Rule
    }
  ]
})
