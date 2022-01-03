import {
  EducationDto,
  ExperienceDto,
  LabelDto,
  ProjectDto,
} from "@interfaces/dto.interface";
import { ProjectItem } from "@interfaces/projectItem.interface";
import TimelineItem from "@interfaces/timelineItem.interface";

import { HomepageDto } from "./../interfaces/dto.interface";
import { translate } from "./translate";

export const mapHomepageToTranslatedHomepage = (
  item: HomepageDto,
  locale: string
): HomepageDto => {
  const t = translate(item, locale);
  return {
    id: item.id,
    heroSmallTitle: t("heroSmallTitle"),
    heroTitle: t("heroTitle"),
    heroDescription: t("heroDescription"),
    aboutTitle: t("aboutTitle"),
    aboutDescription: t("aboutDescription"),
    experienceTitle: t("experienceTitle"),
    projectsTitle: t("projectsTitle"),
    educationTitle: t("educationTitle"),
    contactTitle: t("contactTitle"),
    contactDescription: t("contactDescription"),
  };
};

export const mapExperieceToTimelineItem = (
  item: ExperienceDto,
  locale: string,
  translations: any
): TimelineItem => {
  const t = translate(item, locale);
  return {
    id: item.id,
    position: t("position"),
    description: t("description"),
    imgSrc: item.image.id,
    imgAlt: item.image.title,
    company: item.company,
    companyUrl: item.companyUrl,
    startDate: item.startDate,
    endDate: item.endDate ?? translations.projects.present,
    city: t("city"),
    labels: item.labels.map((label: LabelDto) => label.label.name),
  };
};

export const mapEducationToTimelineItem = (
  item: EducationDto,
  locale: string,
  translations: any
): TimelineItem => {
  const t = translate(item, locale);

  return {
    id: item.id,
    position: t("title"),
    description: t("description"),
    imgSrc: item.image.id,
    imgAlt: item.image.title,
    company: item.place,
    startDate: item.startDate ?? translations.globals.always,
    endDate: item.endDate,
    city: t("city"),
  };
};

export const mapProjectToProjectItem = (
  item: ProjectDto,
  locale: string
): ProjectItem => {
  const t = translate(item, locale);

  return {
    id: item.id,
    type: item.type,
    title: item.title,
    description: t("description"),
    labels: item.labels.map((label: LabelDto) => label.label.name),
    image: {
      src: item.image.id,
      width: item.image.width ?? 0,
      height: item.image.height ?? 0,
      alt: item.image.title,
    },
    links: item.links ?? [],
  };
};
