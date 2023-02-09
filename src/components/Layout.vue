<script setup lang="ts">
import Header from './Header.vue'
import Silder from './Silder.vue'
</script>

<template>
  <Header />
  <main class="main">
    <Silder />
    <section class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </section>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  .content {
    flex: 1;
    margin: 24px;
    background-color: white;
  }
}
</style>
