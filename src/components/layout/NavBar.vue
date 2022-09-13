<template>
<div class="header">
  <div class="header__area">
    <div class="nav-container">
      <Logo logo-name="Xircle"/>
      <Menu :menuList="props.menuList" :color="props.menuColor"/>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import Logo from '@/components/Logo.vue';
import { IMenu } from '@/types/menu-type';
import Menu from '@/components/layout/Menu.vue';
const props = defineProps<{ menuList: IMenu[], menuColor: string }>();
</script>

<style scoped>

</style>
