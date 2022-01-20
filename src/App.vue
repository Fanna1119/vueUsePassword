<script setup>
import { ref } from "@vue/reactivity";
import usePasswordStrength from "./composables/usePasswordStrength.ts";

const password = ref("password");

const { passwordRef, score, feedback } = usePasswordStrength(password);
</script>

<template>
<div>
  <input type="text" v-model="password">
  <p>{{ feedback }}</p>
  <p>{{score}}</p>
  {{passwordRef}}
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
