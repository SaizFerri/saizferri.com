import classnames from "classnames";
import { format } from "date-fns";
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
  const parsedStartDate = Date.parse(startDate);
  const startDateDisplay = isNaN(parsedStartDate)
    ? startDate
    : format(parsedStartDate, "MM.yyyy");

  const parsedEndDate = Date.parse(endDate);
  const endDateDisplay = isNaN(parsedEndDate)
    ? endDate
    : format(parsedEndDate, "MM.yyyy");

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
            <>
              &nbsp;at&nbsp;
              {companyUrl ? (
                <Link href={companyUrl}>
                  <a target="_blank">{company}</a>
                </Link>
              ) : (
                <span className="color-primary">{company}</span>
              )}
            </>
          )}
        </h6>
        {startDate && (
          <small>
            {startDateDisplay}
            {endDate && <> - {endDateDisplay}</>}
            &nbsp;
            {city && (
              <>
                {"//"} {city}
              </>
            )}
          </small>
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
