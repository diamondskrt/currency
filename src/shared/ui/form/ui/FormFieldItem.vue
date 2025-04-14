<script setup lang="ts">
import { Field as FormField } from 'vee-validate'

import { cn } from '~/shared/lib'
import { FormControl, FormItem, FormLabel, FormMessage } from '~/shared/ui'

withDefaults(
  defineProps<{
    formItemClass?: string
    isFieldDirty?: boolean
    label: string
    name: string
  }>(),
  {
    isFieldDirty: false,
  }
)
</script>

<template>
  <FormField
    v-slot="{ componentField }"
    :name="name"
    :validate-on-blur="!isFieldDirty"
  >
    <FormItem :class="cn(formItemClass)">
      <FormLabel v-if="label">{{ label }}</FormLabel>
      <FormControl>
        <slot :component-field="componentField" />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
