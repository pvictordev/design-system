<script setup lang="ts">
import { computed } from 'vue'

type Tone = 'neutral' | 'success' | 'warning' | 'danger' | 'info'
type Variant = 'subtle' | 'solid' | 'outline'
type Size = 'sm' | 'md'

const props = withDefaults(
  defineProps<{
    tone?: Tone
    variant?: Variant
    size?: Size
  }>(),
  {
    tone: 'neutral',
    variant: 'subtle',
    size: 'md',
  },
)

const classes = computed(() => [
  `ds-badge--${props.tone}`,
  `ds-badge--${props.variant}`,
  `ds-badge--${props.size}`,
])
</script>

<template>
  <span class="ds-badge" :class="classes">
    <slot />
  </span>
</template>
