<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Header')
</script>

<template>
  <section class="header">{{ title }}</section>
</template>

<style scoped>
.header {
  height: 60px;
  background-color: white;
}
</style>
