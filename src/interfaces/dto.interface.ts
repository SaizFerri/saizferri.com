export interface HomepageDto {
  id: string;
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
  startDate: Date;
  endDate: Date;
  city: string;
  image: {
    id: string;
    title: string;
  };
  labels: ExperienceLabelDto[];
}

export interface ExperienceLabelDto {
  label: {
    name: string;
  };
}

export interface EducationDto {
  id: number;
  title: string;
  description: string;
  place: string;
  startDate: Date;
  endDate: Date;
  city: string;
  image: {
    id: string;
    title: string;
  };
}
