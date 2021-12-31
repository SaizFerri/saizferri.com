import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GitHub, Linkedin } from "react-feather";

const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "";
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? "";

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__content">
          <div className="nav__logo">
            <Image
              src="/img/logo-white.svg"
              width={50}
              height={68}
              alt="Logo"
            />
          </div>
          <div className="nav__links">
            <Link href={linkedinUrl}>
              <a target="_blank" className="link--light link--clean">
                <Linkedin />
              </a>
            </Link>
            <Link href={githubUrl}>
              <a target="_blank" className="link--light link--clean">
                <GitHub />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
