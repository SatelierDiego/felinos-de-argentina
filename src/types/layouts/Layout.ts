export interface LayoutProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown>[];
  noindex?: boolean;
}
