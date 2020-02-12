import {Backer} from './Backer';

export interface Feature {
    id: string;
    created_at: Date;
    software_id: string;
    title: string;
    short_description: string;
    target: string;
    backers: Backer[];
  }

