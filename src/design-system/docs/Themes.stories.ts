import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Badge, Button, Card, Heading, Inline, Input, Stack, Text } from '@/design-system';

const meta = {
  title: 'Design System/Foundation/Themes',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightAndDark: Story = {
  render: () => ({
    components: { Badge, Button, Card, Heading, Inline, Input, Stack, Text },
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <div class="ds-grid" style="--ds-grid-gap: var(--ds-space-5); --ds-grid-columns: repeat(2, minmax(0, 1fr))">
            <div data-theme="light" class="app-theme-frame">
              <Card>
                <template #header>
                  <Stack gap="1">
                    <Inline gap="2">
                      <Badge>Light</Badge>
                      <Badge tone="success" variant="outline">Ready</Badge>
                    </Inline>
                    <Heading :level="3">Light theme</Heading>
                  </Stack>
                </template>
                <Stack gap="4">
                  <Text>Neutral surfaces, quiet borders, and high contrast text.</Text>
                  <Input label="Workspace" model-value="Acme" />
                  <Inline>
                    <Button size="sm">Save</Button>
                    <Button size="sm" variant="secondary">Cancel</Button>
                  </Inline>
                </Stack>
              </Card>
            </div>
            <div data-theme="dark" class="app-theme-frame">
              <Card>
                <template #header>
                  <Stack gap="1">
                    <Inline gap="2">
                      <Badge>Dark</Badge>
                      <Badge tone="info" variant="outline">Ready</Badge>
                    </Inline>
                    <Heading :level="3">Dark theme</Heading>
                  </Stack>
                </template>
                <Stack gap="4">
                  <Text>Dark mode swaps semantic variables without component changes.</Text>
                  <Input label="Workspace" model-value="Acme" />
                  <Inline>
                    <Button size="sm">Save</Button>
                    <Button size="sm" variant="secondary">Cancel</Button>
                  </Inline>
                </Stack>
              </Card>
            </div>
          </div>
        </div>
      </main>
    `,
  }),
};
