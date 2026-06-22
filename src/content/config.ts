import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const skills = defineCollection({
  loader: glob({ pattern: '**/SKILL.md', base: './skills' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { skills };
