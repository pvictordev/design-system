<script setup lang="ts">
import { computed, useId } from 'vue';
import { Check, ChevronDown } from 'lucide-vue-next';
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui';
import type { SelectOption, SelectValueType } from './types';

type Size = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    id?: string;
    label?: string;
    description?: string;
    error?: string;
    placeholder?: string;
    options: SelectOption[];
    size?: Size;
    disabled?: boolean;
    required?: boolean;
    name?: string;
  }>(),
  {
    placeholder: 'Select an option',
    size: 'md',
    disabled: false,
    required: false,
  },
);

const model = defineModel<SelectValueType | undefined>();
const uid = useId();
const fieldId = computed(() => props.id ?? `ds-select-${uid}`);
const hintId = computed(() => (props.description ? `${fieldId.value}-hint` : undefined));
const errorId = computed(() => (props.error ? `${fieldId.value}-error` : undefined));
const describedBy = computed(
  () => [hintId.value, errorId.value].filter(Boolean).join(' ') || undefined,
);
const isInvalid = computed(() => Boolean(props.error));
const classes = computed(() => `ds-select--${props.size}`);
</script>

<template>
  <div class="ds-select" :class="classes">
    <label v-if="label" class="ds-field__label" :for="fieldId">{{ label }}</label>

    <SelectRoot v-model="model" :disabled="disabled" :required="required" :name="name">
      <SelectTrigger
        :id="fieldId"
        class="ds-select__trigger"
        :aria-invalid="isInvalid || undefined"
        :aria-describedby="describedBy"
      >
        <SelectValue data-slot="select-value" class="ds-select__value" :placeholder="placeholder" />
        <SelectIcon as-child>
          <ChevronDown class="ds-select__icon" aria-hidden="true" />
        </SelectIcon>
      </SelectTrigger>

      <SelectPortal>
        <SelectContent
          class="ds-select__content"
          position="popper"
          side="bottom"
          align="start"
          :side-offset="4"
        >
          <SelectViewport class="ds-select__viewport">
            <SelectItem
              v-for="option in options"
              :key="String(option.value)"
              class="ds-select__item"
              :value="option.value"
              :disabled="option.disabled"
              :text-value="option.label"
            >
              <SelectItemIndicator class="ds-select__indicator">
                <Check class="ds-select__check" aria-hidden="true" />
              </SelectItemIndicator>
              <SelectItemText>{{ option.label }}</SelectItemText>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>

    <span v-if="description" :id="hintId" class="ds-field__hint">{{ description }}</span>
    <span v-if="error" :id="errorId" class="ds-field__error">{{ error }}</span>
  </div>
</template>
