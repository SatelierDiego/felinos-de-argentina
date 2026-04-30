import type { ImageMetadata } from 'astro';

export interface HeroProps {
  title?: string | null;
  subtitle?: string | null;
  image: ImageMetadata;
  alt: string;
  separatorColor?: string;
  cta?: {
    href: string;
    text: string;
  };
}
