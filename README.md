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
docs/spells.json                  # registry the page reads
```

## Add a new spell
1. Create `spells/<slug>/SKILL.md` with frontmatter (`name`, `description`, `school`, `tier`).
2. Register it in `.claude-plugin/marketplace.json`.
3. Add an entry to `docs/spells.json` so it appears on the site.

## Schools of magic (just categories)
- **conjuration** — creates new artifacts (PRs, scaffolds)
- **divination** — investigates / reveals (debugging, analysis)
- **restoration** — fixes / heals (tests, refactors)

Invent your own. They're only tags with colors.
