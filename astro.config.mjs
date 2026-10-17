// @ts-check
import {defineConfig} from 'astro/config'

import sentry from '@sentry/astro'

// https://astro.build/config
export default defineConfig({
  // Don't send the Sentry build plugin's own usage telemetry.
  integrations: [sentry({telemetry: false})],
})
