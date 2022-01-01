import React from "react";
import ReactMarkdown from "react-markdown";

export default function Hero({ smallTitle, title, description }: Props) {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-12">
            <h3>{smallTitle}</h3>
            <h1>{title}</h1>
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  smallTitle: string;
  title: string;
  description: string;
}
