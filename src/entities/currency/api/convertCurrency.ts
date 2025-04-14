import { apiClient } from '~/shared/api'

import type { Currency } from '../config'
import type { CurrencyRates } from '../model'

const convertCurrency = async ({
  from,
  to,
  amount,
}: {
  amount: number
  from: Currency
  to: Currency
}): Promise<CurrencyRates> => {
  return apiClient.get<CurrencyRates>(`/pair/${from}/${to}/${amount}`)
}

export { convertCurrency }
