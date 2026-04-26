<script setup lang="ts">
import { ref } from 'vue';

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

const theme = ref<'light' | 'dark'>('light');
const notifications = ref(true);
const region = ref('eu');
const workspaceName = ref('Acme workspace');

const regions = [
  { label: 'Europe', value: 'eu' },
  { label: 'United States', value: 'us' },
  { label: 'Asia Pacific', value: 'apac' },
];

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme.value;
}

document.documentElement.dataset.theme = theme.value;
</script>

<template>
  <main class="app-shell ds-page">
    <div class="ds-container">
      <Stack gap="16">
        <section class="app-hero">
          <Stack gap="6">
            <Inline gap="2">
              <Badge tone="info">Design System v1</Badge>
              <Badge variant="outline">Vue + Reka UI</Badge>
            </Inline>

            <Stack gap="4">
              <Heading :level="1">A dense, calm foundation for product interfaces.</Heading>
              <Text size="lg">
                Tokens, themes, primitives, and core components now live behind a single internal
                design-system entry point.
              </Text>
            </Stack>

            <Inline gap="3">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary</Button>
              <IconButton label="Toggle theme" variant="ghost" @click="toggleTheme">
                <span aria-hidden="true">{{ theme === 'light' ? 'D' : 'L' }}</span>
              </IconButton>
            </Inline>
          </Stack>

          <Card>
            <template #header>
              <Stack gap="1">
                <Heading :level="3">Workspace settings</Heading>
                <Text size="sm">Compact form controls using shared tokens.</Text>
              </Stack>
            </template>

            <Stack gap="4">
              <Input v-model="workspaceName" label="Workspace name" />
              <Select v-model="region" label="Region" :options="regions" />
              <Checkbox
                v-model="notifications"
                label="Email notifications"
                description="Send account and billing updates to administrators."
              />
            </Stack>

            <template #footer>
              <Inline class="app-footer-row" justify="between">
                <Text size="sm" tone="muted">Theme: {{ theme }}</Text>
                <Dialog
                  title="Confirm changes"
                  description="This flow is backed by Reka Dialog and styled by the design system."
                >
                  <template #trigger>
                    <Button size="sm">Review</Button>
                  </template>

                  <Text>
                    Changes to {{ workspaceName }} will be saved for the {{ region }} region.
                  </Text>

                  <template #footer>
                    <Button variant="secondary">Cancel</Button>
                    <Button>Save changes</Button>
                  </template>
                </Dialog>
              </Inline>
            </template>
          </Card>
        </section>

        <section>
          <Grid columns="auto" gap="4">
            <div class="app-swatch app-swatch--dark" />
            <div class="app-swatch app-swatch--light" />
            <div class="app-swatch app-swatch--blue" />
            <div class="app-swatch app-swatch--green" />
          </Grid>
        </section>
      </Stack>
    </div>
  </main>
</template>
