import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Revues de veille hebdomadaires (voir docs/VEILLE.md). Un brouillon n'est ni listé ni publié. */
const revues = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/revues' }),
  schema: z.object({
    title: z.string().min(5).max(120),
    description: z.string().min(20).max(300),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { revues };
