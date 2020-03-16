import React, { Component } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/common/Nav";
import I130 from "../src/components/I130";
import Layout from "../src/components/common/Layout";
import * as Base64 from "../src/Base64";

// function method to get initialProps
const Questionnaire130 = props => {
  return (
    <Layout>
      {/* <Head>
        <title>Home</title>
      </Head>
      <Nav /> */}
      <I130 id={props.postId} />
    </Layout>
  );
};

Questionnaire130.getInitialProps = async ({ query: { id } }) => {
  console.log("ques: ");
  console.log(id);

  let decodeID = Base64.decode(id);
  console.log(decodeID);
  return { postId: decodeID };
};

export default Questionnaire130;

//questionnaire/3890818000013679004
