<script setup lang="ts">
import { computed } from 'vue';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui';
import IconButton from '@/design-system/components/IconButton/IconButton.vue';

type Size = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    title: string;
    description?: string;
    size?: Size;
    modal?: boolean;
    showClose?: boolean;
  }>(),
  {
    size: 'md',
    modal: true,
    showClose: true,
  },
);

const open = defineModel<boolean>('open', { default: false });
const classes = computed(() => `ds-dialog--${props.size}`);
</script>

<template>
  <DialogRoot v-model:open="open" :modal="modal">
    <DialogTrigger v-if="$slots.trigger" as-child>
      <slot name="trigger" />
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay class="ds-dialog__overlay" />
      <DialogContent class="ds-dialog__content" :class="classes">
        <div class="ds-dialog__header">
          <DialogTitle class="ds-dialog__title">{{ title }}</DialogTitle>
          <DialogDescription v-if="description" class="ds-dialog__description">
            {{ description }}
          </DialogDescription>
        </div>

        <slot />

        <div v-if="$slots.footer" class="ds-dialog__footer">
          <slot name="footer" />
        </div>

        <DialogClose v-if="showClose" as-child>
          <IconButton class="ds-dialog__close" label="Close dialog" variant="ghost" size="sm">
            <span aria-hidden="true">x</span>
          </IconButton>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
