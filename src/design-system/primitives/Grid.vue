<script setup lang="ts">
import { computed } from 'vue';

type Space = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';
type Columns = 1 | 2 | 3 | 4 | 'auto';
type MinItemWidth = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    as?: string;
    columns?: Columns;
    gap?: Space;
    minItemWidth?: MinItemWidth;
  }>(),
  {
    as: 'div',
    columns: 1,
    gap: '4',
    minItemWidth: 'md',
  },
);

const minWidthMap: Record<MinItemWidth, string> = {
  sm: '12rem',
  md: '16rem',
  lg: '20rem',
};

const classes = computed(() => ({
  'ds-grid--auto': props.columns === 'auto',
}));

const style = computed(() => ({
  '--ds-grid-gap': `var(--ds-space-${props.gap})`,
  '--ds-grid-columns':
    props.columns === 'auto' ? undefined : `repeat(${props.columns}, minmax(0, 1fr))`,
  '--ds-grid-min': minWidthMap[props.minItemWidth],
}));
</script>

<template>
  <component :is="as" class="ds-grid" :class="classes" :style="style">
    <slot />
  </component>
</template>
