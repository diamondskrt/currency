<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'

import { Typography } from '~/shared/ui'
defineOptions({
  name: 'BaseLoader',
})
</script>

<template>
  <div class="flex gap-2 items-center">
    <Loader2 class="animate-spin w-4 h-4" />
    <Typography tag="span">Loading...</Typography>
  </div>
</template>
