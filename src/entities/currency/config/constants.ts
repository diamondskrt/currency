enum Currency {
  RUB = 'RUB',
  USD = 'USD',
  EUR = 'EUR',
}

const currencyOptions = [
  { label: Currency.USD, value: Currency.USD },
  { label: Currency.EUR, value: Currency.EUR },
  { label: Currency.RUB, value: Currency.RUB },
]

export { Currency, currencyOptions }
