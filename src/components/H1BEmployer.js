import React, { useState, useEffect } from "react";
import EmployerForm from "./EmployerForm";
//import { getRecord, saveRecord } from "../server/zoho/zohoApi";
import * as zohoApi from "../../server/zoho/zohoApi";
import PropTypes from "prop-types";
import axios from "axios";
import Router from "next/router";
import { withRouter } from "react-router-dom";
import { choices } from "./common/choices";

function H1BEmployer(props) {
  // for upload files
  const [selectedFile, setSelectedFile] = useState();
  const [formContent, setFormContent] = useState({
    id: "",
    Petitioner_First_Name: "",
    Petitioner_Middle_Name: "",
    Petitioner_Last_Name: "",
    Petitioner_Title: "",
    Petitioner_Daytime_Phone: "",
    Petitioner_Email: "",
    Petitioner_Street_Address: "",
    Petitioner_Unit: "",
    Petitioner_Unit_Number: "",
    Petitioner_City: "",
    Petitioner_State: "",
    Petitioner_Zip_Code: "",
    Company_Name: "",
    Type_of_Business: "",
    Year_Established: "",
    Gross_Annual_Income: "",
    Net_Annual_Income: "",
    FEIN: "",
    DOT_Code: "",
    NAICS_Code: "",
    Total_Number_of_Employee: "",
    Number_of_H1B_Employee: "",
    Ever_Filled_a_Petition_for_this_Beneficiary: "",
    Job_Title: "",
    Start_From: "",
    To: "",
    Rate_of_Pay_Per_Year: "",
    Hours_Per_Week: "",
    Wage: "",
    Wage_Unit: "",
    Full_time: "",
    Off_site_Assignment: ""
  });

  // useEffect(() => {
  //   let input = {};
  //   input.module = "Contacts";
  //   input.id = "3890818000007128013";
  //   getRecord(input).then(function(response) {
  //     response = JSON.parse(response.body);
  //     response = response.data[0];
  //     setFormContent(...formContent, { firstName: response.Email });
  //   });
  // });
  //here for the first time init value, like componentDidMount
  useEffect(() => {
    zohoApi.getRecordByID(props.id, "Cases_Info").then(function(records) {
      //zohoApi.getRecordByID(id).then(records => {
      //let data = JSON.parse(records.body);
      console.log("records :");
      console.log(records[0]);
      setFormContent({
        ...formContent,
        id: records[0].id,
        Petitioner_First_Name: records[0].Petitioner_First_Name,
        Petitioner_Middle_Name: records[0].Petitioner_Middle_Name,
        Petitioner_Last_Name: records[0].Petitioner_Last_Name,
        Petitioner_Title: records[0].Petitioner_Title,
        Petitioner_Daytime_Phone: records[0].Petitioner_Daytime_Phone,
        Petitioner_Email: records[0].Petitioner_Email,
        Petitioner_Street_Address: records[0].Petitioner_Street_Address,
        Petitioner_Unit: records[0].Petitioner_Unit,
        Petitioner_Unit_Number: records[0].Petitioner_Unit_Number,
        Petitioner_City: records[0].Petitioner_City,
        Petitioner_State: records[0].Petitioner_State,
        Petitioner_Zip_Code: records[0].Petitioner_Zip_Code,
        Company_Name: records[0].Company_Name,
        Type_of_Business: records[0].Type_of_Business,
        Year_Established: records[0].Year_Established,
        Gross_Annual_Income: records[0].Gross_Annual_Income,
        Net_Annual_Income: records[0].Net_Annual_Income,
        FEIN: records[0].FEIN,
        DOT_Code: records[0].DOT_Code,
        NAICS_Code: records[0].NAICS_Code,
        Total_Number_of_Employee: records[0].Total_Number_of_Employee,
        Number_of_H1B_Employee: records[0].Number_of_H1B_Employee,
        Ever_Filled_a_Petition_for_this_Beneficiary:
          records[0].Ever_Filled_a_Petition_for_this_Beneficiary,
        Job_Title: records[0].Job_Title,
        Start_From: records[0].Start_From,
        To: records[0].To,
        Rate_of_Pay_Per_Year: records[0].Rate_of_Pay_Per_Year,
        Hours_Per_Week: records[0].Hours_Per_Week,
        Wage: records[0].Wage,
        Wage_Unit: records[0].Wage_Unit,
        Full_time: records[0].Full_time,
        Off_site_Assignment: records[0].Off_site_Assignment
      });
    });
    // //vcode
    // initVcode();
    // canvas();
  }, []);

  function handleChange({ target }) {
    setFormContent({
      ...formContent,
      [target.name]: target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // if (vcode.vcodeInput.toUpperCase() !== vcode.vcodeProduce.toUpperCase())
    //   alert("vcode is not correct!");
    zohoApi.saveRecord(formContent, "Cases_Info").then(responseRecord => {
      console.log("responseRecord");
      console.log(responseRecord);
      zohoApi.uploadAttachment(formContent);
      if (responseRecord.ok) Router.push("/success");
      else alert("fail");
    });
  }
  // upload file
  function onChangeUpload(event) {
    if (maxSelectFile(event)) {
      setSelectedFile(event.target.files);
    }
  }
  const maxSelectFile = event => {
    let files = event.target.files;
    if (files.length > 3) {
      const msg = "The max for uploading is 3!";
      event.target.value = null;
      alert("Maximum is 3!");
      console.log(msg);
      return false;
    }
    return true;
  };

  function onClickUpload(event) {
    event.preventDefault();
    const data = new FormData();
    if (selectedFile == null) alert("No File Upload!");
    else {
      for (let x = 0; x < selectedFile.length; x++) {
        data.append("file", selectedFile[x]);
      }
      axios.post("http://localhost:3010/upload", data, {}).then(res => {
        console.log(res.statusText);
      });
      alert("upload success!");
    }
  }

  return (
    <>
      <EmployerForm
        companyUnits={choices.units}
        states={choices.states}
        wage={choices.wage}
        yesOrNo={choices.yesOrNo}
        formContent={formContent}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onChangeUpload={onChangeUpload}
        onClickUpload={onClickUpload}
      />
    </>
  );
}
// H1BEmployer.propTypes = {
//   Full_Name: PropTypes.number.isRequired
// };
export default H1BEmployer;
