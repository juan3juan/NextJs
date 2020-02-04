import React, { useState, useEffect } from "react";
import I765Form from "./I765Form";
import * as zohoApi from "../../server/zoho/zohoApi";
import PropTypes from "prop-types";
import axios from "axios";
import Router from "next/router";
import { withRouter } from "react-router-dom";
import { choices } from "./common/choices";

function I765(props) {
  const [formContent, setFormContent] = useState({});
  const [clientContent, setClientContent] = useState({
    id: "",
    First_Name: "",
    Last_Name: "",
    Phone: "",
    Gender: "",
    Marital_Status: "",
    SSN: "",
    Mailing_Street: "",
    Mailing_Unit: "",
    Mailing_Unit_Number: "",
    Mailing_City: "",
    Mailing_State: "",
    Mailing_Zip: "",
    Father_s_Last_Name: "",
    Father_s_First_Name: "",
    Mother_s_Last_Name: "",
    Mother_s_First_Name: "",
    Country_of_Citizenship: "",
    City_of_Birth: "",
    Province_of_Birth: "",
    Country_of_Birth: "",
    Date_of_Birth: "",
    I_94_No: "",
    Passport_Number: "",
    Date_Passport_Expired: "",
    Date_of_Last_Entry: "",
    Place_of_Last_Entry: "",
    Status_of_Last_Entry: "",
    Current_Status: "",
    A_Number: "",
    SEVIS_No: ""
  });

  const [companyContent, setCompanyContent] = useState({
    id: "",
    Account_Number: "",
    E_Verify_ID: ""
  });

  const [caseInfoContent, setCaseInfoContent] = useState({
    id: "",
    Eligibility_Category: "",
    Type_of_U_S_Degree: "",
    Has_SSA: "",
    Any_Same_Category_Petition_Before: ""
  });

  //here for the first time init value, like componentDidMount
  useEffect(() => {
    // get record from caseInfo
    zohoApi.getRecordByID(props.id, "Cases_Info").then(function(records) {
      //zohoApi.getRecordByID(id).then(records => {
      //let data = JSON.parse(records.body);
      // console.log("records :");
      // console.log(records[0]);
      console.log("choices");
      console.log(choices.yesOrNo);
      // get record from client
      zohoApi
        .getRecordByID(records[0].Related_Client.id, "Contacts")
        .then(clientRecords => {
          console.log("clientRecords");
          console.log(clientRecords[0]);
          setClientContent({
            ...clientContent,
            id: clientRecords[0].id,
            First_Name: clientRecords[0].First_Name,
            Last_Name: clientRecords[0].Last_Name,
            Phone: clientRecords[0].Phone,
            Gender: clientRecords[0].Gender,
            Marital_Status: clientRecords[0].Marital_Status,
            SSN: clientRecords[0].SSN,
            Mailing_Street: clientRecords[0].Mailing_Street,
            Mailing_Unit: clientRecords[0].Mailing_Unit,
            Mailing_Unit_Number: clientRecords[0].Mailing_Unit_Number,
            Mailing_City: clientRecords[0].Mailing_City,
            Mailing_State: clientRecords[0].Mailing_State,
            Mailing_Zip: clientRecords[0].Mailing_Zip,
            Father_s_Last_Name: clientRecords[0].Father_s_Last_Name,
            Father_s_First_Name: clientRecords[0].Father_s_First_Name,
            Mother_s_Last_Name: clientRecords[0].Mother_s_Last_Name,
            Mother_s_First_Name: clientRecords[0].Mother_s_First_Name,
            Country_of_Citizenship: clientRecords[0].Country_of_Citizenship,
            City_of_Birth: clientRecords[0].City_of_Birth,
            Province_of_Birth: clientRecords[0].Province_of_Birth,
            Country_of_Birth: clientRecords[0].City_of_Birth,
            Date_of_Birth: clientRecords[0].Date_of_Birth,
            I_94_No: clientRecords[0].I_94_No,
            Passport_Number: clientRecords[0].Passport_Number,
            Date_Passport_Expired: clientRecords[0].Date_Passport_Expired,
            Date_of_Last_Entry: clientRecords[0].Date_of_Last_Entry,
            Place_of_Last_Entry: clientRecords[0].Place_of_Last_Entry,
            Status_of_Last_Entry: clientRecords[0].Status_of_Last_Entry,
            Current_Status: clientRecords[0].Current_Status,
            A_Number: clientRecords[0].A_Number,
            SEVIS_No: clientRecords[0].SEVIS_No
          });
        });
      zohoApi
        .getRecordByID(records[0].Related_Company.id, "Accounts")
        .then(companyRecords => {
          setCompanyContent({
            ...companyContent,
            id: companyRecords[0].id,
            Account_Number: companyRecords[0].Account_Number,
            E_Verify_ID: companyRecords[0].E_Verify_ID
          });
        });

      setCaseInfoContent({
        ...caseInfoContent,
        id: records[0].id,
        Eligibility_Category: records[0].Eligibility_Category,
        Type_of_U_S_Degree: records[0].Type_of_U_S_Degree,
        Has_SSA: records[0].Has_SSA,
        Any_Same_Category_Petition_Before:
          records[0].Any_Same_Category_Petition_Before
      });
    });
  }, []);

  function handleChange({ target }) {
    setClientContent({
      ...clientContent,
      [target.name]: target.value
    });
    setCompanyContent({
      ...companyContent,
      [target.name]: target.value
    });
    setCaseInfoContent({
      ...caseInfoContent,
      [target.name]: target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // if (vcode.vcodeInput.toUpperCase() !== vcode.vcodeProduce.toUpperCase())
    //   alert("vcode is not correct!");
    let clientResp = await zohoApi.saveRecord(clientContent, "Contacts");
    let companyResp = await zohoApi.saveRecord(companyContent, "Accounts");
    let caseInfoResp = await zohoApi.saveRecord(caseInfoContent, "Cases_Info");

    console.log("clientResp");
    console.log(clientResp);

    if (clientResp.ok && companyResp.ok && caseInfoResp.ok)
      Router.push("/success");
    else alert("fail");
  }

  return (
    <>
      <I765Form
        companyUnits={choices.units}
        states={choices.states}
        wage={choices.wage}
        yesOrNo={choices.yesOrNo}
        gender={choices.gender}
        maritial={choices.maritial}
        statusLastEntry={choices.statusLastEntry}
        eligibilityCategory={choices.eligibilityCategory}
        clientContent={clientContent}
        companyContent={companyContent}
        caseInfoContent={caseInfoContent}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
// H1BEmployer.propTypes = {
//   Full_Name: PropTypes.number.isRequired
// };
export default I765;
