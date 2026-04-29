import type { ImageMetadata } from 'astro';

export interface GalleryItem {
  src: ImageMetadata;
  alt: string;
  autor: string;
}

export interface GalleryProps {
  items: GalleryItem[];
  title?: string;
  speciesName?: string;
}
