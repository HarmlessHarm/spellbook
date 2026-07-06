import { getCollection } from 'astro:content';

export type SpellType = 'skill' | 'command' | 'tool';

export interface MergedSpell {
  name: string;
  title: string;
  type: SpellType;
  category: string;
  version: string;
  tags: string[];
  entrypoint?: string;
  download?: string;
  description: string;
  bodyEntry: Awaited<ReturnType<typeof getCollection<'spellBodies'>>>[number] | undefined;
}

export async function getSpells(): Promise<MergedSpell[]> {
  const configs = await getCollection('spells');
  const bodies = await getCollection('spellBodies');

  const bodyMap = new Map(bodies.map(b => [b.data.name, b]));

  return configs.map(cfg => ({
    ...cfg.data,
    description: bodyMap.get(cfg.data.name)?.data.description ?? '',
    bodyEntry: bodyMap.get(cfg.data.name),
  }));
}
