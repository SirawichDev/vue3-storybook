<template>
  <div>
    <button @click="onClicked">
      {{ props.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ title: string }>();
const emit = defineEmits(['onClick']);

function onClicked() {
  emit('onClick', "You're Clicked");
}
</script>
