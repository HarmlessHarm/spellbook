---
name: mend-tests
title: Mend Tests
description: Repair a failing suite without silently weakening or skipping assertions.
category: testing
tags: [testing, debugging, ci]
---

Cast this to heal a failing suite — honestly.

## Incantation
1. Determine whether the test or the code is wrong before editing either.
2. Fix the underlying cause; do not delete or loosen assertions to force a pass.
3. Re-run and report what actually changed.

## Wards
- Never `skip`/`xfail` a test to hide a real failure.
