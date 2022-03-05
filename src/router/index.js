import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home";
import AddProduct from "@/pages/AddProduct";
import EditProduct from "@/pages/EditProduct";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/add-product",
    component: AddProduct,
  },
  {
    path: "/edit-product",
    component: EditProduct,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
