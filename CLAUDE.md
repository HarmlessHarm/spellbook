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

```
.claude-plugin/marketplace.json   # plugin marketplace registry
skills/<category>/<slug>/SKILL.md # skills — category in path (npx-skills compatible)
commands/<slug>/                  # slash commands
agents/<slug>/                    # subagents
mcps/<slug>/                      # MCP servers
tools/<slug>/                     # standalone tools
scripts/<slug>/                   # scripts
src/                              # Astro site source
  content/config.ts               # content collection (reads from skills/)
  layouts/Layout.astro
  pages/index.astro
  pages/spells/[slug].astro
  components/SpellCard.astro
astro.config.mjs
package.json
.github/workflows/deploy.yml      # GitHub Actions → Pages
```

Category is a plain grouping/filter tag (e.g. `git`, `debugging`, `testing`). For skills it lives in the path (`skills/<category>/<slug>/`); for other types it's a field in the registry. Invent categories freely.

## SKILL.md frontmatter

Each skill file uses this schema (used by both `npx skills` and the Astro content collection):

```yaml
---
name: summon-pr          # slug — used in URLs and install commands
title: Summon Pull Request  # display name shown on the site
description: ...         # one-line description, shown on cards
category: git            # grouping tag; also lives in the directory path
tags: [git, pull-request, review]
---
```

## A skill exists in two places — keep them in sync

1. **Installable** — `skills/<category>/<slug>/SKILL.md` plus an entry in `marketplace.json`.
2. **Discoverable** — automatically read by the Astro site via the content collection. No separate registry file needed.

When you add or change a skill, update the SKILL.md and `marketplace.json` together. The Astro site picks up changes at the next build.

## Per-skill copy options on the site

Each spell page shows two install commands:

- `/plugin install <slug>@spellbook` — for Claude Code plugin install
- `npx skills add <repo-url>/tree/main/skills/<category>/<slug>` — skills only

## Local development and deploy

The site is built with Astro and deployed to GitHub Pages via GitHub Actions.

```bash
npm install        # first time
npm run dev        # local dev server at localhost:4321/spellbook/
npm run build      # build to dist/
npm run preview    # preview the built site locally
```

Push to `main` → GitHub Actions builds and deploys automatically.

**One-time setup:** In the GitHub repo settings → Pages, set the source to **GitHub Actions** (not "Deploy from a branch").

Sanity-check `marketplace.json` is valid JSON before pushing.

## Adding a new skill

1. Create `skills/<category>/<slug>/SKILL.md` with the frontmatter schema above.
2. Add an entry to `.claude-plugin/marketplace.json`.
3. Run `npm run dev` to confirm the card and detail page render correctly.
4. Push to `main` to deploy.
