<script setup lang="ts">
import { ref } from 'vue'
import useCounterStore from '@/stores/counter'

const counterStore = useCounterStore()

const msg = ref('My name is Li Hua!')

const handleClick = () => {
  counterStore.counter++ 
}

const reset = () => {
  counterStore.$reset()
}
</script>

<template>
  <section class="wrap">
    <div>home</div>
    <div class="msg">{{ msg }}</div>
    <div>{{ counterStore.doubleCount }}</div>
    <button class="btn" @click="handleClick">{{ counterStore.counter }}</button>
    <button class="btn" @click="reset">reset</button>
  </section>
</template>

<style scoped lang="scss">
.wrap {
  .msg {
    color: var(--primary-color);
  }
  .btn {
    width: 80px;
    padding: 8px;
    cursor: pointer;
  }
}
</style>
