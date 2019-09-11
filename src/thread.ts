import { Ids, Status, Rating, Sharing, Statistics, Extras } from './_shared';

export interface ThreadAttachment {
  name: string;
  mimeType: string;
  size: number;
  id?: string; // not exists for Gmail messages
}

export interface Thread extends Ids, Status, Rating, Sharing, Statistics, Extras {
  // Ids
  type?: string;
  // Status
  createdAt?: string;
  content: string;
  attachments?: {
    [index: string]: ThreadAttachment;
  };
  parent?: string;
  master?: string; // <sheet>/<key> (posts/post-1)
  stars?: number; // with rating stars
  uid?: string;
  email?: string;
  displayName?: string;
  phoneNumber?: number | string;
  // Rating
  // Sharing
  // Statistics
  // Extras
}
