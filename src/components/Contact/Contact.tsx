import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function Contact({ title, description }: Props) {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <h3>{title}</h3>
            <ReactMarkdown
              components={{
                a: ({ node, href = "", className, children, ...props }) => {
                  return (
                    <Link href={href}>
                      <a target="_blank">{children}</a>
                    </Link>
                  );
                },
              }}
            >
              {description}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Props {
  title: string;
  description: string;
}
