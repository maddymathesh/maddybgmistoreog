# Feature Inventory

This catalog lists the standalone interactive features of the Maddy BGMI Store, explaining their original implementation and how they are upgraded in V2.

---

## 1. Golden Confetti Milestones Celebration
- **Original V1**: Triggers on the home page loading. Atomically increments site views via a Supabase RPC (`increment_views`). If the view count is a multiple of 10, a custom HTML Canvas is mounted in the body, firing a GSAP-like animation of golden particles. A dialog is shown: *"Congratulations! You are visitor number X..."*
- **V2 Upgrades**: Re-implement using React 20 server actions and a client canvas. The trigger logic will run atomically in a database transaction, keeping milestone checks accurate.

---

## 2. YouTube Embed Auto-Previewer
- **Original V1**: In `ReadyStocks.jsx`, an iframe embeds the product overview video. The `getEmbed` utility parses Youtube URLs matching `youtu.be` or `youtube.com/watch` formats, and converts them to:
  `https://www.youtube-nocookie.com/embed/{id}?autoplay=1&mute=1&playsinline=1&loop=1&playlist={id}`
- **V2 Upgrades**: Move parsing rules to `packages/lib` and implement a React Suspense skeletal fallback frame. The frame will play inline looping previews when hovering on cards.

---

## 3. Secure payment link PIN Lockout Gateway
- **Original V1**: Admin creates a pay link with a 4-6 digit PIN. When users open `/pay/:id`, they must enter this PIN. Firebase Functions validation counts failed attempts. Upon reaching 5 failures, the link's status is written as `revoked` (lockout active).
- **V2 Upgrades**: The lockout gateway is built into the Next.js Route Handler/Server Action. Failed attempts are updated atomically in the Supabase `payment_links` table. Once blocked, RLS denies access, returning `status: 'revoked'`. Sentry logs any brute-force attempts instantly.

---

## 4. UPI QR Code Generator
- **Original V1**: Generates a standard UPI payment URL link:
  `upi://pay?pa={upiId}&pn={payeeName}&am={amount}&tr={orderId}`
  This URL is converted to a QR code on the payment page for easy mobile scanning.
- **V2 Upgrades**: Upgraded in V2 using an SVG QR generator component to support faster load times, avoiding raw external CDN canvas dependencies.

---

## 5. BGMI Description Maker & Factory
- **Original V1**: In `Dashboard.jsx`, admins paste raw account lists (e.g. *ignis xsuit lvl 4, m416 glacier lvl 1*). An regex-based parser extracts variables: level, mythic count, upgraded gun labs, supercars. It formats them into a bolded text payload (e.g., `*👑Mythic Fashion - (100/100)*`) with WhatsApp click-to-chat links.
- **V2 Upgrades**: Extracted into a dedicated `packages/parser` module. Supports modular parser rules, unit tests, and real-time interactive previews simulating how the formatted text will render on WhatsApp and Telegram.

---

## 6. Client Receipt Generator & Encryption
- **Original V1**: Built-in clients can export transaction details into a PDF using `pdf-lib` and `pdf-encrypt-lite`, secure-locking the file with the customer's phone number as the password.
- **V2 Upgrades**: Move PDF rendering and secure locking to a server-side route handler using `pdf-lib`. This secures receipt processing on the server, sending the final locked file directly to the client's browser.
