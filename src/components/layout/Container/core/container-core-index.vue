<script setup lang="ts">
import { useContainer } from './container-core-composable'

const props = defineProps<{
  fluid?: boolean
  padding?: string
  tag?: string
  customClass?: string
}>()

const { tag, containerStyle } = useContainer(props)
</script>

<template>
  <component :is="tag" :class="props.customClass" :style="containerStyle">
    <slot />
  </component>
</template>
