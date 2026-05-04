import type { ImageMetadata } from 'astro';

export interface ImageData {
  src: ImageMetadata;
  alt: string;
  credit?: string;
}

export interface ImageBlockProps {
  images: ImageData[];
  /** Which side images appear on when layout is side-by-side */
  position?: 'left' | 'right';
}
