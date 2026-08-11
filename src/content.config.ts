import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    summary: z.string(),
    relatedRecipes: z.array(reference('recipes')).optional(),
    heroImage: image().optional(),
  }),
});

const recipes = defineCollection({
  loader: glob({ base: './src/content/recipes', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    cookTime: z.int(),
    ingredients: z.array(z.object({
      item: z.string(),
      amount: z.number().optional(),
      unit: z.string().optional(),
      group: z.string().optional(),
    })),
    summary: z.string(),
    tags: z.array(z.string()),
    heroImage: image(),
  }),
});

export const collections = { blog, recipes };