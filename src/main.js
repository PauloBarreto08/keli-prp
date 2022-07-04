import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import About from './views/About'
import Registro from './views/Registro'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: About },
    { path: '/login', component: LoginView },
    { path: '/registro', component: Registro }
]

const router = new VueRouter({
    routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')