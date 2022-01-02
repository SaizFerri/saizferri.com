import classnames from "classnames";
import * as fns from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

import Label from "@components/Label/Label";

import { imageLoader } from "@utils/directus";

import ITimelineItem from "@interfaces/timelineItem.interface";

export default function TimelineItem({
  imgSrc,
  imgAlt,
  position,
  city,
  company,
  companyUrl = "",
  startDate = "",
  endDate = "",
  labels = [],
  description,
  isLast = false,
  isActive = false,
}: ITimelineItem) {
  return (
    <div
      className={classnames("timeline__item", {
        "is-last": isLast,
        "is-active": isActive,
      })}
    >
      <div className="timeline__image">
        <Image
          loader={imageLoader}
          layout="fill"
          objectFit="cover"
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
      <div className="timeline__body">
        <h6>
          <b>{position}</b>
          {company && (
            <TimelineItemCompany company={company} companyUrl={companyUrl} />
          )}
        </h6>
        {startDate && (
          <TimelineItemDateCity
            startDate={startDate}
            endDate={endDate}
            city={city}
          />
        )}
        {labels.length > 0 && (
          <div className="timeline__labels">
            {labels.map((label: string) => (
              <Label key={label}>{label}</Label>
            ))}
          </div>
        )}
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  );
}

function parseDate(date: string, format: string): string {
  const parsedDate = Date.parse(date);
  return isNaN(parsedDate) ? date : fns.format(parsedDate, format);
}

function TimelineItemCompany({
  company,
  companyUrl,
}: Pick<ITimelineItem, "company" | "companyUrl">) {
  const Content = ({ children }: { children: React.ReactNode }) => (
    <>&nbsp;at&nbsp;{children}</>
  );

  if (!companyUrl) {
    return (
      <Content>
        <span className="color-primary">{company}</span>
      </Content>
    );
  }

  return (
    <Content>
      <Link href={companyUrl}>
        <a target="_blank">{company}</a>
      </Link>
    </Content>
  );
}

function TimelineItemDateCity({
  startDate = "",
  endDate = "",
  city,
}: Pick<ITimelineItem, "startDate" | "endDate" | "city">) {
  const parsedStartDate = parseDate(startDate, "MM.yyyy");
  const parsedEndDate = parseDate(endDate, "MM.yyyy");

  if (!endDate) {
    return <small>{parsedStartDate}</small>;
  }

  return (
    <small>
      {parsedStartDate} - {parsedEndDate}
      {city && (
        <>
          {" //"} {city}
        </>
      )}
    </small>
  );
}
