# Καθημερινά V13.6.23 — One Button Learning Path

V13.6.23 makes the progressive path impossible to miss. The app now opens Today with one dominant workflow: choose minutes, press **Start Today’s Path**, and follow Step 1 → Step 2 → Step 3 until the app says complete.

## What changed

- Adds a top **One Button Learning Path** command card on Today.
- Shows the exact learner rule: **Today is required; Extra Practice is optional.**
- Places the start/continue button above the optional dashboards and feature cards.
- Shows Step X of 180, current stage, selected minutes, and the scaled path preview before starting.
- Keeps the ordered path visible: Review → Weak Spots → Tiny New Step → Listen → Speak → Read → Conversation.
- Keeps minute-based scaling: 20 maintenance, 30 minimum serious path, 45 strong progress, 60 best six-month path.
- Renames the Practice tab label to **Extra Practice** so it no longer competes with Today.
- Adds a visible deployment badge in the hero: `V13.6.23 · ONE BUTTON PATH ACTIVE`.

## Preserved

- `const LS='gta_v12_state'` is unchanged.
- Existing progress, imported exam items, confidence logs, grammar logs, conversation memory, listening ladder, reading progress, and SRS data remain on the same storage key.
- SRS math is not changed.
- No new Greek content is added.

## Verification

- App header shows `Καθημερινά V13.6.23`.
- Hero badge shows `V13.6.23 · ONE BUTTON PATH ACTIVE`.
- `APP_VERSION` is `V13.6.23`.
- Service-worker cache is `gta-v13-6-23-one-button-learning-path`.
- Package version is `13.6.23`.
- Smoke test checks syntax, one-button path card, path ordering, minute scaling, Extra Practice label, daily reading, lowered gates, Listen First mode, dedupe, and the confidence-minimum checklist.

## Upload instructions

Upload **all extracted files** to the GitHub Pages repo root, not only `index.html`:

- `index.html`
- `service-worker.js`
- `manifest.json`
- `package.json`
- `README.md`
- `tests/smoke-test.js`
- icons/images
- `.nojekyll`

Uploading only `index.html` can leave the old PWA service worker in place.
