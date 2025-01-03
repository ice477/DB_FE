import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Event from "@/views/Event.vue";
import LoginPage from "@/views/LoginPage.vue";
import Information from "@/views/Information.vue";
import TicketDetail from "@/views/TicketDetail.vue";
import CartPage from '@/views/CartPage.vue';
import OrderPage from '@/views/OrderPage.vue';
import Search from "@/views/Search.vue";
import Dashboard from '@/views/Dashboard.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
  },
  {
    path: '/ticket/:id',
    name: 'TicketDetail',
    component: TicketDetail,
  },
  {
    path: "/information",
    name: "Information",
    component: Information,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  },
  {
    path: '/orders',
    name: 'OrderPage',
    component: OrderPage,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: "/seller/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresSeller: true }, 
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
