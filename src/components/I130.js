import React, { useState, useEffect } from "react";
import I130Form from "./I130Form";
//import { getRecord, saveRecord } from "../server/zoho/zohoApi";
import * as zohoApi from "../../server/zoho/zohoApi";
import axios from "axios";
import Router from "next/router";
import { withRouter } from "react-router-dom";
import { choices } from "./common/choices";

function I130(props) {
  // for upload files
  const [selectedFile, setSelectedFile] = useState();
  const [formContent, setFormContent] = useState({
    id: ""
  });
  //
  const [caseMmgContent, setCaseMmgContent] = useState({
    id: "",
    Anyone_Filed_for_This_Beneficiary_Before: "",
    Was_Beneficiary_ever_in_the_US: "",
    Relationship: "",
    Child_Parent_Relationship: "",
    Sibling_Related_by_adoption: "",
    Gain_PR_Citizen_Through_Adoption: ""
  });
  const [clientContent, setClientContent] = useState({
    id: "",
    First_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Phone: "",
    Gender: "",
    SSN: "",
    Mailing_Street: "",
    Mailing_Unit: "",
    Mailing_Unit_Number: "",
    Mailing_City: "",
    Mailing_State: "",
    Mailing_Zip: "",
    Other_Street: "",
    Other_Unit: "",
    Other_Unit_Number: "",
    Other_City: "",
    Other_State: "",
    Other_Zip: "",
    Country_of_Citizenship: "",
    Country_of_Birth: "",
    Date_of_Birth: "",
    A_Number: "",
    Marital_Status: "",
    Marriage_Information: "",
    Is_mailing_address_same_as_physical_address: "",
    US_Citizen_PR: "",
    Acquire_citizenship_through: "",
    Obtained_Certificate_of_Naturalization_or_Citizens: "",
    Citizenship_Certificate_Number: "",
    PR_Class_of_Admission: "",
    Ethnicity: "",
    Height: "",
    Weight: "",
    Eye_Color: "",
    Hair_Color: "",
    Has_Other_Name: ""
  });
  const [beneficiary, setBeneficiary] = useState({
    id: "",
    First_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Phone: "",
    Email: "",
    Gender: "",
    SSN: "",
    Mailing_Street: "",
    Mailing_Unit: "",
    Mailing_Unit_Number: "",
    Mailing_City: "",
    Mailing_State: "",
    Mailing_Zip: "",
    Other_Street: "",
    Other_Unit: "",
    Other_Unit_Number: "",
    Other_City: "",
    Other_State: "",
    Other_Zip: "",
    Country_of_Citizenship: "",
    Country_of_Birth: "",
    Date_of_Birth: "",
    A_Number: "",
    Marital_Status: "",
    Marriage_Information: "",
    Is_mailing_address_same_as_physical_address: "",
    Travel_Document_Number: "",
    Country_Passport_Issued: "",
    Date_Passport_Expired: "",
    Has_Other_Name: "",
    Is_Currently_In_US: "",
    Status_of_Last_Entry: "",
    I_94_No: "",
    Date_of_Last_Entry: "",
    Current_Status_Expires: "",
    Passport_Number: "",
    Travel_Document_Number: "",
    Country_Passport_Issued: "",
    Date_Passport_Expired: "",
    EVER_in_immigration_proceedings: ""
  });
  const [marriageObj, setMarriageObj] = useState({
    MarriedTimes: "",
    DateOfCurrent: "",
    Marriage: "",
    City: "",
    State: ""
  });

  useEffect(() => {
    zohoApi.getRecordByID(props.id, "Cases_Info").then(function(records) {
      console.log("choices");
      console.log(choices.yesOrNo);
      // get record from client
      if (records[0].Related_Client != null) {
        zohoApi
          .getRecordByID(records[0].Related_Client.id, "Contacts")
          .then(clientRecords => {
            console.log("clientRecords");
            console.log(clientRecords[0]);
            //set beneficiary
            if (clientRecords[0].Beneficiary != null) {
              zohoApi
                .getRecordByID(clientRecords[0].Beneficiary.id, "Contacts")
                .then(beneficiaryRecords => {
                  console.log("beneficiaryRecords");
                  console.log(beneficiaryRecords[0]);
                  setBeneficiary({
                    ...beneficiary,
                    id: beneficiaryRecords[0].id,
                    First_Name: beneficiaryRecords[0].First_Name,
                    Middle_Name: beneficiaryRecords[0].Middle_Name,
                    Last_Name: beneficiaryRecords[0].Last_Name,
                    Phone: beneficiaryRecords[0].Phone,
                    Email: beneficiaryRecords[0].Email,
                    Gender: beneficiaryRecords[0].Gender,
                    SSN: beneficiaryRecords[0].SSN,
                    Mailing_Street: beneficiaryRecords[0].Mailing_Street,
                    Mailing_Unit: beneficiaryRecords[0].Mailing_Unit,
                    Mailing_Unit_Number:
                      beneficiaryRecords[0].Mailing_Unit_Number,
                    Mailing_City: beneficiaryRecords[0].Mailing_City,
                    Mailing_State: beneficiaryRecords[0].Mailing_State,
                    Mailing_Zip: beneficiaryRecords[0].Mailing_Zip,
                    Other_Street: beneficiaryRecords[0].Other_Street,
                    Other_Unit: beneficiaryRecords[0].Other_Unit,
                    Other_Unit_Number: beneficiaryRecords[0].Other_Unit_Number,
                    Other_City: beneficiaryRecords[0].Other_City,
                    Other_State: beneficiaryRecords[0].Other_State,
                    Other_Zip: beneficiaryRecords[0].Other_Zip,
                    Country_of_Citizenship:
                      beneficiaryRecords[0].Country_of_Citizenship,
                    Country_of_Birth: beneficiaryRecords[0].Country_of_Birth,
                    Date_of_Birth: beneficiaryRecords[0].Date_of_Birth,
                    A_Number: beneficiaryRecords[0].A_Number,
                    Marital_Status: beneficiaryRecords[0].Marital_Status,
                    Marriage_Information:
                      beneficiaryRecords[0].Marriage_Information,
                    Is_mailing_address_same_as_physical_address:
                      beneficiaryRecords[0]
                        .Is_mailing_address_same_as_physical_address,
                    Travel_Document_Number:
                      beneficiaryRecords[0].Travel_Document_Number,
                    Country_Passport_Issued:
                      beneficiaryRecords[0].Country_Passport_Issued,
                    Date_Passport_Expired:
                      beneficiaryRecords[0].Date_Passport_Expired,
                    Status_of_Last_Entry:
                      beneficiaryRecords[0].Status_of_Last_Entry,
                    I_94_No: beneficiaryRecords[0].I_94_No,
                    Date_of_Last_Entry:
                      beneficiaryRecords[0].Date_of_Last_Entry,
                    Current_Status_Expires:
                      beneficiaryRecords[0].Current_Status_Expires,
                    Passport_Number: beneficiaryRecords[0].Passport_Number,
                    Travel_Document_Number:
                      beneficiaryRecords[0].Travel_Document_Number,
                    Country_Passport_Issued:
                      beneficiaryRecords[0].Country_Passport_Issued,
                    Date_Passport_Expired:
                      beneficiaryRecords[0].Date_Passport_Expired,
                    EVER_in_immigration_proceedings:
                      beneficiaryRecords[0].EVER_in_immigration_proceedings
                  });
                });
            }
            // split multi-line
            splitMarriageInfo(clientRecords[0].Marriage_Information);
            // set peti info
            setClientContent({
              ...clientContent,
              id: clientRecords[0].id,
              First_Name: clientRecords[0].First_Name,
              Middle_Name: clientRecords[0].Middle_Name,
              Last_Name: clientRecords[0].Last_Name,
              Phone: clientRecords[0].Phone,
              Gender: clientRecords[0].Gender,
              SSN: clientRecords[0].SSN,
              Mailing_Street: clientRecords[0].Mailing_Street,
              Mailing_Unit: clientRecords[0].Mailing_Unit,
              Mailing_Unit_Number: clientRecords[0].Mailing_Unit_Number,
              Mailing_City: clientRecords[0].Mailing_City,
              Mailing_State: clientRecords[0].Mailing_State,
              Mailing_Zip: clientRecords[0].Mailing_Zip,
              Other_Street: clientRecords[0].Other_Street,
              Other_Unit: clientRecords[0].Other_Unit,
              Other_Unit_Number: clientRecords[0].Other_Unit_Number,
              Other_City: clientRecords[0].Other_City,
              Other_State: clientRecords[0].Other_State,
              Other_Zip: clientRecords[0].Other_Zip,
              Country_of_Citizenship: clientRecords[0].Country_of_Citizenship,
              Country_of_Birth: clientRecords[0].Country_of_Birth,
              Date_of_Birth: clientRecords[0].Date_of_Birth,
              A_Number: clientRecords[0].A_Number,
              Marital_Status: clientRecords[0].Marital_Status,
              Marriage_Information: clientRecords[0].Marriage_Information,
              Is_mailing_address_same_as_physical_address:
                clientRecords[0].Is_mailing_address_same_as_physical_address,
              US_Citizen_PR: clientRecords[0].US_Citizen_PR,
              Acquire_citizenship_through:
                clientRecords[0].Acquire_citizenship_through,
              Obtained_Certificate_of_Naturalization_or_Citizens:
                clientRecords[0]
                  .Obtained_Certificate_of_Naturalization_or_Citizens,
              Citizenship_Certificate_Number:
                clientRecords[0].Citizenship_Certificate_Number,
              PR_Class_of_Admission: clientRecords[0].PR_Class_of_Admission,
              Ethnicity: clientRecords[0].Ethnicity,
              Height: clientRecords[0].Height,
              Weight: clientRecords[0].Weight,
              Eye_Color: clientRecords[0].Eye_Color,
              Hair_Color: clientRecords[0].Hair_Color
            });
          });
      }
      if (records[0].Related_Case != null) {
        zohoApi
          .getRecordByID(records[0].Related_Case.id, "Deals")
          .then(casemmgRecords => {
            setCaseMmgContent({
              ...caseMmgContent,
              id: casemmgRecords[0].id,
              Anyone_Filed_for_This_Beneficiary_Before:
                casemmgRecords[0].Anyone_Filed_for_This_Beneficiary_Before,
              Was_Beneficiary_ever_in_the_US:
                casemmgRecords[0].Was_Beneficiary_ever_in_the_US,
              Relationship: casemmgRecords[0].Relationship,
              Child_Parent_Relationship:
                casemmgRecords[0].Child_Parent_Relationship,
              Sibling_Related_by_adoption:
                casemmgRecords[0].Sibling_Related_by_adoption,
              Gain_PR_Citizen_Through_Adoption:
                casemmgRecords[0].Gain_PR_Citizen_Through_Adoption
            });
          });
      }
      setFormContent({
        ...formContent,
        id: records[0].id
      });
    });
  }, []);

  function handleChange({ target }) {
    setClientContent({
      ...clientContent,
      [target.name]: target.value
    });
  }

  function handleBeneficiaryChange({ target }) {
    setBeneficiary({
      ...beneficiary,
      [target.name]: target.value
    });
  }

  function handleCaseMmgChange({ target }) {
    setCaseMmgContent({
      ...caseMmgContent,
      [target.name]: target.value
    });
  }

  function handleMarriageChange({ target }) {
    setMarriageObj({
      ...marriageObj,
      [target.name]: target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    integrateMarriageInfo(marriageObj);
    console.log("clientContent--submit");
    console.log(marriageObj);
    console.log(clientContent);
    console.log(beneficiary);

    let clientResp = await zohoApi.saveRecord(clientContent, "Contacts");
    let beneResp = await zohoApi.saveRecord(beneficiary, "Contacts");
    let caseMmgResp = await zohoApi.saveRecord(caseMmgContent, "Deals");
    //    let caseInfoResp = await zohoApi.saveRecord(caseInfoContent, "Cases_Info");

    zohoApi.uploadAttachment(formContent);
    if (clientResp.ok && beneResp.ok && caseMmgResp.ok) Router.push("/success");
    else alert("fail");
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
    data.append("pb", "130");

    if (selectedFile == null) alert("No File Upload!");
    else {
      for (let x = 0; x < selectedFile.length; x++) {
        data.append("file", selectedFile[x]);
      }
      axios.post("/upload", data, {}).then(res => {
        console.log(res.statusText);
      });
      alert("upload success!");
    }
  }

  //split multi-line from CRM
  function splitMarriageInfo(info) {
    let marriageObjRes = {};
    //  let marriageInfo = clientContent.Marriage_Information.split(";");
    let marriageInfo = info.split(";");
    for (let i = 0; i < marriageInfo.length; i++) {
      let splits = marriageInfo[i].split(":");
      if (splits[0].includes("MarriedTimes"))
        marriageObjRes.MarriedTimes = splits[1].trim();
      if (splits[0].includes("DateOfCurrentMarriage"))
        marriageObjRes.DateOfCurrentMarriage = splits[1].trim();
      if (splits[0].includes("City")) marriageObjRes.City = splits[1].trim();
    }
    setMarriageObj(marriageObjRes);
  }

  // integrate marriage info for submit
  function integrateMarriageInfo(info) {
    const entries = Object.entries(info);
    let marriageString = "";
    for (let i = 0; i < entries.length; i++) {
      marriageString =
        marriageString + entries[i][0] + ":" + entries[i][1] + ";";
    }
    // the right method
    // console.log("***********************************");
    // console.log(clientContent.Marriage_Information);
    clientContent.Marriage_Information = marriageString;
    // console.log("***********************************");
    // console.log(clientContent.Marriage_Information);
  }

  return (
    <>
      <I130Form
        formContent={formContent}
        clientContent={clientContent}
        beneficiary={beneficiary}
        caseMmgContent={caseMmgContent}
        marriageObj={marriageObj}
        Units={choices.units}
        states={choices.states}
        yesOrNo={choices.yesOrNo}
        CitizenOrPR={choices.CitizenOrPR}
        AcquireCitizenshipThrough={choices.AcquireCitizenshipThrough}
        wage={choices.wage}
        Gender={choices.gender}
        maritial={choices.maritial}
        Ethnicity={choices.Ethnicity}
        EyeColor={choices.EyeColor}
        HairColor={choices.HairColor}
        I130ApplyFor={choices.I130ApplyFor}
        I130ChildParentRelationship={choices.I130ChildParentRelationship}
        onChange={handleChange}
        onBeneficiaryChange={handleBeneficiaryChange}
        onCaseMmgChange={handleCaseMmgChange}
        onMarriageChange={handleMarriageChange}
        onSubmit={handleSubmit}
        onChangeUpload={onChangeUpload}
        onClickUpload={onClickUpload}
      />
    </>
  );
}
// I131.propTypes = {
//   Full_Name: PropTypes.number.isRequired
// };
export default I130;
