import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";
import ErrorBoundary from "@/components/ErrorBoundary";

// ✅ Import Sentry
import * as Sentry from "@sentry/nextjs";

// ✅ Initialize Sentry (only if DSN is provided)
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1.0, // adjust if needed
    replaysSessionSampleRate: 0.1, // optional: enable session replay
    replaysOnErrorSampleRate: 1.0,
  });
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  );
}
