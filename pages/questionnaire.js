import React, { Component } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/common/Nav";
import H1BEmployer from "../components/H1BEmployer";
import Layout from "../components/common/Layout";

// class writing method to get initial props
// export default class extends Component {
//   static getInitialProps({ query: { id } }) {
//     return { postId: id };
//   }

//   render() {
//     return (
//       <div>
//         <Head>
//           <title>Home</title>
//           <h2>My id {this.props.postId}</h2>
//         </Head>
//         <Nav />
//         <H1BEmployer id={this.props.postId} />
//       </div>
//     );
//   }
// }

// function method to get initialProps
const Questionnaire = props => {
  return (
    <Layout>
      {/* <Head>
        <title>Home</title>
      </Head>
      <Nav /> */}
      <H1BEmployer id={props.postId} />
    </Layout>
  );
};

Questionnaire.getInitialProps = async ({ query: { id } }) => {
  return { postId: id };
};

export default Questionnaire;

//questionnaire/3890818000013679004
