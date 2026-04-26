<script setup lang="ts">
import { computed } from 'vue';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit' | 'reset';

const props = withDefaults(
  defineProps<{
    label: string;
    variant?: Variant;
    size?: Size;
    type?: ButtonType;
    disabled?: boolean;
  }>(),
  {
    variant: 'secondary',
    size: 'md',
    type: 'button',
    disabled: false,
  },
);

const classes = computed(() => [
  `ds-icon-button--${props.variant}`,
  `ds-icon-button--${props.size}`,
]);
</script>

<template>
  <button
    class="ds-icon-button"
    :class="classes"
    :type="type"
    :disabled="disabled"
    :aria-label="label"
    :title="label"
  >
    <slot />
  </button>
</template>
