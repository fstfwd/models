import {
  Ids, Status, Authors, Images, Content,
  Parents, Relationships, Taxonomies, Rating, Sharing, Statistics, Extras,
} from './_shared';

export interface Video
extends Ids, Status, Authors, Images, Content,
Parents, Relationships, Taxonomies, Rating, Sharing, Statistics, Extras {
  // Ids
  type?: string;
  // Status
  createdAt?: string;
  // Authors
  // Images
  description?: string;
  // Content
  src?: string | {
    [type: string]: any; // { mp4: ..., webm: ... }
  };
  duration?: number;
  birthday?: number | string;
  props?: {
    [prop: string]: any;
  };
  locale?: string;
  origin?: string;
  // Parents
  // Relationships
  // Taxonomies
  // Rating
  // Sharing
  // Statistics
  keywords?: string;
  // Extras
}
