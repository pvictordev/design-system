<script setup lang="ts">
import { computed, useId } from 'vue';
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui';

const props = withDefaults(
  defineProps<{
    id?: string;
    label?: string;
    description?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    name?: string;
  }>(),
  {
    disabled: false,
    required: false,
  },
);

const model = defineModel<boolean | 'indeterminate'>({ default: false });
const uid = useId();
const fieldId = computed(() => props.id ?? `ds-checkbox-${uid}`);
const hintId = computed(() => (props.description ? `${fieldId.value}-hint` : undefined));
const errorId = computed(() => (props.error ? `${fieldId.value}-error` : undefined));
const describedBy = computed(
  () => [hintId.value, errorId.value].filter(Boolean).join(' ') || undefined,
);
const isInvalid = computed(() => Boolean(props.error));
</script>

<template>
  <div class="ds-checkbox">
    <CheckboxRoot
      :id="fieldId"
      v-model="model"
      class="ds-checkbox__box"
      :disabled="disabled"
      :required="required"
      :name="name"
      :aria-invalid="isInvalid || undefined"
      :aria-describedby="describedBy"
    >
      <CheckboxIndicator class="ds-checkbox__indicator">
        <span class="ds-checkbox__mark" aria-hidden="true" />
      </CheckboxIndicator>
    </CheckboxRoot>

    <div v-if="label || description || error" class="ds-checkbox__content">
      <label v-if="label" class="ds-checkbox__label" :for="fieldId">{{ label }}</label>
      <span v-if="description" :id="hintId" class="ds-field__hint">{{ description }}</span>
      <span v-if="error" :id="errorId" class="ds-field__error">{{ error }}</span>
    </div>
  </div>
</template>
