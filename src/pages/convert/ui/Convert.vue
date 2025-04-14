<script setup lang="ts">
import { CurrencyForm } from '~/features/currency-form'

defineOptions({
  name: 'ConvertPage',
})
</script>

<template>
  <div class="convert-page mt-18">
    <div class="container py-6">
      <CurrencyForm />
    </div>
  </div>
</template>
