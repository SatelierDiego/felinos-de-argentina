import type { ImageMetadata } from 'astro';

export interface HeroProps {
  title: string;
  subtitle: string;
  image: ImageMetadata;
  alt: string;
  separatorColor?: string;
}
