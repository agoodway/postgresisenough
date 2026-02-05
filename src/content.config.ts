import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const categories = [
  'queues',
  'search',
  'vectors',
  'time-series',
  'caching',
  'documents',
  'graphs',
  'geo',
  'analytics',
  'cdc',
  'api',
  'ui',
  'auth',
  'migrations',
  'scaling',
  'tuning',
  'audit',
  'testing',
  'tooling',
] as const;

export type Category = (typeof categories)[number];

const tools = defineCollection({
  loader: file('src/content/tools.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    problem: z.string(),
    category: z.enum(categories),
    url: z.string().url(),
    repo: z.string().url().optional(),
    replaces: z.array(z.string()).optional(),
    toolType: z.enum(['extension', 'software']),
    maintained: z.boolean().default(true),
  }),
});

const resources = defineCollection({
  loader: file('src/content/resources.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    url: z.string().url(),
    author: z.string().optional(),
    description: z.string(),
    type: z.enum(['article', 'talk', 'book', 'course']),
    year: z.number().optional(),
    featured: z.boolean().default(false),
  }),
});

const providers = defineCollection({
  loader: file('src/content/providers.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    logo: z.string(),
    features: z.array(z.string()),
    freeTier: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { tools, resources, providers };

// Export categories for use in pages
export { categories };
