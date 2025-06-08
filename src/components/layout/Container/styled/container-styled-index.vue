<script setup lang="ts">
import ContainerCore from '../core/container-core-index.vue'
import { useContainerProvider } from './container-styled-composable'

const props = defineProps<{
  maxWidth?: string
  gutter?: number
  fluid?: boolean
  padding?: string
  tag?: string
  customClass?: string
}>()

const { combinedClass } = useContainerProvider(props)
</script>

<template>
  <ContainerCore
    :fluid="props.fluid"
    :padding="props.padding"
    :tag="props.tag"
    :customClass="combinedClass"
  >
    <slot />
  </ContainerCore>
</template>
