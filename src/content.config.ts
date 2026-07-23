import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    previewText: z.string(),
  }),
});

const recipes = defineCollection({
  loader: glob({ base: './src/content/recipes', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    cookTime: z.int(),
    summary: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog, recipes };