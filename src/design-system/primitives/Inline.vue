<script setup lang="ts">
import { computed } from 'vue';

type Space = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';
type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type Justify = 'start' | 'center' | 'end' | 'between';

const props = withDefaults(
  defineProps<{
    as?: string;
    gap?: Space;
    align?: Align;
    justify?: Justify;
    wrap?: boolean;
  }>(),
  {
    as: 'div',
    gap: '3',
    align: 'center',
    justify: 'start',
    wrap: true,
  },
);

const alignMap: Record<Align, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
};

const justifyMap: Record<Justify, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
};

const style = computed(() => ({
  '--ds-inline-gap': `var(--ds-space-${props.gap})`,
  '--ds-inline-align': alignMap[props.align],
  '--ds-inline-justify': justifyMap[props.justify],
  '--ds-inline-wrap': props.wrap ? 'wrap' : 'nowrap',
}));
</script>

<template>
  <component :is="as" class="ds-inline" :style="style">
    <slot />
  </component>
</template>
