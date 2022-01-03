import { useTranslations } from "next-intl";
import React from "react";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {t.rich("text", {
              year,
              primary: (children) => (
                <span className="color-primary">{children}</span>
              ),
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
