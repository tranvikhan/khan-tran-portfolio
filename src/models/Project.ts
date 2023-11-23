export interface Project {
  id: string;
  name: string;
  overview: string;
  thumbnail: string;
  images: ProjectImage[];
  platforms: string[];
  keyFeatures: string[];
  technologies: string[];
  roles: string[];
  demo?: string;
}

export interface ProjectImage {
  src: string;
  alt?: string;
  className?: string;
}
