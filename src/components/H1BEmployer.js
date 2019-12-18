import React, { useState, useEffect } from "react";
import EmployerForm from "./EmployerForm";
//import { getRecord, saveRecord } from "../server/zoho/zohoApi";
import * as zohoApi from "../../server/zoho/zohoApi";
import PropTypes from "prop-types";
import axios from "axios";
import Router from "next/router";
import { withRouter } from "react-router-dom";

function H1BEmployer(props) {
  // for upload files
  const [selectedFile, setSelectedFile] = useState();

  const [companyUnits, setCompanyUnits] = useState([
    { id: "1", value: "Apt" },
    { id: "2", value: "Ste" },
    { id: "3", value: "Flr" }
  ]);
  const [states, setStates] = useState([
    { id: "1", value: "AA" },
    { id: "2", value: "AE" },
    { id: "3", value: "AK" },
    { id: "4", value: "AL" },
    { id: "5", value: "AP" },
    { id: "6", value: "AR" },
    { id: "7", value: "AS" },
    { id: "8", value: "AZ" },
    { id: "9", value: "CA" },
    { id: "10", value: "CO" },
    { id: "11", value: "CT" },
    { id: "12", value: "DC" },
    { id: "13", value: "DE" },
    { id: "14", value: "FL" },
    { id: "15", value: "FM" },
    { id: "16", value: "GA" },
    { id: "17", value: "GU" },
    { id: "18", value: "HI" },
    { id: "19", value: "IA" },
    { id: "20", value: "ID" },
    { id: "21", value: "IL" },
    { id: "22", value: "IN" },
    { id: "23", value: "KS" },
    { id: "24", value: "KY" },
    { id: "25", value: "LA" },
    { id: "26", value: "MA" },
    { id: "27", value: "MD" },
    { id: "28", value: "ME" },
    { id: "29", value: "MH" },
    { id: "30", value: "MI" },
    { id: "31", value: "MN" },
    { id: "32", value: "MO" },
    { id: "33", value: "MP" },
    { id: "34", value: "MS" },
    { id: "35", value: "MT" },
    { id: "36", value: "NC" },
    { id: "37", value: "ND" },
    { id: "38", value: "NE" },
    { id: "39", value: "NH" },
    { id: "40", value: "NJ" },
    { id: "41", value: "NM" },
    { id: "42", value: "NV" },
    { id: "43", value: "NY" },
    { id: "44", value: "OH" },
    { id: "45", value: "OK" },
    { id: "46", value: "OR" },
    { id: "47", value: "PA" },
    { id: "48", value: "PR" },
    { id: "49", value: "PW" },
    { id: "50", value: "RI" },
    { id: "51", value: "SC" },
    { id: "52", value: "SD" },
    { id: "53", value: "TN" },
    { id: "54", value: "TX" },
    { id: "55", value: "UT" },
    { id: "56", value: "VA" },
    { id: "57", value: "VI" },
    { id: "58", value: "VT" },
    { id: "59", value: "WA" },
    { id: "60", value: "WI" },
    { id: "61", value: "WV" },
    { id: "62", value: "WY" }
  ]);
  const [wage, setWage] = useState([
    { id: "1", value: "None" },
    { id: "2", value: "Hour" },
    { id: "3", value: "Week" },
    { id: "4", value: "Month" },
    { id: "5", value: "Year" }
  ]);
  const [yesOrNo, setYesOrNo] = useState([
    { id: "1", value: "Yes" },
    { id: "2", value: "No" }
  ]);
  const [formContent, setFormContent] = useState({
    id: "",
    First_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Last_Name: "",
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
    zohoApi.getRecordByID(props.id).then(function(records) {
      //zohoApi.getRecordByID(id).then(records => {
      //let data = JSON.parse(records.body);
      console.log("records :");
      console.log(records[0]);
      setFormContent({
        ...formContent,
        id: records[0].id,
        First_Name: records[0].First_Name,
        Middle_Name: records[0].Middle_Name,
        Last_Name: records[0].Last_Name,
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
    //setFormContent({ ...formContent, Full_Name: "tes" });
  }, []);

  function handleChange({ target }) {
    setFormContent({
      ...formContent,
      [target.name]: target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    zohoApi.saveRecord(formContent).then(responseRecord => {
      console.log("responseRecord");
      console.log(responseRecord);
      zohoApi.uploadAttachment(formContent);
      if (responseRecord.ok) Router.push("/success");
      else alert("fail");
    });
  }

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
    for (let x = 0; x < selectedFile.length; x++) {
      data.append("file", selectedFile[x]);
    }
    axios.post("http://localhost:3010/upload", data, {}).then(res => {
      console.log(res.statusText);
    });
    alert("upload success!");
  }

  return (
    <EmployerForm
      companyUnits={companyUnits}
      states={states}
      wage={wage}
      yesOrNo={yesOrNo}
      formContent={formContent}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onChangeUpload={onChangeUpload}
      onClickUpload={onClickUpload}
    />
  );
}
H1BEmployer.propTypes = {
  Full_Name: PropTypes.number.isRequired
};
export default H1BEmployer;
