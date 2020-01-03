//export default () => <div>b</div>;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import TextInput from "../src/components/common/TextInput";
import PickupList from "../src/components/common/TextInput";

const b = props => {
  return (
    // <div className="container-fluid">
    //   <h1>Hello World!</h1>
    //   <div className="row">
    //     <div
    //       className="col-xs-6 col-sm-3"
    //       style={{ backgroundColor: "lavender" }}
    //     >
    //       <h2>Column 1</h2>
    //       <div>h1</div>
    //       <div>h1</div>
    //     </div>
    //     <div
    //       className="col-xs-6 col-sm-3"
    //       style={{ backgroundColor: "lavenderblush" }}
    //     >
    //       Column 2
    //     </div>
    //     <div className="clearfix visible-xs"></div>
    //     <div
    //       className="col-xs-6 col-sm-3"
    //       style={{ backgroundColor: "lightcyan" }}
    //     >
    //       Column 3
    //     </div>
    //     <div
    //       className="col-xs-6 col-sm-3"
    //       style={{ backgroundColor: "lightgray" }}
    //     >
    //       Column 4
    //     </div>
    //   </div>
    // </div>

    <div className="container-fluid">
      <h1 className="title"> H-1B EMPLOYER QUESTIONNAIRE</h1>
      <form className="form">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
            <div className="section1">
              <label className="head form-control">
                Company Signatory Basic Information
              </label>
            </div>

            <div className="section1">
              <label className="head form-control">Company Information</label>
            </div>
            <div className="section1">
              <label className="head form-control">Company Information</label>
            </div>
            <div className="section1">
              <label className="head form-control">Company Information</label>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
            <div className="section1">
              <label className="head form-control">
                Employment Information
              </label>
            </div>
            <div className="section1">
              <label className="head form-control">
                Employment Information
              </label>
            </div>
          </div>
        </div>
      </form>
      <style jsx>{`
        .title {
          text-align: center;
          font-family: "Gill Sans", sans-serif;
        }
        // .form {
        // display: flex;
        // flex-wrap: wrap;
        // }

        // .left{
        // flex:40%;
        // background-color: #e3deda,
        // padding:50px;
        // padding-left:200px;
        // margin: 50px;
        // }
        // .right{
        // flex:40%;
        // background-color: #e3deda,
        // padding:50px;
        // padding-right: 200px;
        // margin: 50px;
        // }
        .head {
          background: #5b5630;
          color: white;
          font-size: 28px;
        }
        // .section1{
        // background: #f9fafb;
        // margin-bottom: 50px;
        // }
        .form-content {
          padding-left: 30px;
          padding-right: 30px;
          padding-bottom: 5px;
        }
        #submit {
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default b;
