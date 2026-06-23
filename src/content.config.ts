import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const block = z.object({
  type: z.enum(['text', 'split', 'highlights', 'gallery', 'quote', 'links', 'pdf-summary']),
  eyebrow: z.string().optional(),
  title: z.string().optional(),
  body: z.string().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  caption: z.string().optional(),
  items: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
  images: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() })).optional(),
  links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    // Required card, route and metadata fields. The JSON filename becomes the project URL slug.
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    year: z.string(),
    status: z.string(),
    projectType: z.string(),
    role: z.string(),
    // Tags drive Work page filtering. Keep public filter labels mapped in src/pages/work/index.astro.
    tags: z.array(z.string()),
    // Use web-ready public paths such as /images/projects/project-slug/image-name.jpg.
    thumbnail: z.string(),
    hero: z.string(),
    // Keep unfinished work honest by using placeholder: true until content and images are confirmed.
    placeholder: z.boolean().default(false),
    featured: z.boolean().default(false),
    // Optional recognition, logo and external-link fields. Do not infer clients, awards or permissions.
    badge: z.object({ label: z.string(), href: z.string().optional() }).optional(),
    companyLogo: z.object({ src: z.string(), alt: z.string() }).optional(),
    externalLinks: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    // Controls printable portfolio inclusion: product, ux-ui and/or project-management.
    pdf: z.array(z.enum(['product', 'ux-ui', 'project-management'])).default([]),
    // Flexible case-study blocks. Each project can use only the sections that fit its story.
    sections: z.array(block),
  }),
});

export const collections = { projects };
