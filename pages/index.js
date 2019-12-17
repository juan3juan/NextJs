import React, { useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import H1BEmployer from "../src/components/H1BEmployer";
import Layout from "../src/components/common/Layout";

// function method to get initialProps
// const Home = props => {
//   //function Home(props) {
//   return (
//     <div>
//       <Head>
//         <title>Home</title>
//       </Head>
//       <Nav />
//       <H1BEmployer id={props.postId} />
//     </div>
//   );
// };

// Home.getInitialProps = async ({ query: { id } }) => {
//   return { postId: id };
// };
const Home = props => {
  return (
    <Layout>
      <h2>This is home page</h2>
    </Layout>
  );
};

export default Home;
