<script setup lang="ts">
import { computed } from 'vue'

import {
  Currency,
  useCurrencyRates,
  useMainCurrencyStore,
} from '~/entities/currency'
import { ErrorMessage, Loader, Typography } from '~/shared/ui'

defineOptions({
  name: 'HomePage',
})

const currencyStore = useMainCurrencyStore()
const {
  data: currencyData,
  isError,
  isPending,
} = useCurrencyRates(currencyStore.mainCurrency)

const rates = computed(() => {
  return Object.entries(currencyData?.value?.conversion_rates || {})
    .map(([code, rate]) => ({
      code,
      rate,
    }))
    .filter((rate) =>
      [Currency.EUR, Currency.RUB, Currency.USD].includes(rate.code as Currency)
    )
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="container flex gap-6 items-center flex-1">
      <div class="flex-1">
        <Typography tag="h1"
          >Currency <br />
          Converter</Typography
        >
      </div>
      <div class="flex flex-1 justify-center">
        <Loader v-if="isPending" />
        <ErrorMessage v-else-if="isError" />
        <div v-else>
          <ul v-if="rates.length">
            <li v-for="rate in rates" :key="rate.code">
              <span
                v-if="rate.code !== currencyStore.mainCurrency"
                class="scroll-m-20 text-xl font-semibold tracking-tight"
              >
                1 {{ rate.code }} = {{ rate.rate.toFixed(2) }}
              </span>
            </li>
          </ul>
          <Typography v-else tag="p">No data</Typography>
        </div>
      </div>
    </div>
  </div>
</template>
