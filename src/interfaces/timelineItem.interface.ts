export default interface TimelineItem {
  id: string;
  imgSrc: string;
  imgAlt: string;
  position: string;
  city: string;
  company?: string;
  companyUrl?: string;
  startDate?: string;
  endDate?: string;
  labels?: string[];
  description: string;
  isLast?: boolean;
  isActive?: boolean;
}
