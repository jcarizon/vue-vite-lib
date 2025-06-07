<script setup lang="ts">
import ButtonCore from '../core/ButtonCore.vue';

defineProps<{
  onClick?: () => void
}>();
</script>

<template>
  <ButtonCore :onClick="onClick" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    <slot />
  </ButtonCore>
</template>
