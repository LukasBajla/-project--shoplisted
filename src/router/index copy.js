import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddItemView from "../views/AddItemView.vue";
import EditItemView from "../views/EditItemView.vue";
import UserView from "../views/UserView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "AddItem",
    component: AddItemView,
  },
  {
    path: "/shopitem/:id",
    name: "EditItem",
    component: EditItemView,
    props: true,
  },
  {
    path: "/user/:state",
    name: "User",
    component: UserView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
