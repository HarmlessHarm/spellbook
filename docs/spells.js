// The registry the page reads. Add a spell here and it appears on the site.
// Loaded as a plain script (not fetched) so the page also works when opened
// directly from disk (file://), where fetch() is blocked by CORS.
window.SPELLS = [
  {
    "name": "Summon Pull Request",
    "slug": "summon-pr",
    "school": "git",
    "tier": "2",
    "description": "Conjure a polished pull request from staged changes — title, summary, and an honest test plan.",
    "tags": [
      "git",
      "pull-request",
      "review"
    ]
  },
  {
    "name": "Scry the Logs",
    "slug": "scry-logs",
    "school": "debugging",
    "tier": "1",
    "description": "Peer into noisy logs and stack traces to divine the first true root cause, not the last loud symptom.",
    "tags": [
      "debugging",
      "logs",
      "triage"
    ]
  },
  {
    "name": "Mend Tests",
    "slug": "mend-tests",
    "school": "testing",
    "tier": "2",
    "description": "Repair a failing suite without silently weakening or skipping assertions.",
    "tags": [
      "testing",
      "debugging",
      "ci"
    ]
  }
];
