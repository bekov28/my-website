//type definitions for objects
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
  role: string;
  tasks: string[];
  period: string;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface Certificate {
  title: string;
  period: string;
  description: string;
  details: string[];
  image: string;
}
