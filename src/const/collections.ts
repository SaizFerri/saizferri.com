import { isProduction } from "./global";

export const enum Collection {
  HOMEPAGE = "Homepage",
  EXPERIENCE = "experiences",
  PROJECTS = "projects",
  EDUCATION = "educations",
}

export const enum Status {
  DRAFT = "draft",
  PUBLISHED = "published",
}

export const COLLECTION_STATUS = [
  Status.PUBLISHED,
  !isProduction ? Status.DRAFT : undefined,
];
