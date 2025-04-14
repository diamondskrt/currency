import { apiClient } from '~/shared/api'

import type { Currency } from '../config'
import type { CurrencyRates } from '../model'

const fetchCurrencyRates = async (
  currency: Currency
): Promise<CurrencyRates> => {
  return apiClient.get<CurrencyRates>(`/latest/${currency}`)
}

export { fetchCurrencyRates }
