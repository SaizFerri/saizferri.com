export interface ProjectItem {
  id: number;
  sort: number;
  type: string;
  title: string;
  description: string;
  labels: string[];
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  links: ProjectLink[];
}

export interface ProjectLink {
  linkType: "webpage" | "github";
  linkUrl: string;
}
