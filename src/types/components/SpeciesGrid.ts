import type { ImageMetadata } from 'astro';

export interface Felino {
  slug: string;
  title: string;
  scientific_name: string;
  image: {
    src: ImageMetadata;
    alt: string;
  };
}

export interface SpeciesGridProps {
  felinos: Felino[];
  title?: string;
  eyebrow?: string;
}
