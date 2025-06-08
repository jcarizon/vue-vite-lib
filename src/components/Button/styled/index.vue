<script setup lang="ts">
import Core from '../core/index.vue';
import { useButtonClick } from './composable';

const props = defineProps<{
  onClick?: () => void
}>();

const { handleClick } = useButtonClick(props.onClick);
</script>

<template>
  <Core :onClick="handleClick" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    <slot />
  </Core>
</template>