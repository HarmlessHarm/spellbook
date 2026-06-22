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
.claude-plugin/marketplace.json           # plugin marketplace registry

skills/<category>/<slug>/
  SKILL.md                                # name + description + body (portable, skills.sh-compatible)
  spell_config.yaml                       # Spellbook site metadata: title, type, category, version, tags

commands/<slug>/{COMMAND.md, spell_config.yaml}
agents/<slug>/                            # subagents (no site support yet)
mcps/<slug>/                              # MCP servers (no site support yet)
tools/<slug>/{TOOL.md, spell_config.yaml}
scripts/<slug>/                           # scripts (no site support yet)

src/                                      # Astro site source
  content/config.ts                       # two content collections: spells (yaml) + spellBodies (md)
  lib/spells.ts                           # getSpells() — joins the two collections by name
  lib/install.ts                          # installCommands() + marketplaceCommands
  layouts/Layout.astro                    # global styles + toggle+copy script
  pages/index.astro
  pages/spells/[slug].astro
  components/SpellCard.astro
astro.config.mjs
package.json
.github/workflows/deploy.yml              # GitHub Actions → Pages
```

Category is a plain grouping/filter tag (e.g. `git`, `debugging`, `testing`). For skills/commands/tools it lives in the directory path AND in `spell_config.yaml`. Invent categories freely.

## Sidecar model — two files per spell

Spell content is split into two files to keep portable content separate from site-specific metadata:

**`SKILL.md` / `COMMAND.md` / `TOOL.md`** — portable, read by skills.sh and external tooling:
```yaml
---
name: summon-pr          # slug — used in URLs and install commands
description: ...         # one-line description (also shown on cards)
---

Body content here — instructions, incantation steps, wards.
```

**`spell_config.yaml`** — Spellbook site metadata, not read by external tooling:
```yaml
name: summon-pr          # must match the .md frontmatter name
title: Summon Pull Request  # display name shown on cards and detail pages
type: skill              # skill | command | tool
category: git            # grouping tag; also lives in the directory path
version: "1.0.0"
tags: [skill, git, pull-request, review]
```

The Astro site joins the two collections by `name`. Both files must have matching `name` values.

## A spell exists in two places — keep them in sync

1. **Installable** — the `.md` file plus an entry in `marketplace.json` (skills and commands only).
2. **Discoverable** — `spell_config.yaml` is read by the Astro site via the `spells` content collection. The `.md` body is read via the `spellBodies` collection and rendered on the detail page.

When you add or change a spell, update the `.md`, `spell_config.yaml`, and `marketplace.json` together.

## Per-spell copy options on the site

The site shows a method toggle (Claude plugin ↔ skills.sh) that controls what all copy buttons display:

- **Claude plugin**: `/plugin install <slug>@spellbook` (skills + commands) or `git clone …` (tools)
- **skills.sh**: `npx skills add <repo-url>/tree/main/skills/<category>/<slug>` (skills only; commands fall back to `/plugin`)

The toggle state is saved in `localStorage` under `spellbook-install-method`.

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

## Adding a new spell

1. Create the directory: `skills/<category>/<slug>/` (or `commands/<slug>/` / `tools/<slug>/`).
2. Add the `.md` file with frontmatter `name` + `description` and the spell body.
3. Add `spell_config.yaml` with `name`, `title`, `type`, `category`, `version`, `tags`.
4. For skills and commands: add an entry to `.claude-plugin/marketplace.json`.
5. Run `npm run dev` to confirm the card and detail page render correctly.
6. Push to `main` to deploy.
