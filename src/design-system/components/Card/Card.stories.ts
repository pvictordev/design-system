import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Badge, Button, Card, Grid, Heading, Inline, Stack, Text } from '@/design-system';

const meta = {
  title: 'Design System/Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    padding: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: {
    padding: 'md',
    interactive: false,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { Badge, Button, Card, Heading, Stack, Text },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args" class="app-story-card-width">
        <template #header>
          <Stack gap="1">
            <Badge tone="info">Plan</Badge>
            <Heading :level="3">Team workspace</Heading>
          </Stack>
        </template>
        <Text>Cards frame repeated or actionable content without becoming page sections.</Text>
        <template #footer>
          <Button size="sm">Manage</Button>
        </template>
      </Card>
    `,
  }),
};

export const ListLayout: Story = {
  render: () => ({
    components: { Badge, Card, Grid, Heading, Inline, Stack, Text },
    template: `
      <Grid columns="auto" gap="4">
        <Card interactive>
          <template #header>
            <Heading :level="3">API keys</Heading>
            <Badge tone="success">Healthy</Badge>
          </template>
          <Text>Three active keys across production and staging.</Text>
        </Card>
        <Card interactive>
          <template #header>
            <Heading :level="3">Billing</Heading>
            <Badge tone="warning">Review</Badge>
          </template>
          <Text>Usage is approaching the current monthly threshold.</Text>
        </Card>
        <Card interactive>
          <template #header>
            <Heading :level="3">Members</Heading>
            <Inline gap="2">
              <Badge>12</Badge>
            </Inline>
          </template>
          <Text>Invite, remove, and audit workspace access.</Text>
        </Card>
      </Grid>
    `,
  }),
};
