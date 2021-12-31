import Link from "next/link";
import React from "react";

const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <h3>Get in touch</h3>
            <p>
              While I’m employed full-time, I’m still interested in freelance
              work and open source contributions. If you have an interesting
              project don’t hesitate to contact me via
              <Link href="mailto:adrian@saizferri.com">
                <a>&nbsp;email</a>
              </Link>
              &nbsp; or &nbsp;
              <Link href={linkedinUrl}>
                <a target="_blank">linkedin</a>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
