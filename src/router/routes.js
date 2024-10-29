import CreateEmployeeView from "../views/CreateEmployeeView.vue";
import EmployeesView from "../views/EmployeesView.vue";
import Home from "../views/Home.vue";
import ProfileView from "../views/ProfileView.vue";

const routes = [
  {
    path: "/",
    component: Home,
    // children: [{ path: "//:id", component: EmployeesView }],
  },
  {
    path: "/employees",
    component: EmployeesView,
    // children: [{ path: "//:id", component: EmployeesView }],
  },
  {
    path: "/profile",
    component: ProfileView,
    // children: [{ path: "//:id", component: EmployeesView }],
  },
  {
    path: "/create-employee",
    component: CreateEmployeeView,
    // children: [{ path: "//:id", component: EmployeesView }],
  },
  // {
  //   path: "/orders",
  //   component: "OrdersView",
  //   children: [{ path: "/:id", component: "Order" }],
  // },
  // { path: "/login", component: "Login" },
  // { path: "/registration", component: "registration" },
];

export default routes;
