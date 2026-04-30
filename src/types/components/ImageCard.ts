import type { ImageMetadata } from 'astro';

export interface ImageCardProps {
  src: ImageMetadata;
  alt: string;
  href: string;
  width?: number;
  height?: number;
  widths?: number[];
  sizes?: string;
  imageClass?: string;
  aspectRatio?: string;
  showMagnifyingGlass?: boolean;
  showOverlay?: boolean;
  overlayTitle?: string;
  overlaySubtitle?: string;
  overlaySubtitleHtml?: string;
  overlaySubtitleItalic?: boolean;
  showArrow?: boolean;
  dataAnimate?: string;
  dataDelay?: string;
  dataGallery?: string;
  dataGlightbox?: string;
  ariaLabel?: string;
  extraAnchorClass?: string;
}
