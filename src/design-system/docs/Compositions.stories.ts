import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Dialog,
  Grid,
  Heading,
  IconButton,
  Inline,
  Input,
  Select,
  Stack,
  Text,
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
    components: { Badge, Button, Card, Heading, IconButton, Inline, Text },
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
                <IconButton label="Filter"><span aria-hidden="true">F</span></IconButton>
                <IconButton label="Refresh"><span aria-hidden="true">R</span></IconButton>
                <Button size="sm">Create deploy</Button>
              </Inline>
            </div>
          </Card>
        </div>
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

export const SimpleDialogFlow: Story = {
  render: () => ({
    components: { Button, Dialog, Input, Stack, Text },
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <Dialog title="Create API key" description="Name the key and keep the secret somewhere safe.">
            <template #trigger>
              <Button>Create API key</Button>
            </template>

            <Stack gap="4">
              <Input label="Key name" placeholder="Production server" />
              <Text size="sm">Dialog focus trapping, escape key behavior, and outside click behavior come from Reka.</Text>
            </Stack>

            <template #footer>
              <Button variant="secondary">Cancel</Button>
              <Button>Create key</Button>
            </template>
          </Dialog>
        </div>
      </main>
    `,
  }),
};

export const CardList: Story = {
  render: () => ({
    components: { Badge, Card, Grid, Heading, Text },
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <Grid columns="auto" gap="4">
            <Card interactive>
              <template #header>
                <Heading :level="3">Production</Heading>
                <Badge tone="success">Online</Badge>
              </template>
              <Text>Requests, latency, and error budget for the production environment.</Text>
            </Card>
            <Card interactive>
              <template #header>
                <Heading :level="3">Staging</Heading>
                <Badge tone="info">Syncing</Badge>
              </template>
              <Text>Preview deploys and integration checks before release.</Text>
            </Card>
            <Card interactive>
              <template #header>
                <Heading :level="3">Local</Heading>
                <Badge>Idle</Badge>
              </template>
              <Text>Development keys and webhook tunnels for local testing.</Text>
            </Card>
          </Grid>
        </div>
      </main>
    `,
  }),
};
