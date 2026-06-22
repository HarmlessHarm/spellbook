# Spellbook

A personal library of reusable agent capabilities — **skills, commands, subagents, MCPs, tools, and scripts** — published as an installable Claude Code plugin marketplace with a GitHub Pages discovery site.

The grimoire theme (spells, cast, incantation) is the vibe, not the contract. **Usability comes first.** Say what a thing is and which category it's in. Layer on flavor only when it doesn't cost clarity — e.g. the install button reads "Cast — copy install" (clear because it also says copy), but a card's type and category are labeled plainly as "Skill", "Command", etc., not "school".

The current contents are placeholders. The structure and conventions below matter more than today's items.

## Install methods

Three ways a user can take something. Each type supports a different subset — be honest about which:

| Type            | `npx skills add` | `/plugin install …@spellbook` | clone / copy |
| --------------- | :--------------: | :---------------------------: | :----------: |
| skill           |        ✅        |              ✅               |      ✅      |
| command         |        —         |              ✅               |      ✅      |
| subagent        |        —         |              ✅               |      ✅      |
| MCP server      |        —         |              ✅               |      ✅      |
| tool / script   |        —         |               —               |      ✅      |

- **`npx skills add`** ([skills.sh](https://skills.sh) / [vercel-labs/skills](https://github.com/vercel-labs/skills)) installs **skills only**. It walks `skills/<name>/SKILL.md` (flat) or `skills/<category>/<name>/SKILL.md` (catalog, one level deeper).
- **`/plugin install …@spellbook`** installs anything registered in `.claude-plugin/marketplace.json` (skills, commands, subagents, MCP servers).
- **tools / scripts** aren't installable by either; they're browse-and-copy or `git clone`.

## Layout

Group by type at the top level so the repo stays scannable and `npx skills` finds skills where it expects them:

```
.claude-plugin/marketplace.json   # makes the repo installable as a plugin marketplace
skills/<category>/<slug>/SKILL.md # skills, catalog layout — category in the path (npx-skills compatible)
commands/<slug>/                  # slash commands
agents/<slug>/                    # subagents
mcps/<slug>/                      # MCP servers
tools/<slug>/                     # standalone tools
scripts/<slug>/                   # scripts
docs/index.html                   # the discovery site (served by GitHub Pages)
docs/spells.js                    # the registry the site reads
```

Category is a plain grouping/filter tag (e.g. `git`, `debugging`, `testing`). For skills it lives in the path (`skills/<category>/<slug>/`); for other types it's a field in the registry. Invent categories freely.

> **Note — not yet migrated.** The code currently uses a single `spells/` directory and a `school` field. Moving to the per-type layout above and renaming `school` → `category`/`type` (in `SKILL.md` frontmatter, `marketplace.json`, `docs/spells.js`, and the labels/filter colors in `docs/index.html`) is pending work.

## A spell exists in two worlds — keep them in sync

1. **Installable** — the real artifact on disk (`skills/<category>/<slug>/SKILL.md`, `commands/<slug>/…`, etc.) plus, for plugin-installable types, an entry in `marketplace.json`.
2. **Discoverable** — an entry in `docs/spells.js` (with a `body` mirroring the SKILL.md instructions) so it shows on the site and gets a page at `#<slug>`.

These are maintained by hand and drift easily. When you add or change something, update the artifact, `marketplace.json` (if plugin-installable), and `docs/spells.js` together. The `body` in `spells.js` is a copy of the instructions — keep it matching the source.

## Per-spell copy options on the site

Each spell page offers copy-to-clipboard install commands. Show the ones that apply to its type:

- `/plugin install <slug>@spellbook` — **already in code**.
- `npx skills add <repo-url>/tree/main/skills/<category>/<slug>` — **skills only; documented here, not yet implemented in `docs/index.html`.** Add this as a second copy option for skills.

## Local verification before deploy

"Deploy" = push to `main` → GitHub Pages publishes `docs/`. Verify locally first:

- The site is built to run from `file://` — `spells.js` is loaded as a `<script>` (not `fetch`ed) precisely so opening `docs/index.html` directly in a browser works. Open it and confirm new entries render, search/filter work, the detail page (`#<slug>`) looks right, and copy buttons produce the correct commands.
- Sanity-check `marketplace.json` is valid JSON.

Only push to `main` once the site looks correct, since that push is the deploy.

## Known placeholders

`YOUR_GITHUB_USERNAME` (in `marketplace.json`) and `YOUR_USERNAME` (the `REPO` const in `docs/index.html`) must be replaced with the real GitHub repo before any install command or GitHub link works.

## Possible future: Astro

The site is intentionally a single hand-written HTML file today. If it outgrows that, Astro is the leading candidate for a build step + local dev server, deployed to Pages via GitHub Actions (https://docs.astro.build/en/guides/deploy/github/). Not adopted yet — don't assume a build step exists until this section says so.
