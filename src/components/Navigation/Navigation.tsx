import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { GitHub, Linkedin } from "react-feather";

const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "";
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? "";

export default function Navigation() {
  const router = useRouter();
  const { pathname, asPath, query, locale, locales } = router;
  const [lang, setLang] = useState(locale);

  const onLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    setLang(nextLocale);
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__content">
          <div className="nav__logo">
            <Image
              priority
              src="/img/logo-white.svg"
              width={50}
              height={68}
              alt="Logo"
            />
          </div>
          <div className="nav__links">
            <select
              name="languageSelect"
              id="languageSelect"
              value={lang}
              onChange={onLangChange}
            >
              {locales?.map((value) => (
                <option key={value} value={value}>
                  {value.toUpperCase()}
                </option>
              ))}
            </select>
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
