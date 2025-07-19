
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  role: 'user' | 'model' | 'error';
  content: string;
}
