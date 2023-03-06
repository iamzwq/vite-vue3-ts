<script setup lang="ts">
import Header from './Header.vue'
import Silder from './Silder.vue'
</script>

<template>
  <Header />
  <main class="main">
    <Silder />
    <section class="content">
      <router-view v-slot="{ Component, route }">
        <transition
          :name="(route?.meta?.transition as string) || 'fade'"
          mode="out-in"
        >
          <keep-alive>
            <suspense>
              <template #default>
                <component
                  :is="Component"
                  :key="route.meta.usePathKey ? route.path : undefined"
                />
              </template>
              <template #fallback> Loading... </template>
            </suspense>
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
