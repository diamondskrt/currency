import { useDebounceFn } from '@vueuse/core'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'

import { convertCurrency, Currency } from '~/entities/currency'

import { formSchema } from '../config'

const debounceMs = 300

const useCurrencyForm = () => {
  const { values, setFieldValue } = useForm({
    validationSchema: formSchema,
    initialValues: {
      from_currency: Currency.RUB,
      to_currency: Currency.USD,
    },
  })

  const onInput = useDebounceFn(async (event: Event, key: string) => {
    const value = (event.target as HTMLInputElement).value

    if (!value) return

    try {
      const convertedAmount = await convertCurrency({
        from: (key === 'from_amount'
          ? values.from_currency
          : values.to_currency) as Currency,
        to: (key === 'from_amount'
          ? values.to_currency
          : values.from_currency) as Currency,
        amount: Number(value),
      })

      const conversationResult = Number(
        convertedAmount.conversion_result.toFixed(2)
      )

      setFieldValue(
        key === 'from_amount' ? 'to_amount' : 'from_amount',
        conversationResult
      )
    } catch (error) {
      toast.error((error as Error).message)
    }
  }, debounceMs)

  return {
    onInput,
  }
}

export { useCurrencyForm }
