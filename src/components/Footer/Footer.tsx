import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            &#169; {year} - Made with a lot of 🍺 by&nbsp;
            <span className="color-primary">Adrian Saiz</span> with React &
            Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
