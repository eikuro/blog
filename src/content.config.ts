import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './posts', pattern: '**/*.md' }),
  schema: z.object({
    date: z.coerce.date(),
    description: z.string(),
    name: z.string(),
    type: z.literal('post'),
  }),
});

export const collections = { posts };
