<script setup lang="ts">
import { computed } from 'vue';

type Level = 1 | 2 | 3 | 4;

const props = withDefaults(
  defineProps<{
    as?: string;
    level?: Level;
  }>(),
  {
    level: 2,
  },
);

const tag = computed(() => props.as ?? `h${props.level}`);
const classes = computed(() => `ds-heading--${props.level}`);
</script>

<template>
  <component :is="tag" class="ds-heading" :class="classes">
    <slot />
  </component>
</template>
