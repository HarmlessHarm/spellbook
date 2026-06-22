---
name: scry-logs
title: Scry the Logs
description: Peer into noisy logs and stack traces to divine the first true root cause, not the last loud symptom.
category: debugging
tags: [debugging, logs, triage]
---

Cast this to find signal in log noise.

## Incantation
1. Identify the first *causal* error, not the last line.
2. Trace it to the originating call site.
3. State the most likely root cause + 2 alternates, ranked by probability.
4. Suggest the single smallest diagnostic step next.

## Wards
- Distinguish observed facts from inference.
