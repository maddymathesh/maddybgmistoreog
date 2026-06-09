# Page & Component Inventory

This document maps V1 pages and layouts to their V2 Next.js App Router equivalents. It defines the layout structure, interactive states, and client/server component separations.

---

## 1. Shared Layouts & Shells

### Navigation Bar
- **V1 Source**: `frontend/src/components/Navbar.jsx`
- **V2 Target**: `apps/web/src/components/navigation/Navbar.tsx` (and `apps/admin/src/components/navigation/Navbar.tsx`)
- **Key Mechanics**: Animated link borders, logo scaling, mobile collapsible menus, active route detections, and Clerk UserButton integration for authenticated session states.

### Footer
- **V1 Source**: `frontend/src/components/Footer.jsx`
- **V2 Target**: `apps/web/src/components/navigation/Footer.tsx`
- **Key Mechanics**: Quick links, social emblems, copyrights, and direct links to policies (Privacy, Refund, Terms).

---

## 2. Public Pages (`apps/web`)

### Home Page
- **V1 Source**: `frontend/src/pages/Home.jsx`
- **V2 Target**: `apps/web/app/page.tsx`
- **Interactive Elements**:
  - Site view count milestone popup (checks multiples of 10, launches golden confetti).
  - High-tier hero banner carousel and features grid.
  - Testimonial highlights section.

### Buying roadmap Page
- **V1 Source**: `frontend/src/pages/Buy.jsx`
- **V2 Target**: `apps/web/app/buy/page.tsx`
- **Interactive Elements**:
  - Interactive Tab selection for Ready-to-Play, Market Available, Sourced.
  - Interactive Booking slider calculator (calculates 10% fee and balance).
  - Multi-tab timelines detailing F2F meetups and Escrows.

### Selling roadmap Page
- **V1 Source**: `frontend/src/pages/Sell.jsx`
- **V2 Target**: `apps/web/app/sell/page.tsx`
- **Interactive Elements**:
  - Interactive timelines comparing Hold & Sell vs. Instant Payout.
  - Expandable panels for F2F handovers, KYC guidelines, and Payout guides.

### Exchange Page
- **V1 Source**: `frontend/src/pages/Exchange.jsx`
- **V2 Target**: `apps/web/app/exchange/page.tsx`
- **Interactive Elements**:
  - Select options for Upgrade vs. Downgrade.
  - Midpoint location calculator based on South India city boundaries.

### Ready Stocks Catalog
- **V1 Source**: `frontend/src/pages/ReadyStocks.jsx`
- **V2 Target**: `apps/web/app/readystocks/page.tsx`
- **Interactive Elements**:
  - Sticky filters (search query, tier categories, availability status).
  - Product stock cards containing YouTube video preview frames.
  - Login-gated price/contact badges.

### UC Purchase Page
- **V1 Source**: `frontend/src/pages/services/UCPurchase.jsx`
- **V2 Target**: `apps/web/app/services/uc/page.tsx`
- **Interactive Elements**:
  - Tab selector: View Login vs. Character ID packs.
  - Pack grids with real-time offer price badges and WhatsApp/Telegram links.

### X-Suit & Supercar Catalog Pages
- **V1 Source**: `frontend/src/pages/services/XsuitGift.jsx` & `SupercarGift.jsx`
- **V2 Target**: `apps/web/app/services/xsuit/page.tsx` & `/services/supercar/page.tsx`
- **Interactive Elements**:
  - Dynamic catalogs fetched from Supabase, linking directly to messaging supports.

### Reviews Page
- **V1 Source**: `frontend/src/pages/Reviews.jsx`
- **V2 Target**: `apps/web/app/reviews/page.tsx`
- **Interactive Elements**:
  - Star ratings average calculator.
  - Submissions dialog popup allowing reviews text and ratings inputs.

### Proofs & Feedback Page
- **V1 Source**: `frontend/src/pages/ProofAndFeedback.jsx`
- **V2 Target**: `apps/web/app/proofs/page.tsx`
- **Interactive Elements**:
  - Chronological proof photo grids grouped by Month & Year filters.

### Payment Checkout Terminal
- **V1 Source**: `frontend/src/pages/PaymentPage.jsx`
- **V2 Target**: `apps/web/app/pay/[paymentId]/page.tsx`
- **Interactive Elements**:
  - PIN Input pad (4-6 digits).
  - Shake animations and brute-force lockout messages (5 wrong attempts).
  - UPI ID copy button, Dynamic UPI QR Code, and Bank transfer specs card.
  - Expiration timer countdown (active timer).

---

## 3. Admin Pages (`apps/admin`)

### Main Admin Dashboard
- **V1 Source**: `frontend/src/pages/admin/Dashboard.jsx` (Massive monolithic component)
- **V2 Target**: Separated into multiple page components inside `apps/admin/app/`:
  - `app/page.tsx`: Overview stats and dynamic panels.
  - `app/products/page.tsx`: Manage stock products (availabilities, videos, categories).
  - `app/reviews/page.tsx`: Moderate reviews (approve/reject pending submissions).
  - `app/proofs/page.tsx`: Upload deal screenshots to Cloudinary CDN.
  - `app/catalog/page.tsx`: Manage UC price tables, X-Suits, and Supercar inventories.
  - `app/payment-links/page.tsx`: Generate secure PIN checkout URLs.
  - `app/payment-settings/page.tsx`: Manage UPI ID and Bank configurations.
  - `app/desc-maker/page.tsx`: Intelligent description maker tool.

### Transaction Panel (Sub-Dashboard)
- **V1 Source**: `frontend/src/pages/Transactions/index.jsx` (Gated by a local state PIN)
- **V2 Target**: Integrated under `apps/admin/app/transactions/` gated by Clerk 2FA:
  - `/transactions`: History list, financial summary, and customer list.
  - `/transactions/create`: Forms to record transactions (Accounts, UC, X-suit, Supercar).
  - `/transactions/insights`: Inventory metrics and transaction counts.
  - `/transactions/audit-log`: Historical changes log.
