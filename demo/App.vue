<template>
  <div>
    <Container
      maxWidth="2000px"
      :gutter="16"
    >
      This is a container with Tailwind CSS styling.
    </Container>
    test
    <!-- Header Section -->
    <div class="p-6">
      <h1 class="text-[40px] font-bold">UI Library Demo</h1>
      <Button class="mt-4">Click Me</Button>
    </div>

    <!-- Theming Section -->
    <div :class="{ dark: isDark }" class="min-h-screen p-6 bg-white dark:bg-gray-900">
      <h1 class="text-primary dark:text-primary-dark text-2xl font-semibold">
        Hello with Tailwind Theming!
      </h1>
      <Button
        @click="toggleTheme"
        class="mt-4 px-4 py-2 bg-primary text-white rounded"
      >
        Toggle Theme
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from '../src/components/Button/styled/index.vue'
import Container from '../src/components/layout/Container/styled/container-styled-index.vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = prefersDark
  document.documentElement.classList.toggle('dark', prefersDark)
})
</script>
