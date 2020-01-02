import React, { Component } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/common/Nav";
import H1BEmployee from "../src/components/H1BEmployee";
import Layout from "../src/components/common/Layout";
import * as Base64 from "../src/Base64";

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
const Questionnaire1 = props => {
  return (
    <Layout>
      {/* <Head>
        <title>Home</title>
      </Head>
      <Nav /> */}
      <H1BEmployee id={props.postId} />
    </Layout>
  );
};

Questionnaire1.getInitialProps = async ({ query: { id } }) => {
  console.log("ques: ");
  console.log(id);

  let decodeID = Base64.decode(id);
  console.log(decodeID);
  return { postId: decodeID };
};

export default Questionnaire1;

//questionnaire/3890818000013679004
