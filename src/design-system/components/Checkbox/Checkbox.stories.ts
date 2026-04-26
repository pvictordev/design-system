import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Checkbox, Stack } from '@/design-system';

const meta = {
  title: 'Design System/Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: `
      <Checkbox
        v-model="checked"
        label="Enable notifications"
        description="This uses Reka Checkbox for keyboard and form behavior."
      />
    `,
  }),
};

export const States: Story = {
  render: () => ({
    components: { Checkbox, Stack },
    setup() {
      const checked = ref(true);
      const unchecked = ref(false);
      const indeterminate = ref<'indeterminate'>('indeterminate');
      return { checked, unchecked, indeterminate };
    },
    template: `
      <Stack gap="4">
        <Checkbox v-model="checked" label="Checked" />
        <Checkbox v-model="unchecked" label="Unchecked" />
        <Checkbox v-model="indeterminate" label="Indeterminate" />
        <Checkbox label="Disabled" disabled />
        <Checkbox label="Invalid" error="This agreement is required." />
      </Stack>
    `,
  }),
};
