import React from "react";
import ITimelineItem from "../../interfaces/timelineItem.interface";
import TimelineItem from "./Item/TimelineItem";

export default function Timeline({ items = [] }: Props) {
  return (
    <div className="timeline">
      {items.map((item: ITimelineItem) => (
        <TimelineItem key={item.id} {...item} />
      ))}
    </div>
  );
}

interface Props {
  items: ITimelineItem[];
}
