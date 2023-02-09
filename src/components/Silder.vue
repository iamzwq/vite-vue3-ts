<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

type List = {
  id: string
  title: string
  path: string
  icon: string
}

const route = useRoute()
const router = useRouter()

const currNav = ref(route.path)

const list: List[] = [
  {
    id: 'home',
    title: 'HOME',
    path: '/home',
    icon: 'ic_icon1',
  },
  {
    id: 'about',
    title: 'ABOUT',
    path: '/about',
    icon: 'ic_icon2',
  },
  {
    id: 'user',
    title: 'USER',
    path: '/user',
    icon: 'ic_icon1',
  },
]

const handleClick = (nav: List) => {
  currNav.value = nav.path
  router.push(nav.path)
}
</script>

<template>
  <ul class="silder">
    <li
      v-for="nav in list"
      :key="nav.id"
      :class="['navItem', { active: currNav === nav.path }]"
      @click="handleClick(nav)"
    >
      <svg-icon class="svg-icon" :name="nav.icon" />
      <div class="text">{{ nav.title }}</div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.silder {
  width: 200px;
  height: calc(100vh - 60px);
  background-color: white;
  .navItem {
    display: flex;
    align-items: center;
    padding: 12px;
    cursor: pointer;
    .svg-icon {
      color: blue;
    }
    &:hover,
    &.active {
      color: #fff;
      background-color: var(--primary-color);
      .svg-icon {
        color: #fff;
      }
    }
    .text {
      margin-left: 8px;
    }
  }
}
</style>
