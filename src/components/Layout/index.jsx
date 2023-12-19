import React from "react";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="flex-grow-1">
      <Header />
      <div className="m-3">{children}</div>
    </div>
  );
};
