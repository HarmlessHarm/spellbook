# 📖 The Spell Book

A personal grimoire of **spells** — skills, skill chains, and tools you *cast* to improve your workflows.
Built as an installable Claude Code plugin marketplace with a GitHub Pages discovery site.

## Cast a spell
```
/plugin marketplace add YOUR_GITHUB_USERNAME/spellbook
/plugin install summon-pr@spellbook
```

## Anatomy
```
.claude-plugin/marketplace.json   # makes the repo installable
spells/<spell>/SKILL.md           # each spell (agentskills.io spec)
docs/index.html                   # the discovery page (Pages)
docs/spells.js                    # registry the page reads (loaded as a script so it works on file:// too)
```

## Add a new spell
1. Create `spells/<slug>/SKILL.md` with frontmatter (`name`, `description`, `school`, `tier`).
2. Register it in `.claude-plugin/marketplace.json`.
3. Add an entry to `docs/spells.js` so it appears on the site.

## Schools (just categories)
The `school` field is a plain category used for grouping and filter colors on the site:
- **git** — version-control workflows (PRs, branches)
- **debugging** — investigates / reveals (logs, stack traces)
- **testing** — fixes / verifies (failing suites, assertions)

Invent your own. They're only tags with colors.
