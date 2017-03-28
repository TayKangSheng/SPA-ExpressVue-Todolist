import Vue from 'vue'
import page from 'page'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    props: {},
    ViewComponent: { render: h => h('div', 'loading...') }
  },
  render: function (h) {
    return h(this.ViewComponent, { props: this.props })
  }
})

Object.keys(routes).forEach(route => {
  const Component = require('./' + routes[route] + '.vue')
  page(route, function (ctx) {
    app.props = ctx.params
    app.ViewComponent = Component
  })
})

page('*', () => app.ViewComponent = require('./static/404.vue'))
page()
