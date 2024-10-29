<script setup>
import EmployeeComponent from "../components/Employees/EmployeeComponent.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const employees = [
  {
    id: 1,
    name: "Олексій",
    surname: "Дьяченко",
    fathersname: "Володимирович",
    city: "Київ",
    roles: ["Менеджер", "Художник"],
  },
  {
    id: 2,
    name: "Олексій",
    surname: "Дьяченко",
    fathersname: "Володимирович",
    city: "Київ",
    roles: ["Менеджер", "Художник"],
  },
  {
    id: 3,
    name: "Олексій",
    surname: "Дьяченко",
    fathersname: "Володимирович",
    city: "Київ",
    roles: ["Менеджер", "Художник"],
  },
  {
    id: 4,
    name: "Олексій",
    surname: "Дьяченко",
    fathersname: "Володимирович",
    city: "Київ",
    roles: ["Менеджер", "Художник"],
  },
  {
    id: 5,
    name: "Олексій",
    surname: "Дьяченко",
    fathersname: "Володимирович",
    city: "Київ",
    roles: ["Менеджер", "Художник"],
  },
  {
    id: 6,
    name: "Олексій",
    surname: "Дьяченко",
    fathersname: "Володимирович",
    city: "Київ",
    roles: ["Менеджер", "Художник"],
  },
  {
    id: 7,
    name: "Олексій",
    surname: "Дьяченко",
    fathersname: "Володимирович",
    city: "Київ",
    roles: ["Менеджер", "Художник"],
  },
  {
    id: 8,
    name: "Олексій",
    surname: "Дьяченко",
    fathersname: "Володимирович",
    city: "Київ",
    roles: ["Менеджер", "Художник"],
  },
  {
    id: 9,
    name: "Олексій",
    surname: "Дьяченко",
    fathersname: "Володимирович",
    city: "Київ",
    roles: ["Менеджер", "Художник"],
  },
  {
    id: 10,
    name: "Олексій",
    surname: "Дьяченко",
    fathersname: "Володимирович",
    city: "Київ",
    roles: ["Менеджер", "Художник"],
  },
];

// const employees = ref()
// onMounted(() => {
//   console.log("hello");
//   axios
//     .get("http://localhost:8080/api/employee")
//     .then((response) => (employees.value = response.data))
//     .catch((error) => console.log(error));

//   console.log(employees);
// });

const goToUser = (id) => {
  router.push(`/employee/${id}`);
  console.log(router.params.id);
};
</script>

<template>
  <div class="d-f col r-g-40">
    <div class="heading p-r">
      <h1 class="t-center">Cпівробітники</h1>
      <router-link to="/create-employee" class="create p-a"
        >Додати співробітника</router-link
      >
    </div>
    <div class="employees d-f r-g-15 c-g-40 el-center">
      <EmployeeComponent
        v-for="(employee, index) in employees"
        :key="index"
        :id="employee.id"
        :name="employee.name"
        :surname="employee.surname"
        :fathersname="employee.fathersname"
        :city="employee.city"
        :roles="employee.roles"
        @go-to-order="goToUser(employee.id)"
      />
    </div>
  </div>
</template>

<style scoped>
@import url("../components/Employees/Employees.css");
</style>
