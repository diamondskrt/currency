<script lang="ts" setup>
import { ErrorMessage } from 'vee-validate'
import { type HTMLAttributes, toValue } from 'vue'

import { cn } from '~/shared/lib'

import { useFormField } from '../lib'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { formMessageId, name } = useFormField()
</script>

<template>
  <ErrorMessage
    :id="formMessageId"
    data-slot="form-message"
    as="p"
    :name="toValue(name)"
    :class="cn('text-destructive-foreground text-sm', props.class)"
  />
</template>
