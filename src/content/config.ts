import { defineCollection } from 'astro:content';
import { felinosCollection } from './felinos/schema';

export const collections = {
  felinos: felinosCollection,
};

// Debug: log when config is loaded
console.log('Content config loaded');
