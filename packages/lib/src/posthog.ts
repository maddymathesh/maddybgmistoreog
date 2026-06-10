import { PostHog } from "posthog-node";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY || "";
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

export const posthog = posthogKey
  ? new PostHog(posthogKey, { host: posthogHost })
  : null;

// Flush events on shutdown
if (posthog) {
  process.on("exit", () => {
    posthog.shutdown();
  });
}

export interface TrackParams {
  distinctId: string;
  event: string;
  properties?: Record<string, any>;
}

export function trackServerEvent({ distinctId, event, properties }: TrackParams) {
  if (!posthog) {
    return;
  }
  posthog.capture({
    distinctId,
    event,
    properties: {
      ...properties,
      $lib: "nextjs-server-monorepo",
    },
  });
}
