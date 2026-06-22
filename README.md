# 📖 The Spell Book

A library of reusable agent capabilities — **skills, commands, and tools** — published as an installable Claude Code plugin marketplace with a GitHub Pages discovery site.

🔗 **[Browse the grimoire → harmlessharm.github.io/spellbook](https://harmlessharm.github.io/spellbook)**

## Install

**Claude plugin** (skills + commands):
```
/plugin marketplace add harmlessharm/spellbook
/plugin install summon-pr@spellbook
```

**skills.sh** (skills only):
```
npx skills add https://github.com/harmlessharm/spellbook/tree/main/skills/git/summon-pr
```

**Clone/copy** (tools and anything else):
```
git clone https://github.com/harmlessharm/spellbook
```

## Layout

```
.claude-plugin/marketplace.json           # plugin marketplace registry

skills/<category>/<slug>/
  SKILL.md                                # name + description + body (portable, read by skills.sh)
  spell_config.yaml                       # title, type, category, version, tags (Spellbook site metadata)

commands/<slug>/{COMMAND.md, spell_config.yaml}
tools/<slug>/{TOOL.md, spell_config.yaml}

src/                                      # Astro discovery site
  content/config.ts                       # two content collections (spells + spellBodies)
  pages/index.astro
  pages/spells/[slug].astro
  components/SpellCard.astro
  layouts/Layout.astro

.github/workflows/deploy.yml              # GitHub Actions → Pages
```

## Adding a spell

1. Create the directory: `skills/<category>/<slug>/` (or `commands/` / `tools/`).
2. Add `SKILL.md` (or `COMMAND.md` / `TOOL.md`) with frontmatter `name` + `description` and the spell body.
3. Add `spell_config.yaml` with `name`, `title`, `type`, `category`, `version`, and `tags`.
4. Register it in `.claude-plugin/marketplace.json` (skills and commands only; tools are not installable).
5. Run `npm run dev` to confirm the card and detail page render correctly.
6. Push to `main` to deploy.

## Types and install methods

| Type    | `/plugin install` | `npx skills add` | clone / copy |
|---------|:-----------------:|:----------------:|:------------:|
| skill   |        ✅        |        ✅        |      ✅      |
| command |        ✅        |        —         |      ✅      |
| tool    |        —         |        —         |      ✅      |

## Categories

The `category` field is a free-form grouping tag. Examples: `git`, `debugging`, `testing`, `util`. Invent your own — they drive filter chips and accent colors on the discovery site.

## Local dev

```bash
npm install        # first time
npm run dev        # localhost:4321/spellbook/
npm run build      # build to dist/
```

Push to `main` → GitHub Actions builds and deploys to GitHub Pages automatically.
