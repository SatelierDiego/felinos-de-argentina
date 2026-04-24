import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const homeCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/home" }),
	schema: ({ image }) =>
		z.object({
			hero: z.object({
				title: z.string(),
				subtitle: z.string(),
				image: image(),
				alt: z.string(),
			}),
			intro: z.object({
				paragraphs: z.array(z.string()),
			}),
			highlight: z.object({
				title: z.string(),
				content: z.string(),
			}),
			content: z.object({
				paragraphs: z.array(z.string()),
			}),
			felinos: z.array(
				z.object({
					slug: z.string(),
					title: z.string(),
					scientific_name: z.string(),
					image: z.object({
						src: image(),
						alt: z.string(),
					}),
				}),
			),
		}),
});

const fotografosCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/fotografos" }),
	schema: z.object({
		fotografos: z.array(
			z.object({
				nombre: z.string(),
				contacto: z
					.array(
						z.object({
							titulo: z.string(),
							url: z.string().url(),
						}),
					)
					.optional(),
				felinos: z.array(z.string()).optional(),
			}),
		),
	}),
});

const sectionIdSchema = z.enum([
	"appearance",
	"behavior",
	"distribution",
	"situation",
]);

const felinosCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/felinos" }),
	schema: ({ image }) =>
		z.object({
			slug: z.string(),

			hero: z.object({
				title: z.string(),
				subtitle: z.string(),
				image: image(),
				alt: z.string(),
			}),

			seo: z.object({
				title: z.string(),
				description: z.string(),
			}),

			scientific_name: z.string(),
			conservation_status_ar: z.string(),
			conservation_status_iucn: z.string(),

            stats: z
                .object({
                    silouette: image().optional(),
                    size: z.array(
                        z.object({
                            weight: z.string(),
                            body: z.string().optional(),
                            tail: z.string().optional(),
                            height_at_withers: z.string().nullish(),
                        }),
                    ),
                    diet: z.string(),
                    habitat: z.string(),
                    activity: z.string().nullish(),
                    habits: z.string().nullish(),
                    generationTime: z.string().nullish(),
                })
                .optional(),

			sections: z.array(
				z.object({
					id: sectionIdSchema,
					title: z.string(),
					content: z.string(),
					images: z
						.array(
							z.object({
								src: image(),
								alt: z.string(),
							}),
						)
						.default([]),
					map: z
						.object({
							lat: z.number(),
							lng: z.number(),
							zoom: z.number(),
							geojson: z.string().optional(),
						})
						.optional(),
				}),
			),

			threats: z
				.array(
					z.object({
						title: z.string(),
						icon: z.string(),
						description: z.string(),
					}),
				)
				.default([]),

			bibliography: z.array(z.string()).optional(),

			gallery: z
				.array(
					z.object({
						src: image(),
						alt: z.string(),
						autor: z.string(),
					}),
				)
				.default([]),
		}),
});

const librosCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/libros" }),
	schema: ({ image }) =>
		z.object({
			books: z.array(
				z.object({
					title: z.string(),
					authors: z.array(z.string()),
					editorial: z.string(),
					year: z.number(),
					cover: image(),
					description: z.string(),
					links: z
						.array(
							z.object({
								label: z.string(),
								url: z.string(),
							}),
						)
						.default([]),
				}),
			),
		}),
});

export const collections = {
	felinos: felinosCollection,
	home: homeCollection,
	fotografos: fotografosCollection,
	libros: librosCollection,
};
