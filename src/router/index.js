import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../components/LoginView.vue";
import TasksView from "../components/TasksView.vue";
import SignView from "../components/SignView";
import TopicsView from "../components/TopicsView";
import GroupView from "../components/GroupView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignView,
  },
  {
    path: "/topics",
    name: "topics",
    component: TopicsView,
  },
  {
    path: "/group",
    name: "group",
    component: GroupView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
