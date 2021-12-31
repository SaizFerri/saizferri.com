import Image from "next/image";
import Link from "next/link";
import React from "react";
import classnames from "classnames";
import Label from "../../Label/Label";
import ITimelineItem from "../../../interfaces/timelineItem.interface";

export default function TimelineItem({
  imgSrc,
  imgAlt,
  position,
  city,
  company,
  companyUrl = "",
  startDate,
  endDate,
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
        <Image layout="fill" objectFit="cover" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="timeline__body">
        <h6>
          <b>{position}</b>
          {company && (
            <>
              &nbsp;at&nbsp;
              <Link href={companyUrl}>
                <a>{company}</a>
              </Link>
            </>
          )}
        </h6>
        {startDate && (
          <small>
            {startDate}
            {endDate && <> - {endDate}</>}
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
        <p>{description}</p>
      </div>
    </div>
  );
}
