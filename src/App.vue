<template>
  <NavBar :menuList="menuList" menuColor="white"/>
  <router-view/>
</template>

<style lang="scss">

</style>
<script setup lang="ts">
import { IMenu } from '@/types/menu-type';
import NavBar from '@/components/layout/NavBar.vue';

const menuList: IMenu[] = [
  {
    link: '',
    name: 'Home',
    active: true,
  },
  {
    link: '',
    name: 'About',
    active: false,
  },
  {
    link: '',
    name: 'Service',
    active: false,
  },
  {
    link: '',
    name: 'Page',
    active: false,
  },
];
</script>
