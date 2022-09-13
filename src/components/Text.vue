<template>
  <span
    :class="`${props.class} ${theme[props.variant]}`" :style="`font-size: ${fSize}rem`"
    >{{ props.title }}</span
  >
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { Variant } from "@/types/text-types";

const theme: Record<string, any> = {
  primary: "font-primary-color",
  secondary: "font-secondary-color",
};

const props =
  defineProps<{
    variant: Variant;
    class: string;
    title: string;
    fSize: number;
  }>();
</script>

<style scoped></style>
