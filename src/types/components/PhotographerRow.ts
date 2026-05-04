export interface ContactLink {
  titulo: string;
  url: string;
  icon?: string;
}

export interface PhotographerRowProps {
  nombre: string;
  contacto?: ContactLink[];
  felinos?: string[];
  /** Map from scientific name (lowercase) to slug */
  felinosByScientificName: Map<string, string>;
}
