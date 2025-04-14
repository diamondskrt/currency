<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { CurrencySelect } from '~/entities/currency'

defineOptions({
  name: 'BaseNavbar',
})
</script>

<template>
  <nav
    class="navbar fixed top-0 z-10 w-full bg-white/30 backdrop-blur shadow-md h-18"
  >
    <div class="flex justify-between h-full items-center container">
      <ul class="flex font-medium gap-6 items-center">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/convert">Convert</RouterLink>
        </li>
      </ul>
      <CurrencySelect class="w-[100px]" />
    </div>
  </nav>
</template>
