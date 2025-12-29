import { createRouter, createWebHistory } from "vue-router";
import BookList from "../views/BookList.vue";
import BookInfo from "../views/BookInfo.vue";
import BookForm from "../views/BookForm.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "bookList" },
  },
  {
    path: "/employees",
    component: import("@/views/employees/EmployeesView.vue"),
    children: [
      {
        path: "",
        components: {
          default: () => import("@/views/employees/EmployeeList.vue"),
          right: () => import("@/views/employees/EmployeeForm.vue"),
        },
      },
    ],
  },
  {
    path: "/list",
    name: "bookList",
    component: BookList,
  },
  {
    path: "/info/:bno",
    name: "bookInfo",
    component: BookInfo,
  },
  {
    path: "/form",
    name: "bookForm",
    component: BookForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
