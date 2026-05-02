<script setup lang="ts">
import { computed, useId } from 'vue';

type Size = 'sm' | 'md' | 'lg';
type InputType = 'email' | 'file' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

const props = withDefaults(
  defineProps<{
    id?: string;
    label?: string;
    description?: string;
    error?: string;
    invalid?: boolean;
    size?: Size;
    type?: InputType;
    placeholder?: string;
    name?: string;
    autocomplete?: string;
    disabled?: boolean;
    required?: boolean;
  }>(),
  {
    size: 'md',
    type: 'text',
    invalid: false,
    disabled: false,
    required: false,
  },
);

const model = defineModel<string | number>({ default: '' });
const uid = useId();
const fieldId = computed(() => props.id ?? `ds-input-${uid}`);
const hintId = computed(() => (props.description ? `${fieldId.value}-hint` : undefined));
const errorId = computed(() => (props.error ? `${fieldId.value}-error` : undefined));
const describedBy = computed(
  () => [hintId.value, errorId.value].filter(Boolean).join(' ') || undefined,
);
const isInvalid = computed(() => props.invalid || Boolean(props.error));
const classes = computed(() => `ds-input--${props.size}`);
</script>

<template>
  <label class="ds-field ds-input" :class="classes" :for="fieldId">
    <span v-if="label" class="ds-field__label-row">
      <span class="ds-field__label">{{ label }}</span>
    </span>
    <input
      :id="fieldId"
      v-model="model"
      data-slot="input"
      class="ds-input__control"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :required="required"
      :aria-invalid="isInvalid || undefined"
      :aria-describedby="describedBy"
    />
    <span v-if="description" :id="hintId" class="ds-field__hint">{{ description }}</span>
    <span v-if="error" :id="errorId" class="ds-field__error">{{ error }}</span>
  </label>
</template>
