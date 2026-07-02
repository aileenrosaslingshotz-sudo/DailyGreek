# Καθημερινά V13.6.21 — Daily Reading Step

V13.6.21 completes the final confidence-flow bundle by adding a daily reading step alongside the lowered gates and Listen First library mode from V13.6.20.

## What changed

- Adds `dailyReadingPick`, modeled after the daily listening picker.
- Injects one reading step into Today’s guided session when a suitable reading item exists.
- Prefers imported official reading items first, then baked-in/practice-only reading items through the existing `examItems('reading')` order and dedupe.
- In 15–20 minute sessions, reading can appear as the short confidence step when listening is not available.
- In 30+ minute sessions, reading becomes part of the normal confidence flow.
- Grades up to three reading questions inside Today and saves the result into the same exam/SRS answer tracking.
- Keeps Confidence Engine, Listen First library mode, lowered gates, grammar, listening, speaking, Living in Greece, and Conversation Memory intact.

## Preserved

- `const LS='gta_v12_state'` is unchanged.
- Existing progress, imported exam items, conversation logs, listening ladder, conversation memory, A2 grammar-gap logs, Living in Greece logs, and Confidence Engine logs remain on the same storage key.
- SRS math is not changed.
- No new vocabulary content is added.

## Verification

- App header shows `Καθημερινά V13.6.21`.
- `APP_VERSION` is `V13.6.21`.
- Service-worker cache is `gta-v13-6-21-daily-reading-step`.
- Package version is `13.6.21`.
- Smoke test checks syntax, daily reading picker, guided reading renderer, lowered confidence gate, Listen First mode, dedupe, and confidence-minimum checklist.

## Personal-use note

The final confidence bundle is now complete: listening daily, speaking daily, grammar daily, reading daily, Listen First library, short-session confidence gate, and the Today confidence-minimum checklist.
