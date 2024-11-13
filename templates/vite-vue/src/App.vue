<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function go(path) {
  router.push(path);
}
</script>

<template>
  <button class="link" @click="go('/')">to HelloWorld</button>
  <button class="link" @click="go('/about')">to About</button>
  <RouterView />
</template>

<style scoped>
.link {
  margin: 10px;
  padding: 5px;
  border: 1px solid transparent;
  background-color: rgb(40, 227, 143);
  cursor: pointer;
}
</style>
