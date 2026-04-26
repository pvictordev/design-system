import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Grid, Select, Stack } from '@/design-system';
import type { SelectOption } from '@/design-system';

const options: SelectOption[] = [
  { label: 'Viewer', value: 'viewer' },
  { label: 'Editor', value: 'editor' },
  { label: 'Admin', value: 'admin' },
  { label: 'Owner', value: 'owner', disabled: true },
];

const meta = {
  title: 'Design System/Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: {
    label: 'Role',
    placeholder: 'Choose role',
    options,
    size: 'md',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref('editor');
      return { args, value };
    },
    template: `<Select v-bind="args" v-model="value" />`,
  }),
};

export const States: Story = {
  render: () => ({
    components: { Grid, Select, Stack },
    setup() {
      const role = ref('viewer');
      return { options, role };
    },
    template: `
      <Grid columns="auto" gap="4">
        <Select v-model="role" label="Default" :options="options" />
        <Select label="Disabled" :options="options" disabled />
        <Select label="Invalid" :options="options" error="Select a role." />
        <Stack gap="3">
          <Select size="sm" label="Small" :options="options" />
          <Select size="md" label="Medium" :options="options" />
          <Select size="lg" label="Large" :options="options" />
        </Stack>
      </Grid>
    `,
  }),
};
