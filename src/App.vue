<script setup lang="ts">
import { ref } from "@vue/reactivity";
import usePasswordStrength from "./composables/usePasswordStrength";
import usePasswordGenerator from "./composables/usePasswordGenerator";

const { password, generate } = usePasswordGenerator({
  length: 50,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,

})

// const password = ref<String>("password");

const { result } = usePasswordStrength(password);
</script>

<template>
  <div>
    <input type="text" v-model="pw" />
<button @click="generate">generate</button>
{{result}}
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
