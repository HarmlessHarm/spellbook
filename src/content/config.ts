import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Spellbook cataloging metadata — lives in spell_config.yaml sidecars
const spells = defineCollection({
  loader: glob({
    pattern: ['skills/**/spell_config.yaml', 'commands/**/spell_config.yaml', 'tools/**/spell_config.yaml'],
    base: './',
  }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    type: z.enum(['skill', 'command', 'tool']).default('skill'),
    category: z.string(),
    version: z.string().default('1.0.0'),
    tags: z.array(z.string()).optional().default([]),
    entrypoint: z.string().optional(),
    download: z.string().optional(),
  }),
});

// Portable spell content — name + description + body in the .md file
const spellBodies = defineCollection({
  loader: glob({
    pattern: ['skills/**/SKILL.md', 'commands/**/COMMAND.md', 'tools/**/TOOL.md'],
    base: './',
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

export const collections = { spells, spellBodies };
