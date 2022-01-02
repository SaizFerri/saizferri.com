import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ExternalLink, GitHub } from "react-feather";
import ReactMarkdown from "react-markdown";

import Label from "@components/Label/Label";

import { imageLoader } from "@utils/directus";

import {
  ProjectItem as IProjectItem,
  ProjectLink,
} from "@interfaces/projectItem.interface";

export default function ProjectItem({
  type,
  title,
  description,
  labels,
  image,
  links,
}: Props) {
  return (
    <div className="project-item">
      <div className="project-item__body">
        <small>{type}</small>
        <h4>{title}</h4>
        <div className="project-item__labels">
          {labels.map((label: string) => (
            <Label key={label}>{label}</Label>
          ))}
        </div>
        <div className="project-item__description">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
        <div className="project-item__links">
          <ProjectItemLinks links={links} />
        </div>
      </div>
      <div className="project-item__image">
        <Image
          loader={imageLoader}
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          quality={100}
        />
      </div>
    </div>
  );
}

function ProjectItemLinks({ links = [] }: ProjectItemProps) {
  return (
    <>
      {links.map(({ linkType, linkUrl }) => {
        let icon = null;

        switch (linkType) {
          case "github":
            icon = <GitHub />;
            break;
          case "webpage":
            icon = <ExternalLink />;
            break;
          default:
            icon = null;
        }

        return (
          <Link key={linkUrl} href={linkUrl}>
            <a target="_blank" className="link--clean">
              {icon}
            </a>
          </Link>
        );
      })}
    </>
  );
}

interface Props extends IProjectItem {}

interface ProjectItemProps {
  links: ProjectLink[];
}
