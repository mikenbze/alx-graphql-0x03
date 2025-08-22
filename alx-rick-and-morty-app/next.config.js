import { withSentryConfig } from "@sentry/nextjs";

const moduleExports = {
  reactStrictMode: true,
  // any other Next.js config you already had
};

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
};

export default withSentryConfig(moduleExports, sentryWebpackPluginOptions);
