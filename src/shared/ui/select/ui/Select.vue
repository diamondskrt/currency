<script setup lang="ts">
import get from 'lodash/get'
import { useForwardPropsEmits } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

import { cn } from '~/shared/lib'
import {
  RSelect,
  RSelectContent,
  RSelectGroup,
  RSelectItem,
  RSelectTrigger,
  RSelectValue,
} from '~/shared/ui'

import type { SelectProps } from '../model'

defineOptions({
  name: 'BaseSelect',
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<SelectProps & { class?: HTMLAttributes['class'] }>(),
  {
    disabled: false,
    loading: false,
    modelValue: '',
    optionLabel: 'label',
    optionValue: 'value',
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const isDisabled = computed(() => props.disabled || props.loading)
</script>

<template>
  <RSelect
    :disabled="isDisabled"
    :model-value="modelValue"
    @update:model-value="emits('update:modelValue', $event as string)"
  >
    <RSelectTrigger
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn(props.class ?? 'w-full')"
    >
      <RSelectValue :placeholder="props.placeholder">
        {{ modelValue }}
      </RSelectValue>
    </RSelectTrigger>
    <RSelectContent>
      <RSelectGroup>
        <RSelectItem
          v-for="option in props.options"
          :key="get(option, props.optionValue)"
          :value="get(option, props.optionValue)"
        >
          {{ get(option, props.optionLabel) }}
        </RSelectItem>
      </RSelectGroup>
    </RSelectContent>
  </RSelect>
</template>
