import Vue from 'vue'
import VueRouter from 'vue-router'
import AllCoins from '../components/views/AllCoins.vue'
import SingleCoin from '../components/views/SingleCoin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllCoins',
    component: AllCoins
  },
  
  {path:'/:symbol',name:'SingleCoin',component:SingleCoin}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
