---
name: mend-tests
description: Repair failing tests without weakening assertions. Use when tests are red and the user wants them green honestly.
school: testing
---

# Mend Tests

Cast this to heal a failing suite — honestly.

## Incantation
1. Determine whether the test or the code is wrong before editing either.
2. Fix the underlying cause; do not delete or loosen assertions to force a pass.
3. Re-run and report what actually changed.

## Wards
- Never `skip`/`xfail` a test to hide a real failure.
