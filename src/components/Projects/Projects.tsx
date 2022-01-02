import React from "react";
import { ProjectItem as IProjectItem } from "@interfaces/projectItem.interface";
import ProjectItem from "./Item/ProjectItem";

export default function Projects({ items }: Props) {
  return (
    <div className="projects">
      {items.map((item) => (
        <ProjectItem key={item.id} {...item} />
      ))}
    </div>
  );
}

interface Props {
  items: IProjectItem[];
}
