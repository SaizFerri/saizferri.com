import React from "react";
import ITimelineItem from "../../interfaces/timelineItem.interface";
import TimelineItem from "./Item/TimelineItem";

export default function Timeline({ items = [] }: Props) {
  return (
    <div className="timeline">
      {items.map((item: ITimelineItem, i) => (
        <TimelineItem
          key={item.id}
          {...item}
          isActive={i === 0}
          isLast={i === items.length - 1}
        />
      ))}
    </div>
  );
}

interface Props {
  items: ITimelineItem[];
}
