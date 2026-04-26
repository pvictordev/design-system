<script setup lang="ts">
import { computed } from 'vue';

type Padding = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    as?: string;
    padding?: Padding;
    interactive?: boolean;
  }>(),
  {
    as: 'section',
    padding: 'md',
    interactive: false,
  },
);

const classes = computed(() => [
  `ds-card--${props.padding}`,
  { 'ds-card--interactive': props.interactive },
]);
</script>

<template>
  <component :is="as" class="ds-card" :class="classes">
    <div v-if="$slots.header || $slots.action" class="ds-card__header">
      <div v-if="$slots.header">
        <slot name="header" />
      </div>
      <div v-if="$slots.action">
        <slot name="action" />
      </div>
    </div>

    <div class="ds-card__body">
      <slot />
    </div>

    <div v-if="$slots.footer" class="ds-card__footer">
      <slot name="footer" />
    </div>
  </component>
</template>
