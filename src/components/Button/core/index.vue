<script setup lang="ts">
import { useClick } from './composable';  

const props = defineProps<{
  onClick?: () => void
}>();

const { handleClick } = useClick(props.onClick);
</script>

<template>
  <button @click="handleClick">
    <slot />
  </button>
</template>