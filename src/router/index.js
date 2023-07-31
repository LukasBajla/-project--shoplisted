import { createRouter, createWebHistory } from "vue-router";
import ShoplistView from "../views/ShoplistView.vue";
import RecipesView from "../views/RecipesView.vue";
import ShoplistHomeView from "../views/ShoplistHomeView.vue";
import AddItemView from "../views/AddItemView.vue";
import EditItemView from "../views/EditItemView.vue";
import UserView from "../views/UserView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    // redirect: {name:"Shoplist"},
    redirect: "/shoplist",
  },
  {
    path: "/user/:state",
    name: "User",
    component: UserView,
    props: true,
  },

  {
    path: "/shoplist",
    name: "Shoplist",
    component: ShoplistView,
    children: [
      {
        path: "",
        name: "ShoplistHome",
        component: ShoplistHomeView,
      },
      {
        path: "add",
        name: "AddItem",
        component: AddItemView,
      },
      {
        path: "shopitem/:id",
        name: "EditItem",
        component: EditItemView,
        props: true,
      },
    ],
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: RecipesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
