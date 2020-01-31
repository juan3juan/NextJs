import React, { useState, useEffect } from "react";
import I765Form from "./I765Form";
import * as zohoApi from "../../server/zoho/zohoApi";
import PropTypes from "prop-types";
import axios from "axios";
import Router from "next/router";
import { withRouter } from "react-router-dom";
import VCode from "./common/captcha";

function I765(props) {
  const [relatedRecords, setRelatedRecords] = useState({
    clientId: "",
    companyId: ""
  });

  const [companyUnits, setCompanyUnits] = useState([
    { id: "0", value: "" },
    { id: "1", value: "Apt" },
    { id: "2", value: "Ste" },
    { id: "3", value: "Flr" }
  ]);
  const [states, setStates] = useState([
    { id: "0", value: "" },
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
    { id: "0", value: "" },
    { id: "1", value: "None" },
    { id: "2", value: "Hour" },
    { id: "3", value: "Week" },
    { id: "4", value: "Month" },
    { id: "5", value: "Year" }
  ]);
  const [yesOrNo, setYesOrNo] = useState([
    { id: "0", value: "" },
    { id: "1", value: "Yes" },
    { id: "2", value: "No" }
  ]);
  const [formContent, setFormContent] = useState({});
  const [clientContent, setClientContent] = useState({
    clientId: "",
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
    companyId: "",
    Account_Number: "",
    E_Verify_ID: ""
  });

  const [caseInfoContent, setCaseInfoContent] = useState({
    caseInfoId: "",
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
      console.log("records :");
      console.log(records[0]);

      // get record from client
      zohoApi
        .getRecordByID(records[0].Related_Client.id, "Contacts")
        .then(clientRecords => {
          console.log("clientRecords");
          console.log(clientRecords[0]);
          setClientContent({
            ...clientContent,
            clientId: clientRecords[0].id,
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
            companyId: companyRecords[0].id,
            Account_Number: companyRecords[0].Account_Number,
            E_Verify_ID: companyRecords[0].E_Verify_ID
          });
        });

      setCaseInfoContent({
        ...caseInfoContent,
        caseInfoId: records[0].id,
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
    setFormContent({
      ...formContent,
      [target.name]: target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // if (vcode.vcodeInput.toUpperCase() !== vcode.vcodeProduce.toUpperCase())
    //   alert("vcode is not correct!");
    zohoApi.saveRecord(formContent).then(responseRecord => {
      console.log("responseRecord");
      console.log(responseRecord);
      setFormContent({
        ...clientContent,
        ...clientContent,
        ...caseInfoContent
      });
      zohoApi.uploadAttachment(formContent);
      if (responseRecord.ok) Router.push("/success");
      else alert("fail");
    });
  }

  return (
    <>
      <I765Form
        companyUnits={companyUnits}
        states={states}
        wage={wage}
        yesOrNo={yesOrNo}
        formContent={formContent}
        clientContent={clientContent}
        companyContent={companyContent}
        onChange={handleChange}
        onSubmit={handleSubmit}
        VCode={VCode}
      />
    </>
  );
}
// H1BEmployer.propTypes = {
//   Full_Name: PropTypes.number.isRequired
// };
export default I765;
