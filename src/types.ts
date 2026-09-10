export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: 'engineering' | 'design' | 'strategy' | 'cloud';
  deliverables: string[];
  startingPrice: string;
  popular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Web Design' | 'SaaS Platform' | 'Mobile App' | 'Brand Identity';
  image: string;
  shortDescription: string;
  fullDescription: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  liveUrl?: string;
  completedYear: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  highlight: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
}

export interface CompanyStat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  subtext: string;
}

export type PageView = 'home' | 'about' | 'services' | 'portfolio' | 'contact';
