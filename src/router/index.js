import { createWebHistory, createRouter } from "vue-router"
import AirportDetail from '../views/AirportDetail'
import HelloWord from "../components/HelloWorld.vue"
// import Home from "@/views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWord,
  },
  {
    path: '/airport/:code',
    name: 'AirportDetail',
    component: AirportDetail
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router