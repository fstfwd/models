import { Ids, Extras } from './_shared';

export interface Thread extends Ids, Extras {
  // Ids
  title?: string;
  type?: string;
  createdAt?: string;
  content: string;
  parent?: string;
  master?: string; // <sheet>:<key> (posts:post-1)
  stars?: number;
  uid?: string;
  email?: string;
  displayName?: string;
  phoneNumber?: number | string;
  // Extras
}
