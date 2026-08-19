// AutoWaba build log.
//
// Derived from the AutoWaba repository's own commit history (first commit
// 2025-12-19, 908 commits through 2026-08-18). Entries are grouped into
// release phases and, inside each phase, into the area of the product they
// touched — so the log reads as a story instead of a raw commit dump.
//
// When you ship a new phase: add it to the TOP of `buildLogPhases`, bump
// `buildLogMeta.latestUpdate` and `buildLogMeta.totalCommits`.

export const buildLogMeta = {
  project: "AutoWaba",
  projectUrl: "https://autowaba.autotechify.com",
  started: "2025-12-19",
  latestUpdate: "2026-08-18",
  totalCommits: 908,
};

// The areas of the product. Order here is the order of the filter chips.
export const buildLogAreas = [
  { id: "inbox", label: "Inbox & Chat" },
  { id: "chatbot", label: "Chatbot & AI" },
  { id: "campaigns", label: "Campaigns" },
  { id: "calling", label: "Calling & IVR" },
  { id: "contacts", label: "Contacts & Templates" },
  { id: "commerce", label: "Commerce" },
  { id: "mobile", label: "Mobile" },
  { id: "platform", label: "Platform & Infra" },
  { id: "security", label: "Security" },
  { id: "admin", label: "Admin & Billing" },
];

export const areaLabel = (id) =>
  buildLogAreas.find((a) => a.id === id)?.label ?? id;

export const buildLogPhases = [
  {
    id: "one-tree-two-editions",
    period: "August 2026",
    range: "2026-08-01 → 2026-08-18",
    title: "One tree, two editions",
    status: "Current",
    summary:
      "AutoWaba had quietly grown four branches — cloud, self-hosted, mobile, and a payments experiment. This phase collapsed all of them into a single tree that builds every product from one tag, and added the licensing that makes a self-hosted edition sellable.",
    groups: [
      {
        area: "platform",
        title: "Collapsing four branches into one",
        items: [
          "Merged the Capacitor Android app onto the main line and retired the mobile branch.",
          "Merged the self-hosted branch back in, green, and retired it too.",
          "Introduced an edition seam so cloud and self-hosted build from one tree instead of diverging codebases.",
          "Split the frontend by edition at build time — each product ships only the UI it should have.",
          "Moved license signing and verification into one package: one signer, one verifier.",
          "Gave \"am I running natively?\" a single home instead of scattered platform checks.",
          "Retargeted the release pipeline: one tag now produces two Docker images and an Android APK.",
          "Stamped the deployed version into production images so a running box can say what it is.",
        ],
      },
      {
        area: "admin",
        title: "Making self-hosted shippable",
        items: [
          "Built the customer bundle with an updater and a rollback guard, so a bad update can be backed out.",
          "Let the bundle install and run beside an existing install instead of colliding with it.",
          "Capped WhatsApp numbers inside self-hosted licenses, and rotated the vendor signing key.",
          "Capped WhatsApp numbers per organization in billing, with test coverage on the admin panel.",
          "Fixed the admin panel showing every amount in one currency — each now shows in its own.",
        ],
      },
      {
        area: "chatbot",
        title: "Memory that actually remembers",
        items: [
          "Sticky-note memory now triggers on any incoming message, not only ones the AI replied to.",
          "Decoupled memory and auto-tagging from the AI auto-reply toggle — you can have one without the other.",
          "The chatbot now understands media, applies multiple tags, and builds tag-filtered lists.",
        ],
      },
      {
        area: "mobile",
        title: "Mobile",
        items: [
          "The app asks for the server address on first run instead of having it compiled in.",
          "Transcode incompatible video codecs and serve media with byte-range support, so video plays inline.",
        ],
      },
    ],
  },
  {
    id: "commerce-and-payments",
    period: "July 2026",
    range: "2026-07-01 → 2026-07-29",
    title: "Commerce, calling reliability, and getting paid",
    summary:
      "The month after launch was about turning a working product into a business: live checkout, an orders module, per-organization limits, and a calling stack that stopped dropping audio. It ended with AutoCampaign — describe a campaign, upload a flyer, let the AI write the template.",
    groups: [
      {
        area: "calling",
        title: "Chasing down the WebRTC gremlins",
        items: [
          "Switched to host networking for reliable WebRTC and persistent audio.",
          "Restricted ICE candidate gathering to the default-route interface.",
          "Upgraded pion to fix intermittent DTLS `unknown_ca` failures mid-call.",
          "Reused one DTLS certificate across all calls instead of minting one per call.",
          "Only accept a call once WebRTC has actually connected; fast-fail on a rejected handshake.",
          "Ring agents on incoming calls even when no IVR flow is configured.",
          "Decrypt account secrets inside the calling endpoints — calls were failing on encrypted credentials.",
        ],
      },
      {
        area: "commerce",
        title: "Orders and catalogue",
        items: [
          "Added the orders module and the full set of catalogue product fields.",
          "Display catalogue order messages in chat and let an order trigger a chatbot flow.",
          "Resolve product names for the chat order card instead of showing bare IDs.",
          "Shopify bill delivery now includes line items in the WhatsApp message.",
          "Stopped a malformed order message from blanking the whole conversation.",
        ],
      },
      {
        area: "admin",
        title: "Plans, limits, and the admin panel",
        items: [
          "Per-organization feature gating for calling, chatbot, and campaigns.",
          "Per-organization user seat caps.",
          "An admin panel to manage org expiry and seats, and to issue self-hosted licenses.",
          "Replaced Dodo Payments with Polar as merchant of record.",
          "Marketing site with live two-plan pricing and a checkout that survives network failures.",
        ],
      },
      {
        area: "campaigns",
        title: "AutoCampaign, and campaigns at scale",
        items: [
          "AutoCampaign: upload a flyer, and the AI template prompt is grounded in what the flyer actually says.",
          "The campaign survives a browser disconnect mid-way through Meta submission.",
          "Fixed header media being rejected before its upload finished, and then never attached at all.",
          "Kept the uploaded flyer's name and made drafts editable.",
          "Scaled bulk delivery for many organizations sending concurrently, with a scaling runbook and a health script.",
          "Gave workers unique consumer IDs across host-networked replicas; reclaimed legacy-stream pending messages and pruned abandoned consumers.",
          "Clean up contacts sitting behind permanently failing sends.",
        ],
      },
      {
        area: "mobile",
        title: "The Android app grows up",
        items: [
          "Made WebSocket work inside the Android WebView — real-time now works on mobile.",
          "Open the app on the sign-in page rather than the marketing site.",
          "Blue app icon, gradient splash with an elevated logo tile, and a fix for the Android 12+ system splash.",
          "WhatsApp-style mobile composer, conversations persisted to device storage for instant cold start, and background prefetch of recent threads.",
          "Voice notes: timestamps rebased and regenerated from sample count, bitrate raised, auto gain control on capture.",
          "Push notifications reach admins for every incoming message, even on assigned chats.",
        ],
      },
      {
        area: "chatbot",
        title: "Flow builder",
        items: [
          "Media steps can send image, document, audio, and video — and save without a file attached.",
          "Unused flow media files are deleted when no step references them.",
          "WhatsApp Flow form fields are surfaced as variables inside the builder.",
          "Each step gets its own buttons and configs instead of sharing them.",
          "Keyboard delete on the canvas actually removes a step; deleting a connection persists as a terminal end.",
          "Step naming, rename propagation, and canvas polish.",
        ],
      },
      {
        area: "contacts",
        title: "Import and templates",
        items: [
          "Data import accepts Excel `.xlsx` files alongside CSV.",
          "Publish named-variable templates with sample values, as Meta requires.",
          "Surface Meta's real token-expiry error on media upload instead of a generic failure.",
        ],
      },
      {
        area: "platform",
        title: "Developer experience",
        items: [
          "An in-app API documentation page for integrators, plus a tested API quickstart.",
          "Make targets to redeploy the API and the workers separately.",
          "Tests refuse to run against any database not named `*_test` — after one close call.",
        ],
      },
    ],
  },
  {
    id: "autowaba-launch",
    period: "May – June 2026",
    range: "2026-05-17 → 2026-06-30",
    title: "The AutoWaba turn — BSP chaining, catalogue AI, and launch",
    status: "Launched 16 June 2026",
    summary:
      "This is where the platform became AutoWaba. The defining decision: you shouldn't have to rip out your existing CRM to try it. Webhook fanout forwards every raw Meta payload, signed, to whatever you're already running — so both systems stay in sync. Embedded Signup, per-number scoping, an AI catalogue assistant, and an Android app landed alongside it.",
    groups: [
      {
        area: "platform",
        title: "Run it beside your existing CRM",
        items: [
          "Webhook fanout forwards Meta payloads to a third-party BSP — the feature that makes running two systems side by side possible.",
          "Per-organization raw Meta webhook forwarding as its own `meta.raw` event, byte-for-byte and signed.",
          "Removed the legacy global forwarding config in favour of the per-org one.",
          "Per-account auto-forwarding of incoming messages to a chosen number.",
          "WhatsApp Embedded Signup with phone-number management — connect a real Meta portfolio without the manual dance.",
        ],
      },
      {
        area: "inbox",
        title: "One inbox, many numbers",
        items: [
          "Per-number inbox filter on the conversation list.",
          "Keyword rules, AI contexts, and chatbot flows are each scoped per WhatsApp number.",
          "Per-number chatbot settings with a shared default to fall back on.",
          "Switching contacts reuses the chat view instead of remounting it, and an incoming message updates one contact in place — the list no longer jumps or resets your scroll.",
          "Bound the WebSocket token to the org you've actually switched into.",
        ],
      },
      {
        area: "commerce",
        title: "Catalogue and the AI assistant",
        items: [
          "WhatsApp catalogue management module.",
          "Fixed catalogue operations to use the Business Portfolio ID rather than the WABA ID.",
          "Require a product image URL and surface Meta's real catalogue errors.",
          "AI catalogue assistant using retrieve-then-ground, so it answers from your actual products — and can be switched off.",
          "Per-account Shopify bill-delivery integration.",
        ],
      },
      {
        area: "chatbot",
        title: "AI that keeps context",
        items: [
          "AI conversation memory, and a fix for the duplicate message in history.",
          "Process incoming image and voice messages with AI, not just text.",
          "Updated Gemini models to the current 3.x line and tuned generation settings.",
          "Fixed trigger keywords on an AI context being ignored at runtime.",
        ],
      },
      {
        area: "contacts",
        title: "Contacts you can trust",
        items: [
          "Contact import and export.",
          "Deduplication in the contact list — including the same number stored with and without a country code.",
          "Contact lists, a campaign contact picker, and better error UX.",
          "Infinite scroll and select-all in the contact list picker.",
          "Surface Meta's real rejection reason when a template or flow fails to publish.",
        ],
      },
      {
        area: "mobile",
        title: "An Android app appears",
        items: [
          "Capacitor Android wrapper around the app.",
          "Mobile-friendly chat, branded icon and splash, seamless launch.",
          "FCM push notifications for new inbound messages, backend and client.",
          "Push priority raised to HIGH, send outcomes logged, and soft-deleted device tokens revived on re-registration.",
          "Hardware back button no longer exits the app from a chat.",
        ],
      },
      {
        area: "security",
        title: "Security and accounts",
        items: [
          "Removed the hardcoded default admin credentials.",
          "Restricted SSO settings endpoints to super admins.",
          "Require a Meta Verified Business Portfolio screenshot at registration.",
          "Super-admin organization lifecycle: suspend, delete, restore — and a fix for the FK violations that blocked a permanent purge.",
          "Friendly conflict errors on accounts, plus public legal pages.",
        ],
      },
      {
        area: "admin",
        title: "First revenue plumbing",
        items: [
          "Dodo Payments self-serve checkout with automatic provisioning.",
          "Plan renewal and super-admin expiry display.",
          "New blue Autowaba branding across logo, favicon, and login page.",
        ],
      },
    ],
  },
  {
    id: "detail-pages-and-hardening",
    period: "April 2026",
    range: "2026-04-01 → 2026-04-28",
    title: "Detail pages, template depth, and a security pass",
    summary:
      "Every list view got a real detail page behind it, with an audit trail attached. Templates grew up to match what the Meta API actually supports — every button type, authentication templates, variable validation. And the API got a proper rate limiter.",
    groups: [
      {
        area: "campaigns",
        title: "Campaign detail page",
        items: [
          "Campaign detail page with recipients, media upload, actions, and a progress bar.",
          "Recipient validation with audit logging, and a Start button that stays disabled until there are recipients.",
          "Fixed recipient parsing, media cleanup, real-time updates, and the CSV name column.",
          "Collapsible recipients list, media preview, and a toast offset that stopped covering the actions.",
        ],
      },
      {
        area: "contacts",
        title: "Templates that match the Meta spec",
        items: [
          "Flow button support across template sync, creation, and sending.",
          "VOICE_CALL and OTP button types, plus general template editing improvements.",
          "Proper authentication template support per the Meta API spec.",
          "Sample values UI for template variables, with preview.",
          "Validation for mixed positional and named variables, duplicates, and edge-position variables.",
          "Marketing opt-out handling, BSUID webhook fields, and Recipient-based sending.",
          "62 missing i18n keys added across accounts, campaigns, teams, templates, keywords, and AI contexts.",
        ],
      },
      {
        area: "platform",
        title: "Detail pages everywhere",
        items: [
          "Detail views for users, roles, webhooks, and API keys, each with its own audit log.",
          "An audit logs UI with user, action, and resource filters.",
          "Activity log tabs inside settings and chatbot settings.",
          "Extracted a shared `useSearchPagination` composable out of ten list views, and a shared `useDateRange` from four.",
          "Replaced `interface{}` with `any` across the backend and cleared the linter warnings.",
          "Relationship-manager routing, and a dedicated backend test-coverage push.",
        ],
      },
      {
        area: "security",
        title: "Security pass",
        items: [
          "Global per-user rate limiting on all API routes.",
          "Verify the webhook signature before processing any field type, not just messages.",
          "Require explicit CORS origins in production.",
          "Wrap JavaScript action URLs in redirect tokens.",
          "Handle a `GetOrCreateContact` error that could nil-pointer panic the webhook path.",
          "Upgraded Go to 1.25 and pgx to 5.9.0 for CVE-2026-33816; patched an aws-sdk EventStream DoS.",
        ],
      },
      {
        area: "calling",
        title: "Calling",
        items: [
          "Call hold and resume with instant hold-music playback.",
          "Rewrote RTP sequence and timestamps after hold music to stop one-way audio on transfer.",
          "Improved call recording reliability and error handling.",
          "Guarded against nil tracks in the audio bridge to prevent a panic.",
        ],
      },
      {
        area: "inbox",
        title: "Chat",
        items: [
          "Display WhatsApp Flow replies and outbound Flow messages instead of a bare `[Message]`.",
          "Show the CTA button on outbound WhatsApp Flow messages.",
          "Reduced duplicate API requests when switching chats, and filter messages client-side instead of re-fetching.",
        ],
      },
    ],
  },
  {
    id: "ivr-and-audit",
    period: "March 2026",
    range: "2026-03-01 → 2026-03-31",
    title: "A node editor for IVR, and an audit trail for everything",
    summary:
      "The nested IVR menu tree was replaced with a proper node-based flow editor — and the same canvas was then reused for the chatbot builder. Alongside it, an audit log system landed that records who changed what, down to individual flow steps and IVR node configs.",
    groups: [
      {
        area: "calling",
        title: "Node-based IVR",
        items: [
          "Replaced the nested menu tree with a node-based flow editor.",
          "DTMF inputs stored in context variables so HTTP steps can interpolate them.",
          "Menu retries on an invalid digit and returns `max_retries` correctly.",
          "Team and flow names shown on canvas nodes instead of raw UUIDs.",
          "Agent-initiated call transfer with hold music and IVR path improvements.",
          "Post-transfer IVR continuation with completed / no-answer branching.",
          "RTP sequence continuity maintained through hold-music playback.",
          "Timing node uses a configurable timezone rather than server local time.",
          "Post-call IVR for outgoing calls; HTTP callback hooks on the transfer node for CRM integration.",
          "Each call direction recorded separately and merged with FFmpeg.",
          "Call permission status tracking with real-time UI updates.",
        ],
      },
      {
        area: "platform",
        title: "The audit log system",
        items: [
          "Team detail page with an audit log, then the same pattern for WhatsApp accounts.",
          "Audit entries for access token and app secret changes, with the values masked.",
          "Chatbot flow audit logging that tracks steps added, removed, and modified — per field.",
          "IVR flow audit with nested config diffs in a right-hand sidebar panel.",
          "Detail pages for keyword rules and AI contexts; accounts converted to a DataTable.",
          "Sidebar reorganized into sectioned navigation.",
          "Vue Flow node editor brought to the chatbot flow builder, sharing one `FlowCanvas` with calling.",
        ],
      },
      {
        area: "contacts",
        title: "Templates and buttons",
        items: [
          "Dynamic URL button parameters when sending template messages, with example inputs in the editor.",
          "COPY_CODE button support, including handling Meta's example type on sync.",
          "Resolve button URLs in chat bubbles, and handle the example array coming back from Meta.",
          "Surface the actual Meta API error in the account test response.",
        ],
      },
      {
        area: "inbox",
        title: "Chat and UX polish",
        items: [
          "Account tabs shown based on org accounts rather than which accounts a contact happened to message.",
          "Note edit and delete buttons moved inline with the time to stop them overlapping.",
          "Confirmation dialogs, accessible icon buttons, and error states across every view.",
          "Page transitions, skeleton loaders, and micro-interactions.",
          "Status badge pulse, table row polish, avatar utilities, scroll-to-top.",
          "Unified toast usage behind a shared `useAppToast` composable.",
        ],
      },
      {
        area: "platform",
        title: "Reliability and translations",
        items: [
          "Fixed random logouts caused by a token refresh race condition.",
          "Fixed a call transfer accept race that corrupted transfer state.",
          "Scoped transfer broadcasts to teams and fixed role cache invalidation.",
          "Reusable team assignment with per-agent rotation and Redis caching.",
          "Redis TLS and username support.",
          "Tamil, Hindi, and Spanish translations, with a pass to fix regressions.",
        ],
      },
      {
        area: "security",
        title: "Security",
        items: [
          "Phone masking extracted to a shared utility and applied to call transfers.",
          "Patched a minimatch ReDoS, and bumped svgo, dompurify, and h3.",
          "Validated HTTP callback URLs against SSRF, then reverted it once the URLs were confirmed admin-configured only.",
        ],
      },
    ],
  },
  {
    id: "i18n-and-calling",
    period: "February 2026",
    range: "2026-02-01 → 2026-02-28",
    title: "Nine languages, multi-org, and the calling system",
    summary:
      "Two big things happened this month. The whole frontend was migrated to i18n, view by view. And AutoWaba learned to make and receive phone calls — WebRTC, IVR, transfers, recording, and text-to-speech, built from scratch on top of the WhatsApp calling API.",
    groups: [
      {
        area: "calling",
        title: "Calling, from nothing",
        items: [
          "WhatsApp calling system with IVR, call transfers, and outgoing calls.",
          "Text-to-speech, call permissions, and WebRTC improvements.",
          "Configurable ICE servers with TURN support — and incoming calls fixed via TURN relay.",
          "OGG audio parsing and inline DTMF detection.",
          "Call recording, an IVR call-start / enabled split, and better call logs.",
          "Per-org hold music and ringback tone upload, transcoded to OGG/Opus 48kHz mono.",
          "Piper TTS baked into the Docker image for IVR speech.",
          "Track who disconnected each call; stop the IVR greeting the instant a caller presses a digit.",
          "Fixed a concurrent transfer-accept race, duplicate transfer notifications, and slow ICE gathering.",
        ],
      },
      {
        area: "platform",
        title: "Internationalization",
        items: [
          "i18n support added, then migrated view by view: login, settings, campaigns, chatbot, analytics, dashboard.",
          "Every Meta-supported language available through a searchable combobox on templates.",
          "Crowdin wired up for translation management.",
          "Multi-organization management.",
          "Conversation notes.",
        ],
      },
      {
        area: "security",
        title: "The first security audit",
        items: [
          "Phase 1: eight critical security issues fixed in one pass.",
          "Auth tokens migrated from localStorage to httpOnly cookies.",
          "Phone masking enforced across every output channel, not just the UI.",
          "Resolved three P0 backend panics and a set of silent auth failures.",
          "Fixed additional crash, security, and deadlock bugs found in the follow-up sweep.",
        ],
      },
      {
        area: "contacts",
        title: "Contacts and templates",
        items: [
          "Contact tags, and filtering contacts by tag.",
          "Contacts CRUD with import and export.",
          "Search filters added to every list API that was missing one.",
          "Send template message flow, and 24-hour service window awareness so you know when you can't free-text.",
          "CTA URL and phone buttons handled properly, and prevented from mixing with reply buttons.",
        ],
      },
      {
        area: "platform",
        title: "Performance",
        items: [
          "Permissions loading switched from a `Preload(IN)` to a JOIN query.",
          "Campaign stats updates rewritten to eliminate N+1 queries.",
          "Skip SLA escalation and auto-close while an agent is actively chatting.",
          "Dead code removed from stores and API, views wired to Pinia stores instead of calling services directly.",
        ],
      },
    ],
  },
  {
    id: "teams-and-scale",
    period: "January 2026",
    range: "2026-01-01 → 2026-01-31",
    title: "Team routing, SLAs, and the first real test suite",
    summary:
      "The month the product stopped being one person's inbox. Team-based routing, SLA tracking with escalation, granular permissions, a Redis caching layer, and a full Go plus Playwright test suite running in CI.",
    groups: [
      {
        area: "inbox",
        title: "Routing work to the right agent",
        items: [
          "Team-based chat routing with auto-assignment.",
          "SLA tracking for agent transfers, with escalation notifications on the frontend.",
          "Fixed a race condition in queue pickup using row-level locking.",
          "Transfer reassignment and availability sync; a warning when going away with active transfers.",
          "Auto-close message notification for SLA-expired chats.",
          "Client inactivity SLA for the chatbot.",
          "Dropped polling entirely — real-time is WebSocket only, with a forced refresh on reconnect.",
        ],
      },
      {
        area: "inbox",
        title: "A chat that feels like WhatsApp",
        items: [
          "WhatsApp-style bubbles, patterned background, blue read receipts, and date separators.",
          "Sticky date header while scrolling, and auto-expanding message input.",
          "Interactive buttons and list replies rendered with WhatsApp-style highlighting.",
          "Sticker and unsupported message types handled instead of breaking the thread.",
          "Contact info panel with configurable session-data fields, display types, and colours.",
          "Retry option for failed messages, directly in chat.",
          "Dark-first design system, with true black rather than dark blue.",
        ],
      },
      {
        area: "platform",
        title: "Caching, and one binary",
        items: [
          "Redis caching for chatbot settings, flows, keyword rules, WhatsApp accounts, webhooks, AI contexts, and SLA settings.",
          "Server and worker unified into a single binary with subcommands.",
          "Campaign processing parallelized with a per-recipient job queue and a `-workers` flag.",
          "GoReleaser for automated releases and multi-arch Docker images.",
          "Frontend bundle split and lazy-loaded, with Brotli and Gzip pre-compression.",
          "Customizable dashboard widgets with permission-based access, and a group-by field for charts.",
          "Meta Insights analytics dashboard.",
        ],
      },
      {
        area: "platform",
        title: "Tests, finally",
        items: [
          "Comprehensive Go test suite wired into CI.",
          "Playwright E2E suite covering campaigns, flows, keywords, and AI contexts.",
          "Migrated from radix-vue to reka-ui.",
          "String literals refactored into typed constants.",
          "Backend deduplicated across handlers, worker, and database layers; reusable components and composables extracted on the frontend.",
        ],
      },
      {
        area: "security",
        title: "Permissions and hardening",
        items: [
          "Granular role-based permissions with super admin support.",
          "Webhook signature verification using the Meta app secret.",
          "Fixed an XSS vulnerability in the template preview.",
          "Removed the token from WebSocket connection logs.",
          "Addressed the open code-scanning alerts and bumped pgx, golang.org/x/crypto, lodash, and mapstructure.",
        ],
      },
      {
        area: "contacts",
        title: "Templates and catalogue",
        items: [
          "Support for both positional and named template parameters.",
          "Edit and republish approved or rejected templates.",
          "WhatsApp Product Catalog feature.",
          "WhatsApp Business Profile implementation and enhanced account validation.",
          "Custom action buttons for chat integrations, using one-time redirect tokens.",
          "3-panel flow builder with URL button support, an interactive preview simulator, and a visual flow diagram with branching and validation.",
        ],
      },
    ],
  },
  {
    id: "foundations",
    period: "December 2025",
    range: "2025-12-19 → 2025-12-31",
    title: "Foundations — from empty repo to a working inbox",
    summary:
      "Two weeks, from the first commit to a WhatsApp platform that could receive messages, route them to agents, run a chatbot flow, and send a campaign. Built as a single Go binary with the frontend embedded, because deploying one file is easier than deploying three.",
    groups: [
      {
        area: "platform",
        title: "The shape of the thing",
        items: [
          "Initial commit: a WhatsApp Business platform in Go.",
          "Single-binary production build with the frontend embedded.",
          "WhatsApp API calls refactored into their own `pkg/whatsapp` package.",
          "WebSocket support for real-time message updates.",
          "shadcn-vue components across the frontend, with Inter and Zerodha-style typography.",
          "Configurable base path so it can be deployed under a subdirectory.",
          "Redis Streams worker service for campaign processing.",
          "GitHub Action for automated release builds, multi-platform.",
          "Documentation moved from Mintlify to Starlight for GitHub Pages.",
        ],
      },
      {
        area: "inbox",
        title: "The inbox",
        items: [
          "Media messaging with local storage, and sender tracking on outgoing messages.",
          "Real-time message notifications with sound and toast alerts.",
          "Interactive message types stored and rendered in chat, live over WebSocket.",
          "Message replies and reactions, including incoming reaction WAMID matching.",
          "Canned responses for quick replies, and an emoji picker with category tabs.",
          "Location and contact message support.",
          "Agent transfer system with queue management and real-time notifications.",
          "Agent availability status and break-time tracking.",
          "Agent analytics dashboard with performance metrics.",
        ],
      },
      {
        area: "chatbot",
        title: "The chatbot",
        items: [
          "WhatsApp Flows with Meta API integration.",
          "Chatbot buttons, drag-and-drop flow step ordering, and skip-step conditions.",
          "Greeting message on a new session — first message or after a timeout.",
          "Business hours auto-reply, checked before creating or messaging a transfer.",
          "Header configuration for flow completion webhooks and API fetch steps.",
        ],
      },
      {
        area: "campaigns",
        title: "Campaigns",
        items: [
          "CSV upload for campaign recipients, with validation.",
          "Retry failed messages.",
          "Status and date-range filters on the campaigns view.",
          "Template restore on sync from Meta, and a webhook handler for Meta template status updates.",
        ],
      },
      {
        area: "security",
        title: "Access control",
        items: [
          "Role-based access control with user management.",
          "API key authentication for programmatic access.",
          "Organization settings with phone number masking.",
          "Outbound webhooks for helpdesk integration.",
        ],
      },
    ],
  },
];
