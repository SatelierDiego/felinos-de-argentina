import type { ImageMetadata } from 'astro';

export type SizeEntry = {
  weight: string;
  body: string;
  tail: string;
  height_at_withers: string;
};

export type StatusEntry = {
  iucn: string;
  sarem: string;
};

export interface Stats {
  silouette?: ImageMetadata;
  size: SizeEntry;
  conservationStatus: StatusEntry;
  diet: string;
  habitat: string;
  activity: string;
  habits: string;
  generationTime: string;
  otherNames: string;
}

export interface SpeciesStatsProps {
  scientificName: string;
  commonName: string;
  stats: Stats;
}
