import {
  EducationDto,
  ExperienceDto,
  LabelDto,
  ProjectDto,
} from "@interfaces/dto.interface";
import { ProjectItem } from "@interfaces/projectItem.interface";
import TimelineItem from "@interfaces/timelineItem.interface";

export const mapExperieceToTimelineItem = (
  item: ExperienceDto
): TimelineItem => ({
  id: item.id,
  position: item.position,
  description: item.description,
  imgSrc: item.image.id,
  imgAlt: item.image.title,
  company: item.company,
  companyUrl: item.companyUrl,
  startDate: item.startDate,
  endDate: item.endDate ?? "present",
  city: item.city,
  labels: item.labels.map((label: LabelDto) => label.label.name),
});

export const mapEducationToTimelineItem = (
  item: EducationDto
): TimelineItem => ({
  id: item.id,
  position: item.title,
  description: item.description,
  imgSrc: item.image.id,
  imgAlt: item.image.title,
  company: item.place,
  startDate: item.startDate ?? "always",
  endDate: item.endDate,
  city: item.city,
});

export const mapProjectToProjectItem = (item: ProjectDto): ProjectItem => ({
  id: item.id,
  type: item.type,
  title: item.title,
  description: item.description,
  labels: item.labels.map((label: LabelDto) => label.label.name),
  image: {
    src: item.image.id,
    width: item.image.width ?? 0,
    height: item.image.height ?? 0,
    alt: item.image.title,
  },
  links: item.links ?? [],
});
