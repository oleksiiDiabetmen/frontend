<script setup>
import { ref } from "vue";

const inputType = ref("password");
const inputValue = ref();

const props = defineProps(["inpustName", "description", "buttons"]);
</script>

<template>
  <div class="form-block p-r" v-if="buttons">
    <input
      :type="inputType"
      :name="inpustName"
      class="form-input"
      v-model="inputValue"
    />
    <label
      :for="inpustName"
      class="form-label p-a"
      :class="{ active: inputValue }"
      >{{ description }}:</label
    >
    <div class="pass p-a">
      <button
        class="show-pass"
        v-if="inputType == 'password'"
        @click.prevent="inputType = 'text'"
      >
        Show
      </button>
      <button
        class="show-pass"
        v-if="inputType == 'text'"
        @click.prevent="inputType = 'password'"
      >
        Hide
      </button>
    </div>
  </div>

  <div class="form-block p-r" v-else>
    <input
      type="text"
      :name="inpustName"
      class="form-input"
      v-model="inputValue"
    />
    <label
      :for="inpustName"
      class="form-label p-a"
      :class="{ active: inputValue }"
      >{{ description }}:</label
    >
  </div>
</template>

<style scoped>
@import url("./CreateEmployee.css");
</style>
