import type { ImageMetadata } from 'astro';

export interface HeroProps {
  title?: string | null;
  subtitle?: string | null;
  image: ImageMetadata;
  alt: string;
  size?: 'full' | 'narrow';
  cta?: {
    href: string;
    text: string;
  };
}
