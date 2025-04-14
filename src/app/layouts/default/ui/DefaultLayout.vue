<script setup lang="ts">
import { RouterView } from 'vue-router'

import { Navbar } from '~/widgets/navbar'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="min-h-screen">
      <RouterView />
    </div>
  </div>
</template>
