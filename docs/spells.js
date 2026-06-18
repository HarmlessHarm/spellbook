// The registry the page reads. Add a spell here and it appears on the site.
// Loaded as a plain script (not fetched) so the page also works when opened
// directly from disk (file://), where fetch() is blocked by CORS.
// `body` is the spell's SKILL.md instructions (markdown) shown on its detail page.
window.SPELLS = [
  {
    "name": "Summon Pull Request",
    "slug": "summon-pr",
    "school": "git",
    "description": "Conjure a polished pull request from staged changes — title, summary, and an honest test plan.",
    "tags": ["git", "pull-request", "review"],
    "body": "Cast this to materialize a clean PR from work-in-progress.\n\n## Incantation\n1. Run `git diff --staged` (or `git diff main...HEAD`) to read the changes.\n2. Group changes by intent, not by file.\n3. Produce: a concise title (conventional-commit style), a \"What & Why\" summary, and a checkbox test plan.\n4. Flag anything risky or out of scope.\n\n## Wards\n- Never invent tests that weren't run.\n- If the diff is empty, say so rather than guessing."
  },
  {
    "name": "Scry the Logs",
    "slug": "scry-logs",
    "school": "debugging",
    "description": "Peer into noisy logs and stack traces to divine the first true root cause, not the last loud symptom.",
    "tags": ["debugging", "logs", "triage"],
    "body": "Cast this to find signal in log noise.\n\n## Incantation\n1. Identify the first *causal* error, not the last line.\n2. Trace it to the originating call site.\n3. State the most likely root cause + 2 alternates, ranked by probability.\n4. Suggest the single smallest diagnostic step next.\n\n## Wards\n- Distinguish observed facts from inference."
  },
  {
    "name": "Mend Tests",
    "slug": "mend-tests",
    "school": "testing",
    "description": "Repair a failing suite without silently weakening or skipping assertions.",
    "tags": ["testing", "debugging", "ci"],
    "body": "Cast this to heal a failing suite — honestly.\n\n## Incantation\n1. Determine whether the test or the code is wrong before editing either.\n2. Fix the underlying cause; do not delete or loosen assertions to force a pass.\n3. Re-run and report what actually changed.\n\n## Wards\n- Never `skip`/`xfail` a test to hide a real failure."
  }
];
