<script setup>
import { computed, ref } from "vue";
import CreateEmployeeComponent from "../components/CreateEmployee/CreateEmployeeComponent.vue";

const inputValue = ref();
const textareaValue = ref();
const roles = ref(["Художник", "Адміністратор"]);

const rolesInput = computed(() => {
  return roles.value.join(", ");
});

const inputs = [
  {
    inputsName: "name",
    description: "Імʼя",
  },
  {
    inputsName: "surname",
    description: "Прізвище",
  },
  {
    inputsName: "fathersName",
    description: "По-батькові",
  },
  {
    inputsName: "phone",
    description: "Номер телефону",
  },
  {
    inputsName: "additionalPhone",
    description: "Додатковий номер",
  },
  {
    inputsName: "city",
    description: "Місто",
  },
  {
    inputsName: "email",
    description: "Email",
  },
  {
    inputsName: "password",
    description: "Пароль",
    buttons: true,
  },
];
</script>

<template>
  <div class="wrapper d-f el-center r-g-40 col">
    <h1 class="header t-center">Create new Employee</h1>
    <form action="" id="createEmployee" class="d-g c-g-40 r-g-40">
      <CreateEmployeeComponent
        v-for="(item, index) in inputs"
        :key="index"
        :description="item.description"
        :inpust-name="item.inputsName"
        :buttons="item.buttons"
      />

      <div class="form-block p-r">
        <textarea
          type="text"
          name="note"
          class="form-input"
          v-model="textareaValue"
        />
        <label
          for="note"
          class="form-label p-a"
          :class="{ active: textareaValue }"
          >Нотаток:</label
        >
      </div>

      <div class="form-block p-r">
        <div class="form-input d-f">{{ rolesInput }}</div>
        <span class="form-label p-a" :class="{ active: roles.length != 0 }"
          >roles:</span
        >
      </div>

      <div class="form-block p-r" v-if="asd">
        <input
          type="text"
          name="roles"
          class="form-input"
          v-model="inputValue"
          disabled
        />
        <label
          for="roles"
          class="form-label p-a"
          :class="{ active: inputValue }"
          >roles:</label
        >
      </div>

      <div class="block-create d-f el-center">
        <button class="create" @click="">Create</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import url("../components/CreateEmployee/CreateEmployee.css");
textarea {
  padding-top: 8px;
  font-size: 15px;
  max-width: 300px;
}

.form-input {
  align-items: center;
}
</style>
