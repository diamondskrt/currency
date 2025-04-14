<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

import { Currency, useMainCurrencyStore } from '~/entities/currency'
import { cn } from '~/shared/lib'
import { Select } from '~/shared/ui'

import { currencyOptions } from '../config'
import type { CurrencySelectEmits } from '../model'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()

const emits = defineEmits<CurrencySelectEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const currencyStore = useMainCurrencyStore()
</script>

<template>
  <Select
    v-bind="{ ...forwarded, ...$attrs }"
    :class="cn(props.class ?? 'w-full')"
    :model-value="currencyStore.mainCurrency"
    :options="currencyOptions"
    @update:model-value="
      (value) => currencyStore.setMainCurrency(value as Currency)
    "
  />
</template>
