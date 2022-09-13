<template>
  <nav>
    <ul class="menu" v-for="(menu, index) in props.menuList" :key="index">
      <li :style="`color: ${props.color}`">{{ menu.name }}</li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { IMenu } from '@/types/menu-type';

const props = defineProps<{ menuList: IMenu[], color: string}>();
</script>

<style scoped>

</style>
