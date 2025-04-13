<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <nav class="flex bg-primary text-primary-foreground gap-4 p-4">
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>
    <main class="p-4">
      <RouterView />
    </main>
  </div>
</template>
