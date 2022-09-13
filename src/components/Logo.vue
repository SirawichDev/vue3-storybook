<template>
<div class="logo">
  <Text :variant="Variant.WHITE" class="" :f-size="5" :title="props.logoName"/>
  <div class="circle-pink"></div>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Variant } from '@/types/text-types';
import Text from '@/components/Text.vue';

const props = defineProps<{ logoName: string }>();
</script>

<style scoped lang="scss">

</style>
