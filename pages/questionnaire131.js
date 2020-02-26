import React, { Component } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/common/Nav";
import I131 from "../src/components/I131";
import Layout from "../src/components/common/Layout";
import * as Base64 from "../src/Base64";

// function method to get initialProps
const Questionnaire131 = props => {
  return (
    <Layout>
      {/* <Head>
        <title>Home</title>
      </Head>
      <Nav /> */}
      <I131 id={props.postId} />
    </Layout>
  );
};

Questionnaire131.getInitialProps = async ({ query: { id } }) => {
  console.log("ques: ");
  console.log(id);

  let decodeID = Base64.decode(id);
  console.log(decodeID);
  return { postId: decodeID };
};

export default Questionnaire131;

//questionnaire/3890818000013679004
