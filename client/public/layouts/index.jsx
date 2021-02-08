import React from "react";

export const MainLayout = ({ content, navbar, footer }) => (
  <div className="publicLayoutDefault d-flex flex-column min-vh-100">
    {navbar()}

    <div className="flex-fill px-0">
      {content()}
    </div>

    {footer()}
  </div>
);


