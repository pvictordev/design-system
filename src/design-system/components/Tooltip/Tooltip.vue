<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from 'reka-ui';

type Side = 'top' | 'right' | 'bottom' | 'left';
type Align = 'start' | 'center' | 'end';

withDefaults(
  defineProps<{
    content?: string;
    side?: Side;
    align?: Align;
    sideOffset?: number;
    alignOffset?: number;
    delayDuration?: number;
    skipDelayDuration?: number;
    disabled?: boolean;
    showArrow?: boolean;
  }>(),
  {
    side: 'top',
    align: 'center',
    sideOffset: 8,
    alignOffset: 0,
    delayDuration: 200,
    skipDelayDuration: 300,
    disabled: false,
    showArrow: true,
  },
);
</script>

<template>
  <TooltipProvider
    data-slot="tooltip-provider"
    :delay-duration="delayDuration"
    :skip-delay-duration="skipDelayDuration"
  >
    <TooltipRoot data-slot="tooltip" :disabled="disabled">
      <TooltipTrigger data-slot="tooltip-trigger" as-child>
        <slot name="trigger" />
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          data-slot="tooltip-content"
          class="ds-tooltip__content"
          :side="side"
          :align="align"
          :side-offset="sideOffset"
          :align-offset="alignOffset"
        >
          <slot>{{ content }}</slot>
          <TooltipArrow v-if="showArrow" class="ds-tooltip__arrow" :width="10" :height="5" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
