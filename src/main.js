import Vue from 'vue'
// import App from './App.vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      console.log(this.currentRoute)
      return matchingView ? require('./' + matchingView.file + '.vue') : require('./static/404.vue')
    }
  },
  render: function (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
