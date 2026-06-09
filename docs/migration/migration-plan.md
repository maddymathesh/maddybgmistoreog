# Migration Plan: V2 Rebuild Roadmap

This document outlines the roadmap, verification commands, data seed guidelines, and route completion checklists.

---

## 1. Migration Phases Checklist

### Phase 1: Base Configuration (Sentry & Turborepo Scaffolding)
- [ ] Initialize Turborepo.
- [ ] Setup TypeScript, ESLint, Prettier in workspace root.
- [ ] Configure `apps/web/` and `apps/admin/` frameworks.
- [ ] Scaffold `packages/parser`, `@mbs/db`, `@mbs/ui`, `@mbs/auth`.
- [ ] Install and deploy **Sentry** configuration wrapper (build mappings & client/server captures).

### Phase 1.5: Database First Layout Approval
- [ ] Write PostgreSQL migration scripts via `@mbs/db` Drizzle definitions.
- [ ] Set up Supabase PostgreSQL tables, indexes, and constraints.
- [ ] Set up Supabase RLS policies gated by Clerk authentication claims.
- [ ] Validate database integrity via Drizzle Kit:
  ```bash
  npx drizzle-kit generate
  npx drizzle-kit migrate
  ```
- [ ] **Review Stop**: Obtain final layout confirmation.

### Phase 2: User Roles & RBAC Setup
- [ ] Deploy Clerk auth provider and custom metadata triggers.
- [ ] Configure role mapping definitions (`SUPER_ADMIN`, `ADMIN`, etc.) in `@mbs/auth`.
- [ ] Set up layout shells and Next.js middlewares.

### Phase 3: Public Catalog Rebuild
- [ ] Ready Stocks catalog containing PostgreSQL Full-Text Search.
- [ ] UC prices catalog, X-Suit, and Supercar feeds.
- [ ] Home landing page, confetti view trackers, and reviews submission workflows.

### Phase 4: Checkout Links & Lockouts
- [ ] Secure payment links generator inside `apps/admin`.
- [ ] Checkout terminal page `/pay/[paymentId]`.
- [ ] 5-try brute-force lockout logic.

### Phase 5: Transactions Logs, CRM & Parsing Packages
- [ ] Transactions log history dashboard (Account, UC, X-suit, Supercars).
- [ ] Integrate description parser module `packages/parser`.
- [ ] Customer listings, reviews moderation tables, audit logs, and feedback panels.

### Phase 6: Final Polish & Launch
- [ ] Connect PostHog trackers, Resend alerts, and Sentry telemetries.
- [ ] Optimize load performance, image transformations, and SEO parameters.

---

## 2. Page & Route Migration Checklist

For every V1 page migrated, this checklist monitors progress to prevent lost workflows:

| V1 Page Route | V2 Page Route | Status | Missing Features | Completed Features |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `/` | Pending | - Confetti RPC view increments<br>- Hero banner slider | None |
| `/buy` | `/buy` | Pending | - Booking slider calculator<br>- F2F timeline accords | None |
| `/sell` | `/sell` | Pending | - timeline comparison tabs | None |
| `/exchange` | `/exchange` | Pending | - Midpoint location calculator | None |
| `/services/uc` | `/services/uc` | Pending | - view_login/char_id switches | None |
| `/readystocks` | `/readystocks` | Pending | - Postgres full text query<br>- YouTube video loop frames | None |
| `/pay/:paymentId` | `/pay/[paymentId]` | Pending | - PIN entry shaken feedback<br>- 5-try lockout trigger | None |
| `/admin` | `/` (Admin Site) | Pending | - Reviews approval cards<br>- Payment links generator<br>- WhatsApp description maker | None |
| `/transactions` | `/transactions` | Pending | - Logs lists & details<br>- Insights stats charts | None |

---

## 3. Data Seeding Strategy

To safely transfer V1 catalog assets to V2, we will use a migration seed script:
1. Export active records from V1 Supabase (`products`, `uc_prices`, `xsuit_gifts`, `supercar_gifts`, `proofs`) as JSON files.
2. Build a seeding script inside `@mbs/db` (`packages/db/src/seed.ts`):
   - Clears catalog target tables in V2.
   - Inserts exported JSON objects using Drizzle.
3. Validate and run using:
   ```bash
   npm run db:seed
   ```

---

## 4. Rollback & Fail-Safe Strategy

In the event of critical system anomalies:
- **Zero-Downtime DNS Swap**: V1 and V2 are hosted on separate Next.js Vercel domains. The primary domain (`maddybgmistore.in`) points to V1. Upon migration completion and validation, Cloudflare DNS is swapped to V2. If a rollback is needed, DNS records are immediately swapped back to V1.
- **Database Safety**: V1 Supabase database instance is kept active in a read-only state. V2 migrations run on a separate, dedicated production Supabase database.
