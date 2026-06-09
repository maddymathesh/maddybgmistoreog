# Integration Specifications

This document outlines the third-party integrations, credential scopes, API configurations, and webhook handling rules for V2.

---

## 1. Authentication: Clerk
- **Purpose**: Handles user authentication, session state management, and role-based permissions (RBAC).
- **V2 Configuration**:
  - Gated login routes: `/login` redirects to Clerk's `<SignIn />` modal.
  - Clerk metadata handles role mapping:
    - User profile metadata includes: `role: 'SUPER_ADMIN' | 'ADMIN' | 'TRANSACTION_MANAGER' | 'CONTENT_MANAGER' | 'USER'`.
  - Next.js middleware gates `/pay/[paymentId]` (public) and `/admin` routes.
- **Webhook Sync**: Clerk Webhooks (`user.created` / `user.deleted`) sync profiles into the local `profiles` PostgreSQL table for fast lookup.

---

## 2. Database & ORM: Supabase PostgreSQL & Drizzle ORM
- **Purpose**: Relational storage, Full-Text Search index, RLS policy gates, and site view milestone increments.
- **Connection**: Database pooling using Drizzle ORM over Connection Pooling (`transaction` mode on port `6543`).
- **Row-Level Security (RLS)**:
  - Public read enabled on products, reviews, and proofs catalogs.
  - Write privileges restricted to Clerk authenticated administrators matching custom metadata roles.
  - Transactions table gated strictly to `SUPER_ADMIN` and `TRANSACTION_MANAGER`.

---

## 3. Remote CDNs: Cloudinary
- **Purpose**: Dynamic image hosting and optimization for review screenshots and transaction proofs.
- **Folders Configuration**:
  - Review attachments upload preset: `mbs_reviews` -> `reviews/` folder.
  - Deal proofs upload preset: `mbs_proofs` -> `payment-proofs/` folder.
- **Secure Handovers**: Client upload requests are signed securely by a Next.js Server Action to prevent unauthorized image injections.

---

## 4. Monitoring: Sentry
- **Purpose**: Captures build errors, runtime exceptions, full-stack trace reports, and payment link lockout triggers.
- **Setup (Phase 1)**: Set up Sentry using the Next.js SDK wizard:
  - Client side: Captures JS rendering exceptions.
  - Server side: Tracks route handler timeout errors, incorrect PIN lockout thresholds, and database connection pools.

---

## 5. Analytics: PostHog
- **Purpose**: User behavior monitoring, page view milestones telemetry, and catalog filter event tracking.
- **Key Actions Recorded**:
  - `ready_stocks_searched` (tracks queried keywords).
  - `checkout_accessed` (tracks unique payment link clicks).
  - `payout_quarantine_created` (tracks unlinking logs).

---

## 6. Email Alerts: Resend
- **Purpose**: Disbursing notifications to admins upon critical events.
- **Key Workflows**:
  - Alerts when a payment link is revoked due to 5 failed PIN attempts.
  - Notification when customer feedback is submitted.
  - Verification codes for administrative accounts.
