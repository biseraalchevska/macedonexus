import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      excerpt: z.string().optional(),
      image: image(),
    }),
});

export const collections = {
  blog,
};