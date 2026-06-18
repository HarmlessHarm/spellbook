---
name: summon-pr
description: Conjure a polished pull request from staged changes — title, summary, and a test plan. Use when the user wants to open a PR, write a PR description, or summarize a branch of work.
school: conjuration
tier: 2
---

# Summon Pull Request

Cast this to materialize a clean PR from work-in-progress.

## Incantation
1. Run `git diff --staged` (or `git diff main...HEAD`) to read the changes.
2. Group changes by intent, not by file.
3. Produce: a concise title (conventional-commit style), a "What & Why" summary, and a checkbox test plan.
4. Flag anything risky or out of scope.

## Wards
- Never invent tests that weren't run.
- If the diff is empty, say so rather than guessing.
