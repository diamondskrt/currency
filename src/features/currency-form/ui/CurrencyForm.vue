<script setup lang="ts">
import { currencyOptions } from '~/entities/currency'
import { FormFieldItem, Input, Select } from '~/shared/ui'

import { useCurrencyForm } from '../lib'

const { onInput } = useCurrencyForm()
</script>

<template>
  <form class="w-full md:w-1/2 space-y-6">
    <div class="flex items-start gap-4">
      <FormFieldItem
        label="First currency"
        name="from_currency"
        form-item-class="flex-1"
      >
        <template #default="{ componentField }">
          <Select
            placeholder="from_currency"
            v-bind="componentField"
            :options="currencyOptions"
          />
        </template>
      </FormFieldItem>
      <FormFieldItem
        label="First amount"
        name="from_amount"
        form-item-class="flex-1"
      >
        <template #default="{ componentField }">
          <Input
            type="number"
            placeholder="from_amount"
            v-bind="componentField"
            @input="(event: Event) => onInput(event, 'from_amount')"
          />
        </template>
      </FormFieldItem>
    </div>
    <div class="flex items-start gap-4">
      <FormFieldItem
        label="Second currency"
        name="to_currency"
        form-item-class="flex-1"
      >
        <template #default="{ componentField }">
          <Select
            placeholder="to_currency"
            v-bind="componentField"
            :options="currencyOptions"
          />
        </template>
      </FormFieldItem>
      <FormFieldItem
        label="Second amount"
        name="to_amount"
        form-item-class="flex-1"
      >
        <template #default="{ componentField }">
          <Input
            type="number"
            placeholder="to_amount"
            v-bind="componentField"
            @input="(event: Event) => onInput(event, 'to_amount')"
          />
        </template>
      </FormFieldItem>
    </div>
  </form>
</template>
