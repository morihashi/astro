import { defineCollection, z } from 'astro:content';
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    excerpt: z.string().optional(),
    cover: z.string().optional(),
  }),
});
export const collections = { news };
