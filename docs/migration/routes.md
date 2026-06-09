# Route Inventory: V1 to V2 Path Mapping

The V2 application separates routes into two distinct deployment sites inside a Turborepo monorepo:
1. **Public Portal (`apps/web` / `maddybgmistore.in`)**
2. **Admin Portal (`apps/admin` / `admin.maddybgmistore.in`)**

---

## 1. Public Portal Routes (`apps/web`)

| V1 Path | V2 Next.js App Router Path | Target Component / Layout | Description |
| :--- | :--- | :--- | :--- |
| `/` | `/` | `app/page.tsx` | Landing page (Hero banner, visual views increment milestone, reviews highlight). |
| `/buy` | `/buy` | `app/buy/page.tsx` | Buying roadmap options, interactive booking fee calculator, and F2F/Escrow guidelines. |
| `/sell` | `/sell` | `app/sell/page.tsx` | Selling roadmap options, interactive payout guides, and KYC/F2F guidelines. |
| `/exchange` | `/exchange` | `app/exchange/page.tsx` | Account exchange options (Upgrade vs. Downgrade), midpoint calculators, and steps. |
| `/services/uc` | `/services/uc` | `app/services/uc/page.tsx` | UC Sourcing prices catalog (View Login vs. Character ID packs) and contact buttons. |
| `/services/xsuit` | `/services/xsuit` | `app/services/xsuit/page.tsx` | X-Suit catalogs and purchase parameters. |
| `/services/supercar` | `/services/supercar` | `app/services/supercar/page.tsx` | Supercar catalogs and purchase parameters. |
| `/readystocks` | `/readystocks` | `app/readystocks/page.tsx` | Available BGMI accounts catalog listing. Login-gated pricing & contact support actions. |
| `/reviews` | `/reviews` | `app/reviews/page.tsx` | Approved customer reviews list and review submission form. |
| `/proofs` | `/proofs` | `app/proofs/page.tsx` | Transaction proof screenshots feed grouped by month/year. |
| `/connectwithus` | `/connectwithus` | `app/connectwithus/page.tsx` | Social platforms links page. |
| `/terms` | `/terms` | `app/terms/page.tsx` | Terms & Conditions document page. |
| `/privacy` | `/privacy` | `app/privacy/page.tsx` | Privacy Policy document page. |
| `/refunds` | `/refunds` | `app/refunds/page.tsx` | Refund Policy document page. |
| `/faq` | `/faq` | `app/faq/page.tsx` | Frequently Asked Questions. |
| `/feedback` | `/feedback` | `app/feedback/page.tsx` | Standalone customer feedback submission portal. |
| `/f2f-deal` | `/guides/f2f-deal` | `app/guides/f2f-deal/page.tsx` | Face-to-Face deal system guidelines and midpoint locator. |
| `/escrow-deal` | `/guides/escrow-deal` | `app/guides/escrow-deal/page.tsx` | Escrow deal system rules. |
| `/booking-system` | `/guides/booking-system` | `app/guides/booking-system/page.tsx` | 10% non-refundable booking policy guidelines. |
| `/f2f-sell-guide` | `/guides/f2f-sell-guide` | `app/guides/f2f-sell-guide/page.tsx` | Face-to-Face selling requirements and midpoint locator. |
| `/no-returns-policy`| `/guides/no-returns` | `app/guides/no-returns/page.tsx` | Handover finality policy page. |
| `/kyc-guide` | `/guides/kyc` | `app/guides/kyc/page.tsx` | KYC & identity verification requirements. |
| `/payout-guide` | `/guides/payout` | `app/guides/payout/page.tsx` | Payout methods details (Scenarios A & B). |
| `/unlinking-guide` | `/guides/unlinking` | `app/guides/unlinking/page.tsx` | Account unlinking procedures guide. |
| `/pay/:paymentId` | `/pay/[paymentId]` | `app/pay/[paymentId]/page.tsx` | PIN-gated secure checkout terminal. Lockout logic redirects to revoked. |

---

## 2. Admin Portal Routes (`apps/admin`)

Access to these routes requires a Clerk user account possessing the appropriate role claims (`SUPER_ADMIN`, `ADMIN`, `TRANSACTION_MANAGER`, `CONTENT_MANAGER`).

| V1 Path | V2 Next.js App Router Path | Target Page Component | Gated Role Access | Description |
| :--- | :--- | :--- | :--- | :--- |
| `/admin` | `/` | `app/page.tsx` | `SUPER_ADMIN`, `ADMIN`, `CONTENT_MANAGER` | Main catalog management dashboard (Products, Reviews, Proofs, UC catalog, Xsuit, Supercars, admin payment settings, generated payment links). |
| `/transactions` | `/transactions` | `app/transactions/page.tsx` | `SUPER_ADMIN`, `TRANSACTION_MANAGER` | Unified Transaction logs, product insights, customer CRM databases, audit activity history logs, and financial overview metrics. (PIN authentication removed in favor of Clerk 2FA). |
| N/A | `/audit-logs` | `app/audit-logs/page.tsx` | `SUPER_ADMIN` | Separate admin log dashboard showing action audits (e.g. who updated pricing, who deleted logs). |

---

## 3. Authentication Routing (Clerk)

Clerk controls authentications automatically via middleware.

| Operational Flow | V2 Path | Description |
| :--- | :--- | :--- |
| **Sign In** | `/sign-in` | Standard Clerk SignIn component styled for premium dark theme. |
| **Sign Up** | `/sign-up` | Standard Clerk SignUp component. |
| **Auth Callback** | `/auth-callback` | Handles synchronizing Clerk metadata with database variables upon new signups. |
