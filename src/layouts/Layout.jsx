import React from "react";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import { Outlet } from "react-router-dom";

function Layout({ query, setQuery, setArticles }) {
  return (
    <>
      <NavComponent
        query={query}
        setQuery={setQuery}
        setArticles={setArticles}
      />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default Layout;
