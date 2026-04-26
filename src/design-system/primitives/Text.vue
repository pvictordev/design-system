<script setup lang="ts">
import { computed } from 'vue';

type Size = 'xs' | 'sm' | 'md' | 'lg';
type Tone = 'primary' | 'secondary' | 'muted' | 'danger' | 'success' | 'warning' | 'inverse';
type Weight = 'regular' | 'medium' | 'semibold';
type Align = 'left' | 'center' | 'right';

const props = withDefaults(
  defineProps<{
    as?: string;
    size?: Size;
    tone?: Tone;
    weight?: Weight;
    align?: Align;
  }>(),
  {
    as: 'p',
    size: 'md',
    tone: 'secondary',
    weight: 'regular',
    align: 'left',
  },
);

const classes = computed(() => [
  `ds-text--${props.size}`,
  `ds-text--${props.tone}`,
  `ds-text--${props.weight}`,
]);

const style = computed(() => ({
  '--ds-text-align': props.align,
}));
</script>

<template>
  <component :is="as" class="ds-text" :class="classes" :style="style">
    <slot />
  </component>
</template>
