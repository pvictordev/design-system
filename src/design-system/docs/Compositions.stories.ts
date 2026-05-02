import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Folder, MessageSquareQuote, PanelsTopLeft, Quote } from 'lucide-vue-next';
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Heading,
  Inline,
  Input,
  Select,
  Stack,
  Text,
  Tooltip,
} from '@/design-system';

const densityOptions = [
  { label: 'Comfortable', value: 'comfortable' },
  { label: 'Compact', value: 'compact' },
  { label: 'Dense', value: 'dense' },
];

const meta = {
  title: 'Design System/Patterns/Compositions',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SettingsForm: Story = {
  render: () => ({
    components: { Button, Card, Checkbox, Heading, Inline, Input, Select, Stack, Text },
    setup() {
      const density = ref('compact');
      const telemetry = ref(true);
      return { density, densityOptions, telemetry };
    },
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <Card padding="lg">
            <template #header>
              <Stack gap="1">
                <Heading :level="2">Workspace preferences</Heading>
                <Text size="sm">A compact settings form using field, control, and layout primitives.</Text>
              </Stack>
            </template>

            <form class="ds-form app-story-form-width">
              <Input label="Workspace name" model-value="Acme Product" />
              <Input label="Primary email" type="email" model-value="ops@example.com" />
              <Select v-model="density" label="Interface density" :options="densityOptions" />
              <Checkbox
                v-model="telemetry"
                label="Product telemetry"
                description="Share anonymized product usage to improve defaults."
              />
              <Inline>
                <Button type="submit">Save preferences</Button>
                <Button type="button" variant="secondary">Reset</Button>
              </Inline>
            </form>
          </Card>
        </div>
      </main>
    `,
  }),
};

export const Toolbar: Story = {
  render: () => ({
    components: { Badge, Button, Card, Heading, Inline, Text },
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <Card>
            <div class="ds-toolbar">
              <Inline gap="3">
                <Heading :level="3">Deployments</Heading>
                <Badge tone="success">Live</Badge>
                <Text size="sm" tone="muted">Updated 4 min ago</Text>
              </Inline>
              <Inline gap="2">
                <Button size="sm">Create deploy</Button>
              </Inline>
            </div>
          </Card>
        </div>
      </main>
    `,
  }),
};

export const FloatingNavigation: Story = {
  render: () => ({
    components: { Button, Folder, MessageSquareQuote, PanelsTopLeft, Quote, Tooltip },
    setup() {
      const activeTool = ref('messages');

      return { activeTool };
    },
    template: `
      <main class="ds-page app-floating-nav-page">
        <nav class="app-floating-nav-toolbar" aria-label="Workspace tools">
          <Tooltip content="Canvas">
            <template #trigger>
              <Button
                class="app-floating-nav-action"
                :class="{ 'app-floating-nav-action--active': activeTool === 'canvas' }"
                variant="ghost"
                size="sm"
                aria-label="Canvas"
                @click="activeTool = 'canvas'"
              >
                <PanelsTopLeft :size="22" :stroke-width="2.1" />
              </Button>
            </template>
          </Tooltip>
          <Tooltip content="Messages">
            <template #trigger>
              <Button
                class="app-floating-nav-action"
                :class="{ 'app-floating-nav-action--active': activeTool === 'messages' }"
                variant="ghost"
                size="sm"
                aria-label="Messages"
                @click="activeTool = 'messages'"
              >
                <MessageSquareQuote :size="22" :stroke-width="2.1" />
              </Button>
            </template>
          </Tooltip>
          <Tooltip content="Files">
            <template #trigger>
              <Button
                class="app-floating-nav-action"
                :class="{ 'app-floating-nav-action--active': activeTool === 'files' }"
                variant="ghost"
                size="sm"
                aria-label="Files"
                @click="activeTool = 'files'"
              >
                <Folder :size="22" :stroke-width="2.1" />
              </Button>
            </template>
          </Tooltip>
          <Tooltip content="Notes">
            <template #trigger>
              <Button
                class="app-floating-nav-action"
                :class="{ 'app-floating-nav-action--active': activeTool === 'notes' }"
                variant="ghost"
                size="sm"
                aria-label="Notes"
                @click="activeTool = 'notes'"
              >
                <Quote :size="21" :stroke-width="2.2" />
              </Button>
            </template>
          </Tooltip>
        </nav>
      </main>
    `,
  }),
};

export const EmptyState: Story = {
  render: () => ({
    components: { Badge, Button, Card, Heading, Text },
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <Card>
            <div class="ds-empty-state">
              <Badge tone="info">No data</Badge>
              <Heading :level="2">No API keys yet</Heading>
              <Text>Create a scoped key before connecting production services.</Text>
              <Button>Create key</Button>
            </div>
          </Card>
        </div>
      </main>
    `,
  }),
};
