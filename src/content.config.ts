import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    categories: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    status: z.string().optional(),
    demoUrl: z.string().optional(),
    theme: z.object({
      cardBg: z.string(),
      imageContainerBg: z.string(),
      imageOverlayClass: z.string(),
      icon: z.string().optional(),
      iconClass: z.string().optional(),
      colSpan: z.string().optional(),
      flexRow: z.boolean().optional(),
      hasDemoBtn: z.boolean().optional(),
    }).optional()
  })
});

export const collections = {
  projects
};
