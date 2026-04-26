<script setup lang="ts">
import { computed } from 'vue';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit' | 'reset';

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    size?: Size;
    type?: ButtonType;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
);

const classes = computed(() => [
  `ds-button--${props.variant}`,
  `ds-button--${props.size}`,
  { 'ds-button--full': props.fullWidth },
]);
</script>

<template>
  <button
    class="ds-button"
    :class="classes"
    :type="type"
    :disabled="disabled || loading"
    :aria-busy="loading || undefined"
  >
    <span v-if="loading" class="ds-button__spinner" aria-hidden="true" />
    <slot />
  </button>
</template>
