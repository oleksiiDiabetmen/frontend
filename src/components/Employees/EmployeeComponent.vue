<script setup>
const props = defineProps(["id", "name", "surname", "fathersname", "city", "roles"]);
const emits = defineEmits(["goToOrder"]);
</script>

<template>
  <div class="employee d-f col t-center r-g-15" @click="$emit('goToOrder')">
    <h1>{{ id }}</h1>
    <p>{{ name }}</p>
    <p>{{ surname }}</p>
    <p>{{ fathersname }}</p>
    <p>{{ city }}</p>
    <div class="role" v-for="(role, index) in roles" :key="index">
      {{ role }}
    </div>
  </div>
</template>

<style scoped>
@import url("./Employees.css");
</style>
