import React, { useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/common/nav";
import H1BEmployer from "../components/H1BEmployer";

// function method to get initialProps
const Home = props => {
  //function Home(props) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <H1BEmployer id={props.postId} />
    </div>
  );
};

Home.getInitialProps = async ({ query: { id } }) => {
  return { postId: id };
};

export default Home;
