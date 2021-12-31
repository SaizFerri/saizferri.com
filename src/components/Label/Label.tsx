import React from "react";

export default function Label({ children }: Props) {
  return <span className="label">{children}</span>;
}

interface Props {
  children: React.ReactNode;
}
