<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const title = ref('Header')

const router = useRouter()
</script>

<template>
  <section class="header">
    <div class="logo"></div>
    <div class="nav">{{ title }}</div>
    <div class="operation" @click="router.push('/login')">signOut</div>
  </section>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 60px;
  background-color: white;
  .logo {
    background: gray;
    width: 152px;
    height: 32px;
    margin: 0 24px;
  }
  .nav {
    flex: 1;
  }
  .operation {
    margin-right: 24px;
    cursor: pointer;
  }
}
</style>
