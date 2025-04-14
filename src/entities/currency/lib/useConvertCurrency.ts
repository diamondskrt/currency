import { useQuery } from '@tanstack/vue-query'

import { convertCurrency } from '../api'
import type { Currency } from '../config'

const useConvertCurrency = ({
  from,
  to,
  amount,
}: {
  amount: number
  from: Currency
  to: Currency
}) =>
  useQuery({
    queryFn: () => convertCurrency({ from, to, amount }),
    queryKey: ['currency-rates', from, to, amount],
    staleTime: 1000 * 60 * 10,
    enabled: !!from && !!to && !!amount,
  })

export { useConvertCurrency }
