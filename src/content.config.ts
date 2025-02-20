import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.md', }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string().optional(),
			img_alt: z.string().optional(),
			type: z.string(),
			url: z.string().url().optional(),
			roles: z.array(z.string()).optional(),
			collaborators: z.array(z.object({
				name: z.string(),
				url: z.string().url().optional(),
				role: z.array(z.string()).optional(),
			})).optional(),

			published: z.boolean().optional(),
		}),
	}),
};
