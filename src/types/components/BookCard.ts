import type { ImageMetadata } from 'astro';

export interface BookLink {
  label: string;
  url: string;
}

export interface BookCardProps {
  title: string;
  authors: string[];
  editorial: string;
  year: number;
  cover: ImageMetadata;
  description: string;
  links: BookLink[];
}
