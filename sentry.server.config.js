import * as Sentry from '@sentry/astro'

Sentry.init({
  enabled: import.meta.env.PROD,
  dsn: 'https://ef6cbf3196f94c6e9fb27926876ce2e0@o365110.ingest.us.sentry.io/4958029',
  // Sentry 11 collects broadly by default (user info and IP, cookies, headers,
  // bodies, query strings, stack-frame variables). Only send the error itself.
  dataCollection: {
    userInfo: false,
    cookies: false,
    httpHeaders: false,
    httpBodies: [],
    urlQueryParams: false,
    stackFrameVariables: false,
  },
})
