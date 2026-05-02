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
  <DialogRoot v-model:open="open" data-slot="dialog" :modal="modal">
    <DialogTrigger v-if="$slots.trigger" data-slot="dialog-trigger" as-child>
      <slot name="trigger" />
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay data-slot="dialog-overlay" class="ds-dialog__overlay" />
      <DialogContent data-slot="dialog-content" class="ds-dialog__content" :class="classes">
        <div data-slot="dialog-header" class="ds-dialog__header">
          <DialogTitle data-slot="dialog-title" class="ds-dialog__title">
            {{ title }}
          </DialogTitle>
          <DialogDescription
            v-if="description"
            data-slot="dialog-description"
            class="ds-dialog__description"
          >
            {{ description }}
          </DialogDescription>
        </div>

        <slot />

        <div v-if="$slots.footer" data-slot="dialog-footer" class="ds-dialog__footer">
          <slot name="footer" />
        </div>

        <DialogClose v-if="showClose" data-slot="dialog-close" class="ds-dialog__close">
          <span class="ds-dialog__close-icon" aria-hidden="true" />
          <span class="ds-sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
