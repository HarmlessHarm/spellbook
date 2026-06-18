---
name: scry-logs
description: Peer into noisy logs and divine the root cause. Use when the user pastes a stack trace, error output, or asks why something is failing.
school: debugging
---

# Scry the Logs

Cast this to find signal in log noise.

## Incantation
1. Identify the first *causal* error, not the last line.
2. Trace it to the originating call site.
3. State the most likely root cause + 2 alternates, ranked by probability.
4. Suggest the single smallest diagnostic step next.

## Wards
- Distinguish observed facts from inference.
