<script setup lang="ts">
import { computed } from 'vue'

import type { TypographyProps } from '../model'

defineOptions({
  name: 'BaseTypography',
})

const props = defineProps<TypographyProps>()

const tag = computed(() => props.tag)
</script>

<template>
  <tag>
    <slot />
  </tag>
</template>
