import React from "react";
import Head from "next/head";
import Nav from "./Nav";

const Layout = props => {
  return (
    <div>
      <Head>Questionnaire</Head>
      <Nav />
      <style jsx>{`
        body {
          margin: 0;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }

        .container {
          max-width: 100rem;
          margin: 1.5rem auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      `}</style>
      <main>
        <div className="container">{props.children}</div>
      </main>
    </div>
  );
};

export default Layout;
