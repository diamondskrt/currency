type CurrencyRates = Record<string, number>

type CurrencySelectEmits = {
  closeAutoFocus: [event: Event]
  escapeKeyDown: [event: KeyboardEvent]
  pointerDownOutside: [event: PointerDownOutsideEvent]
}

type PointerDownOutsideEvent = CustomEvent<{
  originalEvent: PointerEvent
}>

export type { CurrencyRates, CurrencySelectEmits }
