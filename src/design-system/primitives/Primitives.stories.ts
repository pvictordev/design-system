import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Badge, Button, Card, Grid, Heading, Inline, Stack, Text } from '@/design-system';

const meta = {
  title: 'Design System/Primitives/Layout and Type',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const StackInlineGrid: Story = {
  render: () => ({
    components: { Badge, Button, Card, Grid, Heading, Inline, Stack, Text },
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <Stack gap="8">
            <Stack gap="2">
              <Heading :level="1">Primitives</Heading>
              <Text>Composable layout and type pieces that stay close to CSS.</Text>
            </Stack>

            <Grid columns="auto" gap="4">
              <Card>
                <template #header>
                  <Heading :level="3">Stack</Heading>
                </template>
                <Stack gap="3">
                  <Badge>Vertical rhythm</Badge>
                  <Text>Stacks arrange content in one column with tokenized gaps.</Text>
                  <Button size="sm" variant="secondary">Action</Button>
                </Stack>
              </Card>

              <Card>
                <template #header>
                  <Heading :level="3">Inline</Heading>
                </template>
                <Inline gap="2">
                  <Badge tone="info">Draft</Badge>
                  <Badge tone="success">Healthy</Badge>
                  <Badge tone="warning">Review</Badge>
                  <Badge tone="danger">Blocked</Badge>
                </Inline>
              </Card>

              <Card>
                <template #header>
                  <Heading :level="3">Grid</Heading>
                </template>
                <Grid :columns="2" gap="3">
                  <div class="app-radius-box"><Text size="sm">One</Text></div>
                  <div class="app-radius-box"><Text size="sm">Two</Text></div>
                  <div class="app-radius-box"><Text size="sm">Three</Text></div>
                  <div class="app-radius-box"><Text size="sm">Four</Text></div>
                </Grid>
              </Card>
            </Grid>
          </Stack>
        </div>
      </main>
    `,
  }),
};

export const TextAndHeading: Story = {
  render: () => ({
    components: { Card, Heading, Stack, Text },
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <Card padding="lg">
            <Stack gap="5">
              <Heading :level="1">Heading one</Heading>
              <Heading :level="2">Heading two</Heading>
              <Heading :level="3">Heading three</Heading>
              <Heading :level="4">Heading four</Heading>
              <Stack gap="2">
                <Text tone="primary">Primary text is used for core readable content.</Text>
                <Text tone="secondary">Secondary text supports product UI without shouting.</Text>
                <Text tone="muted" size="sm">Muted text is useful for metadata and helper copy.</Text>
                <Text tone="danger" size="sm">Danger text communicates validation and destructive outcomes.</Text>
              </Stack>
            </Stack>
          </Card>
        </div>
      </main>
    `,
  }),
};
