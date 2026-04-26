import type { Meta, StoryObj } from '@storybook/vue3-vite';

const colorTokens = [
  { name: '--ds-surface-page', value: 'var(--ds-surface-page)' },
  { name: '--ds-surface-panel', value: 'var(--ds-surface-panel)' },
  { name: '--ds-surface-muted', value: 'var(--ds-surface-muted)' },
  { name: '--ds-text-primary', value: 'var(--ds-text-primary)' },
  { name: '--ds-text-secondary', value: 'var(--ds-text-secondary)' },
  { name: '--ds-border-subtle', value: 'var(--ds-border-subtle)' },
  { name: '--ds-action-primary', value: 'var(--ds-action-primary)' },
  { name: '--ds-state-success', value: 'var(--ds-state-success)' },
  { name: '--ds-state-warning', value: 'var(--ds-state-warning)' },
  { name: '--ds-state-danger', value: 'var(--ds-state-danger)' },
];

const spacingTokens = ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16'];
const radiusTokens = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];
const motionTokens = [
  { name: '--ds-duration-fast', value: '120ms' },
  { name: '--ds-duration-normal', value: '180ms' },
  { name: '--ds-duration-slow', value: '240ms' },
  { name: '--ds-ease-standard', value: 'cubic-bezier(0.2, 0, 0, 1)' },
];

const meta = {
  title: 'Design System/Foundation/Tokens',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => ({
    setup() {
      return { colorTokens };
    },
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <div class="ds-stack" style="--ds-stack-gap: var(--ds-space-6)">
            <div>
              <h1 class="ds-heading ds-heading--1">Color tokens</h1>
              <p class="ds-text ds-text--secondary">Semantic tokens adapt when the Storybook theme toolbar changes.</p>
            </div>
            <div class="ds-grid ds-grid--auto" style="--ds-grid-gap: var(--ds-space-4); --ds-grid-min: 14rem">
              <section v-for="token in colorTokens" :key="token.name" class="ds-card ds-card--sm">
                <div class="app-token-swatch" :style="{ background: token.value }"></div>
                <div class="ds-stack" style="--ds-stack-gap: var(--ds-space-1)">
                  <strong class="ds-text ds-text--sm ds-text--primary ds-text--medium">{{ token.name }}</strong>
                  <span class="ds-text ds-text--xs ds-text--muted">{{ token.value }}</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    `,
  }),
};

export const SpacingRadiusMotion: Story = {
  render: () => ({
    setup() {
      return { spacingTokens, radiusTokens, motionTokens };
    },
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <div class="ds-grid ds-grid--auto" style="--ds-grid-gap: var(--ds-space-5); --ds-grid-min: 18rem">
            <section class="ds-card ds-card--md">
              <h2 class="ds-heading ds-heading--3">Spacing</h2>
              <div class="ds-stack" style="--ds-stack-gap: var(--ds-space-3)">
                <div v-for="space in spacingTokens" :key="space" class="app-token-row">
                  <code class="app-token-code">--ds-space-{{ space }}</code>
                  <span class="app-space-bar" :style="{ width: 'var(--ds-space-' + space + ')' }"></span>
                </div>
              </div>
            </section>
            <section class="ds-card ds-card--md">
              <h2 class="ds-heading ds-heading--3">Radius</h2>
              <div class="ds-grid" style="--ds-grid-gap: var(--ds-space-3); --ds-grid-columns: repeat(3, minmax(0, 1fr))">
                <div v-for="radius in radiusTokens" :key="radius" class="app-radius-box" :style="{ borderRadius: 'var(--ds-radius-' + radius + ')' }">
                  <code class="app-token-code">{{ radius }}</code>
                </div>
              </div>
            </section>
            <section class="ds-card ds-card--md">
              <h2 class="ds-heading ds-heading--3">Motion</h2>
              <div class="ds-stack" style="--ds-stack-gap: var(--ds-space-3)">
                <div v-for="motion in motionTokens" :key="motion.name" class="app-token-row">
                  <code class="app-token-code">{{ motion.name }}</code>
                  <span class="ds-text ds-text--sm ds-text--muted">{{ motion.value }}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    `,
  }),
};

export const Typography: Story = {
  render: () => ({
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <section class="ds-card ds-card--lg">
            <div class="ds-stack" style="--ds-stack-gap: var(--ds-space-5)">
              <div>
                <h1 class="ds-heading ds-heading--1">Typography</h1>
                <p class="ds-text ds-text--secondary">Geist is the preferred family, with resilient system fallbacks.</p>
              </div>
              <div class="ds-stack" style="--ds-stack-gap: var(--ds-space-3)">
                <h2 class="ds-heading ds-heading--2">Heading level two</h2>
                <h3 class="ds-heading ds-heading--3">Heading level three</h3>
                <p class="ds-text ds-text--lg ds-text--primary">Large body text for lead copy.</p>
                <p class="ds-text ds-text--md ds-text--secondary">Default body text for product surfaces and forms.</p>
                <p class="ds-text ds-text--sm ds-text--muted">Small supporting text for metadata, hints, and captions.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    `,
  }),
};
