import { useQuery } from '@tanstack/vue-query'

import { fetchCurrencyRates } from '../api'
import type { Currency } from '../config'

const useCurrencyRates = (currency: Currency) =>
  useQuery({
    queryFn: () => fetchCurrencyRates(currency),
    queryKey: ['currency-rates', currency],
    staleTime: 1000 * 60 * 10,
  })

export { useCurrencyRates }
