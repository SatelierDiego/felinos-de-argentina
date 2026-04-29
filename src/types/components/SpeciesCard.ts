import type { ImageMetadata } from 'astro';

export interface SpeciesCardProps {
  slug: string;
  title: string;
  subtitle: string;
  image: ImageMetadata;
  alt: string;
  scientificName: string;
  conservationStatus: string;
}
