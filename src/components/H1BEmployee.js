import React, { useState, useEffect } from "react";
import EmployeeForm from "./EmployeeForm";
//import { getRecord, saveRecord } from "../server/zoho/zohoApi";
import * as zohoApi from "../../server/zoho/zohoApi";
import PropTypes from "prop-types";
import axios from "axios";
import Router from "next/router";
import { withRouter } from "react-router-dom";
import { choices } from "./common/choices";

function H1BEmployee(props) {
  // for upload files
  const [selectedFile, setSelectedFile] = useState();
  const [formContent, setFormContent] = useState({
    id: "",
    First_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Email: "",
    Gender: "",
    D_O_B: "",
    S_S_N: "",
    Country_of_Birth: "",
    Province_of_Birth: "",
    Country_of_Citizenship: "",
    Date_of_Last_Arrival: "",
    Passport_No: "",
    Date_Passport_Issued: "",
    Date_Passport_Expires: "",
    Current_Status: "",
    Date_Status_Expires: "",
    SEVIS_No: "",
    EAD_No: "",
    Any_J_Visa_Before: "",
    Dates_maintained_J_Status: "",
    Gender: "",
    Any_H_Petition_in_Last_7yrs: "",
    Any_Denied_H_Petition_in_last_7yrs: "",
    Current_U_S_Address: "",
    Current_Unit: "",
    Current_Unit_Number: "",
    Current_City: "",
    Current_State: "",
    Current_Zip_Code: "",
    Office_City: "",
    State_or_Country: "",
    Foreign_Address: "",
    Foreign_Unit: "",
    Foreign_Unit_Number: "",
    Foreign_City: "",
    Foreign_Province: "",
    Foreign_Postal_Code: "",
    Foreign_Country: "",
    Type_of_Petition: "",
    Highest_Education: "",
    University_Name: "",
    Date_Degree_Awarded: "",
    Type_of_U_S_Degree: "",
    Major_Field: "",
    University_Address: "",
    University_Unit: "",
    University_Unit_Number: "",
    University_City: "",
    University_State: "",
    University_Zip_Code: ""
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
        First_Name: records[0].First_Name,
        Middle_Name: records[0].Middle_Name,
        Last_Name: records[0].Last_Name,
        Email: records[0].Email,
        Gender: records[0].Gender,
        D_O_B: records[0].D_O_B,
        S_S_N: records[0].S_S_N,
        Country_of_Birth: records[0].Country_of_Birth,
        Province_of_Birth: records[0].Province_of_Birth,
        Country_of_Citizenship: records[0].Country_of_Citizenship,
        Date_of_Last_Arrival: records[0].Date_of_Last_Arrival,
        Passport_No: records[0].Passport_No,
        Date_Passport_Issued: records[0].Date_Passport_Issued,
        Date_Passport_Expires: records[0].Date_Passport_Expires,
        Current_Status: records[0].Current_Status,
        Date_Status_Expires: records[0].Date_Status_Expires,
        SEVIS_No: records[0].SEVIS_No,
        EAD_No: records[0].EAD_No,
        Any_J_Visa_Before: records[0].Any_J_Visa_Before,
        Dates_maintained_J_Status: records[0].Dates_maintained_J_Status,
        Gender: records[0].Gender,
        Any_H_Petition_in_Last_7yrs: records[0].Any_H_Petition_in_Last_7yrs,
        Any_Denied_H_Petition_in_last_7yrs:
          records[0].Any_Denied_H_Petition_in_last_7yrs,
        Current_U_S_Address: records[0].Current_U_S_Address,
        Current_Unit: records[0].Current_Unit,
        Current_Unit_Number: records[0].Current_Unit_Number,
        Current_City: records[0].Current_City,
        Current_State: records[0].Current_State,
        Current_Zip_Code: records[0].Current_Zip_Code,
        Office_City: records[0].Office_City,
        State_or_Country: records[0].State_or_Country,
        Foreign_Address: records[0].Foreign_Address,
        Foreign_Unit: records[0].Foreign_Unit,
        Foreign_Unit_Number: records[0].Foreign_Unit_Number,
        Foreign_City: records[0].Foreign_City,
        Foreign_Province: records[0].Foreign_Province,
        Foreign_Postal_Code: records[0].Foreign_Postal_Code,
        Foreign_Country: records[0].Foreign_Country,
        Type_of_Petition: records[0].Type_of_Petition,
        Highest_Education: records[0].Highest_Education,
        University_Name: records[0].University_Name,
        Date_Degree_Awarded: records[0].Date_Degree_Awarded,
        Type_of_U_S_Degree: records[0].Type_of_U_S_Degree,
        Major_Field: records[0].Major_Field,
        University_Address: records[0].University_Address,
        University_Unit: records[0].University_Unit,
        University_Unit_Number: records[0].University_Unit_Number,
        University_City: records[0].University_City,
        University_State: records[0].University_State,
        University_Zip_Code: records[0].University_Zip_Code
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
    zohoApi.saveRecord(formContent, "Cases_Info").then(responseRecord => {
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
      <EmployeeForm
        formContent={formContent}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onChangeUpload={onChangeUpload}
        onClickUpload={onClickUpload}
        Gender={choices.gender}
        yesOrNo={choices.yesOrNo}
        currentStatus={choices.maritial}
        currentUnits={choices.units}
        states={choices.states}
        typeOfPetition={choices.typeOfPetition}
        highestEducation={choices.highestEducation}
      />
    </>
  );
}
// H1BEmployee.propTypes = {
//   Full_Name: PropTypes.number.isRequired
// };
export default H1BEmployee;
