<script setup lang="ts">
import { Primitive } from 'reka-ui'

import { cn } from '~/shared/lib'

import { buttonVariants } from '../config'
import type { ButtonProps } from '../model'

defineOptions({
  name: 'BaseButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
