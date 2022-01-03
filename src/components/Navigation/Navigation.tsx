import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, useCallback, useState } from "react";
import { GitHub, Linkedin } from "react-feather";

import Select from "@components/Select/Select";

const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "";
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? "";

export default function Navigation() {
  const router = useRouter();
  const { pathname, asPath, query, locale, locales } = router;
  const [lang, setLang] = useState(locale);

  const onLangChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const nextLocale = e.target.value;

      setLang(nextLocale);
      router.push({ pathname, query }, asPath, { locale: nextLocale });
    },
    [asPath, pathname, query, router]
  );

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
            <Select
              id="languageSelect"
              value={lang}
              options={(locales || []).map((locale) => ({
                value: locale,
                label: locale.toUpperCase(),
              }))}
              onChange={onLangChange}
            />
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
