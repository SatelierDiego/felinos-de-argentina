import type { ImageMetadata } from 'astro';

export interface ImageData {
  src: ImageMetadata;
  alt: string;
}

export interface MapData {
  lat: number;
  lng: number;
  zoom: number;
  geojson?: string;
}

export interface SectionBlockProps {
  id: string;
  title?: string;
  content: string;
  images?: ImageData[];
  map?: MapData;
  /** Even index → images right; odd → images left */
  index?: number;
  /** Renders the section with a dark brand background (highlight style) */
  highlight?: boolean;
  separatorBefore?: boolean;
  separatorAfter?: boolean;
  separatorBeforeColor?: string;
  separatorAfterColor?: string;
}
