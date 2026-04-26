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
  }>(),
  {
    as: 'div',
    gap: '4',
    align: 'stretch',
    justify: 'start',
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
  '--ds-stack-gap': `var(--ds-space-${props.gap})`,
  '--ds-stack-align': alignMap[props.align],
  '--ds-stack-justify': justifyMap[props.justify],
}));
</script>

<template>
  <component :is="as" class="ds-stack" :style="style">
    <slot />
  </component>
</template>
