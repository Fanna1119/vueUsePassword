<script setup lang="ts">
import usePasswordGenerator from "./composables/usePasswordGenerator";

const { password, generate } = usePasswordGenerator({
  length: 20,
  uppercase: true,
  lowercase: true,
  numbers: true,
  special: true

})

</script>

<template>
  <div>
    <input type="text" v-model="password" />
<button @click="generate">generate</button>
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
