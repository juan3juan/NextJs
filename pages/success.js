import React, { Component } from "react";
import Head from "next/head";
import Nav from "../src/components/common/Nav";

// function method to get initialProps
const Success = props => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <h2 className="success">Update Success!</h2>
      <style jsx>{`
        .success {
          text-align: center;
          margin-top: 100px;
        }
      `}</style>
    </>
  );
};

export default Success;
