import { DirectusImage } from "./directus.interface";
import { ProjectLink } from "./projectItem.interface";

export interface HomepageDto {
  id: number;
  heroSmallTitle: string;
  heroTitle: string;
  heroDescription: string;
  aboutTitle: string;
  aboutDescription: string;
  experienceTitle: string;
  projectsTitle: string;
  educationTitle: string;
  contactTitle: string;
  contactDescription: string;
}

export interface ExperienceDto {
  id: number;
  position: string;
  description: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  city: string;
  image: {
    id: string;
    title: string;
  };
  labels: LabelDto[];
}

export interface ProjectDto {
  id: number;
  title: string;
  description: string;
  type: string;
  image: DirectusImage;
  links?: ProjectLink[];
  labels: LabelDto[];
}

export interface LabelDto {
  label: {
    name: string;
  };
}

export interface EducationDto {
  id: number;
  title: string;
  description: string;
  place: string;
  startDate: string;
  endDate: string;
  city: string;
  image: {
    id: string;
    title: string;
  };
}
