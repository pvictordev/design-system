export type SelectValueType = string | number;

export type SelectOption = {
  label: string;
  value: SelectValueType;
  disabled?: boolean;
};
