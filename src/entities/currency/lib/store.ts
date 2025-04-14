import { defineStore } from 'pinia'
import { ref } from 'vue'

import { Currency } from '../config'

const useMainCurrencyStore = defineStore('mainCurrency', () => {
  const mainCurrency = ref(Currency.RUB)

  const setMainCurrency = (value: Currency) => {
    mainCurrency.value = value
  }

  return {
    mainCurrency,
    setMainCurrency,
  }
})

export { useMainCurrencyStore }
