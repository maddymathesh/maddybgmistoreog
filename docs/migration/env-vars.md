# Environment Variables Mapping

This document lists the environment variables used in V2. It maps the original V1 (Vite/React) variables to their V2 (Next.js) equivalents.

---

## 1. Public Environment Variables (Prefixed with `NEXT_PUBLIC_`)

These variables are exposed to the browser client.

| V1 Variable | V2 Variable | Purpose |
| :--- | :--- | :--- |
| `VITE_SUPABASE_URL` | `NEXT_PUBLIC_SUPABASE_URL` | Supabase API connection URL. |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Anonymous publishable API key. |
| `VITE_CLOUDINARY_CLOUD_NAME` | `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary asset cloud name. |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | `NEXT_PUBLIC_CLOUDINARY_PRESET` | Cloudinary preset folder selector. |
| N/A | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`| Clerk public credentials identifier. |
| N/A | `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Path redirect for Clerk Sign-In (e.g. `/sign-in`). |
| N/A | `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Path redirect for Clerk Sign-Up (e.g. `/sign-up`). |
| N/A | `NEXT_PUBLIC_POSTHOG_KEY` | PostHog client API key. |
| N/A | `NEXT_PUBLIC_POSTHOG_HOST` | PostHog host URL (e.g. `https://us.i.posthog.com`). |

---

## 2. Server-Only Environment Variables (Secure Backend Keys)

These variables are restricted to the Next.js server runtime and route handlers. They must never be exposed to the client.

| V1 Variable | V2 Variable | Purpose |
| :--- | :--- | :--- |
| `VITE_SUPABASE_ADMIN_TOKEN` | `SUPABASE_SERVICE_ROLE_KEY` | Service role key for admin privileges and bypassing RLS. |
| `VITE_APPS_SCRIPT_API_KEY` | `APPS_SCRIPT_API_KEY` | Security token shared with Apps Script if Google Sheet exports are enabled. |
| `VITE_GOOGLE_SCRIPT_URL` | `GOOGLE_SCRIPT_URL` | Google Apps Script macro endpoint URL. |
| `VITE_ADMIN_UID` (Firebase UID) | N/A (Migrated) | Replaced by Clerk roles system. |
| `VITE_ADMIN_UID_2` (Firebase UID)| N/A (Migrated) | Replaced by Clerk roles system. |
| N/A | `CLERK_SECRET_KEY` | Clerk server configuration secret. |
| N/A | `CLERK_WEBHOOK_SECRET` | Secret key to verify incoming Clerk user synchronization webhooks. |
| N/A | `RESEND_API_KEY` | Resend mail sender API authorization key. |
| N/A | `RESEND_FROM_EMAIL` | Email address from which Resend alerts are dispatched. |
| N/A | `SENTRY_AUTH_TOKEN` | Sentry build-time source map upload authentication token. |
| N/A | `INNGEST_SIGNING_KEY` | Inngest event processor signing key. |
| N/A | `DATABASE_URL` | Database direct connection URI for Drizzle ORM migrations. |
| N/A | `DATABASE_URL_POOLED` | Database pooled connection URI for high-frequency queries. |
