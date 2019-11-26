import React, { useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/common/nav";
import H1BEmployer from "../components/H1BEmployer";

// const Home = () => (
function Home() {
  const [content, setContent] = useState({
    id: null,
    value: ""
  });
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <H1BEmployer />
    </div>
  );
}

//);

export default Home;
