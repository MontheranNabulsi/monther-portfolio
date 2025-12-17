export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  additionalTechs: number;
  period: string;
  githubLink: string;
  liveLink: string;
  contributions: string[];
  techStack: string[];
}