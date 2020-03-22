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
    DateOfCurrentMarriage: "",
    City: "",
    State: "",
    Province: "",
    Country: ""
  });
  const [parentObj, setParentObj] = useState({});
  const [citizenObj, setCitizenObj] = useState({});
  const [employmentObj, setEmploymentObj] = useState({});
  const [marriageObjBene, setMarriageObjBene] = useState({});
  const [familyBene, setFamilyBene] = useState({});
  const [employmentBene, setEmploymentBene] = useState({});
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
                  // split multi-line
                  splitmarriageInfoBene(
                    beneficiaryRecords[0].Marriage_Information
                  );
                  splitFamilyBeneInfo(beneficiaryRecords[0].Family_Information);
                  splitEmploymentBeneInfo(
                    beneficiaryRecords[0].Employment_History
                  );
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
            splitParentInfo(clientRecords[0].Parents_Information);
            splitCitizenInfo(clientRecords[0].Citizen_Green_Card_Information);
            splitEmploymentInfo(clientRecords[0].Employment_History);
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
  function handleParentChange({ target }) {
    setParentObj({
      ...parentObj,
      [target.name]: target.value
    });
  }
  function handleCitizenChange({ target }) {
    setCitizenObj({
      ...citizenObj,
      [target.name]: target.value
    });
  }
  function handleEmploymentChange({ target }) {
    setEmploymentObj({
      ...employmentObj,
      [target.name]: target.value
    });
  }
  function handleBeneMarriageChange({ target }) {
    setMarriageObjBene({
      ...marriageObjBene,
      [target.name]: target.value
    });
  }
  function handleFamilyBeneChange({ target }) {
    setFamilyBene({
      ...familyBene,
      [target.name]: target.value
    });
  }
  function handleEmploymentBeneChange({ target }) {
    setEmploymentBene({
      ...employmentBene,
      [target.name]: target.value
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();

    integrateMarriageInfo(marriageObj);
    integrateParentInfo(parentObj);
    integrateCitizenInfo(citizenObj);
    integrateEmploymentInfo(employmentObj);
    integratemarriageInfoBene(marriageObjBene);
    integrateFamilyBeneInfo(familyBene);
    integrateEmploymentBeneInfo(employmentBene);

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

  //split multi-line from CRM marriage info
  function splitMarriageInfo(info) {
    if (info !== undefined && info !== null) {
      let marriageObjRes = {};
      //  let marriageInfo = clientContent.Marriage_Information.split(";");
      let marriageInfo = info.split(";");
      for (let i = 0; i < marriageInfo.length; i++) {
        if (marriageInfo[i] !== undefined && marriageInfo[i] !== null) {
          let splits = marriageInfo[i].split(":");
          if (splits[0].includes("MarriedTimes"))
            marriageObjRes.MarriedTimes = splits[1].trim();
          if (splits[0].includes("DateOfCurrentMarriage"))
            marriageObjRes.DateOfCurrentMarriage = splits[1].trim();
          if (splits[0].includes("City"))
            marriageObjRes.City = splits[1].trim();
          if (splits[0].includes("State"))
            marriageObjRes.State = splits[1].trim();
          if (splits[0].includes("Province"))
            marriageObjRes.Province = splits[1].trim();
          if (splits[0].includes("Country"))
            marriageObjRes.Country = splits[1].trim();
          if (splits[0].includes("Spouse1_First_Name"))
            marriageObjRes.Spouse1_First_Name = splits[1].trim();
          if (splits[0].includes("Spouse1_Last_Name"))
            marriageObjRes.Spouse1_Last_Name = splits[1].trim();
          if (splits[0].includes("Spouse1_Middle_Name"))
            marriageObjRes.Spouse1_Middle_Name = splits[1].trim();
          if (splits[0].includes("Spouse1DateOfMarriageEnd"))
            marriageObjRes.Spouse1DateOfMarriageEnd = splits[1].trim();
          if (splits[0].includes("Spouse2_First_Name"))
            marriageObjRes.Spouse2_First_Name = splits[1].trim();
          if (splits[0].includes("Spouse2_Last_Name"))
            marriageObjRes.Spouse2_Last_Name = splits[1].trim();
          if (splits[0].includes("Spouse2_Middle_Name"))
            marriageObjRes.Spouse2_Middle_Name = splits[1].trim();
          if (splits[0].includes("Spouse2DateOfMarriageEnd"))
            marriageObjRes.Spouse2DateOfMarriageEnd = splits[1].trim();
        }
      }
      setMarriageObj(marriageObjRes);
    }
  }

  // integrate marriage info for submit
  function integrateMarriageInfo(info) {
    const entries = Object.entries(info);
    let marriageString = "";
    for (let i = 0; i < entries.length; i++) {
      marriageString =
        marriageString + entries[i][0] + ":" + entries[i][1] + ";\n";
    }
    // the right method
    // console.log("***********************************");
    // console.log(clientContent.Marriage_Information);
    clientContent.Marriage_Information = marriageString;
    // console.log("***********************************");
    // console.log(clientContent.Marriage_Information);
  }

  //split multi-line from CRM parent info
  function splitParentInfo(info) {
    if (info !== undefined && info !== null) {
      let parentObjRes = {};
      let parentInfo = info.split(";");
      for (let i = 0; i < parentInfo.length; i++) {
        if (parentInfo[i] !== undefined && parentInfo[i] !== null) {
          let splits = parentInfo[i].split(":");
          if (splits[0].includes("Parent1FirstName"))
            parentObjRes.Parent1FirstName = splits[1].trim();
          if (splits[0].includes("Parent1LastName"))
            parentObjRes.Parent1LastName = splits[1].trim();
          if (splits[0].includes("Parent1MiddleName"))
            parentObjRes.Parent1MiddleName = splits[1].trim();
          if (splits[0].includes("Parent1DOB"))
            parentObjRes.Parent1DOB = splits[1].trim();
          if (splits[0].includes("Parent1Sex"))
            parentObjRes.Parent1Sex = splits[1].trim();
          if (splits[0].includes("Parent1CountryOfBirth"))
            parentObjRes.Parent1CountryOfBirth = splits[1].trim();
          if (splits[0].includes("Parent1CityOfResidence"))
            parentObjRes.Parent1CityOfResidence = splits[1].trim();
          if (splits[0].includes("Parent1CountryOfResidence"))
            parentObjRes.Parent1CountryOfResidence = splits[1].trim();
          if (splits[0].includes("Parent2FirstName"))
            parentObjRes.Parent2FirstName = splits[1].trim();
          if (splits[0].includes("Parent2LastName"))
            parentObjRes.Parent2LastName = splits[1].trim();
          if (splits[0].includes("Parent2MiddleName"))
            parentObjRes.Parent2MiddleName = splits[1].trim();
          if (splits[0].includes("Parent2DOB"))
            parentObjRes.Parent2DOB = splits[1].trim();
          if (splits[0].includes("Parent2Sex"))
            parentObjRes.Parent2Sex = splits[1].trim();
          if (splits[0].includes("Parent2CountryOfBirth"))
            parentObjRes.Parent2CountryOfBirth = splits[1].trim();
          if (splits[0].includes("Parent2CityOfResidence"))
            parentObjRes.Parent2CityOfResidence = splits[1].trim();
          if (splits[0].includes("Parent2CountryOfResidence"))
            parentObjRes.Parent2CountryOfResidence = splits[1].trim();
        }
      }
      setMarriageObj(parentObjRes);
    }
  }

  // integrate parent info for submit
  function integrateParentInfo(info) {
    const entries = Object.entries(info);
    let parentString = "";
    for (let i = 0; i < entries.length; i++) {
      parentString = parentString + entries[i][0] + ":" + entries[i][1] + ";\n";
    }
    clientContent.Parents_Information = parentString;
  }

  //split multi-line from CRM citizen & green card info
  function splitCitizenInfo(info) {
    if (info !== undefined && info !== null) {
      let citizentObjRes = {};
      let citizentInfo = info.split(";");
      for (let i = 0; i < citizentInfo.length; i++) {
        if (citizentInfo[i] !== undefined && citizentInfo[i] !== null) {
          let splits = citizentInfo[i].split(":");
          if (splits[0].includes("CitizenshipPlaceOfIssuance"))
            citizentObjRes.CitizenshipPlaceOfIssuance = splits[1].trim();
          if (splits[0].includes("CitizenshipDateOfIssuance"))
            citizentObjRes.CitizenshipDateOfIssuance = splits[1].trim();
          if (splits[0].includes("PRDateOfAdmission"))
            citizentObjRes.PRDateOfAdmission = splits[1].trim();
          if (splits[0].includes("PRCityOrTown"))
            citizentObjRes.PRCityOrTown = splits[1].trim();
          if (splits[0].includes("PRState"))
            citizentObjRes.PRState = splits[1].trim();
        }
      }
      setCitizenObj(citizentObjRes);
    }
  }

  // integrate Citizen info for submit
  function integrateCitizenInfo(info) {
    const entries = Object.entries(info);
    let citizenString = "";
    for (let i = 0; i < entries.length; i++) {
      citizenString =
        citizenString + entries[i][0] + ":" + entries[i][1] + ";\n";
    }
    clientContent.Citizen_Green_Card_Information = citizenString;
  }

  //split multi-line from CRM employment history
  function splitEmploymentInfo(info) {
    if (info !== undefined && info !== null) {
      let employmentObjRes = {};
      let employmentInfo = info.split(";");
      for (let i = 0; i < employmentInfo.length; i++) {
        if (employmentInfo[i] !== undefined && employmentInfo[i] !== null) {
          let splits = employmentInfo[i].split(":");
          if (splits[0].includes("Company1"))
            employmentObjRes.Company1 = splits[1].trim();
          if (splits[0].includes("Employer1_Street"))
            employmentObjRes.Employer1_Street = splits[1].trim();
          if (splits[0].includes("Employer1_Unit"))
            employmentObjRes.Employer1_Unit = splits[1].trim();
          if (splits[0].includes("Employer1_Unit_Number"))
            employmentObjRes.Employer1_Unit_Number = splits[1].trim();
          if (splits[0].includes("Employer1_City"))
            employmentObjRes.Employer1_City = splits[1].trim();
          if (splits[0].includes("Employer1_State"))
            employmentObjRes.Employer1_State = splits[1].trim();
          if (splits[0].includes("Employer1_Zip"))
            employmentObjRes.Employer1_Zip = splits[1].trim();
          if (splits[0].includes("Employer1_Province"))
            employmentObjRes.Employer1_Province = splits[1].trim();
          if (splits[0].includes("Employer1_Postal_Code"))
            employmentObjRes.Employer1_Postal_Code = splits[1].trim();
          if (splits[0].includes("Employer1_Country"))
            employmentObjRes.Employer1_Country = splits[1].trim();
          if (splits[0].includes("Employer1_Your_Occupation"))
            employmentObjRes.Employer1_Your_Occupation = splits[1].trim();
          if (splits[0].includes("Employer1_Date_From"))
            employmentObjRes.Employer1_Date_From = splits[1].trim();
          if (splits[0].includes("Employer1_Date_To"))
            employmentObjRes.Employer1_Date_To = splits[1].trim();
          if (splits[0].includes("Company2"))
            employmentObjRes.Company2 = splits[1].trim();
          if (splits[0].includes("Employer2_Street"))
            employmentObjRes.Employer2_Street = splits[1].trim();
          if (splits[0].includes("Employer2_Unit"))
            employmentObjRes.Employer2_Unit = splits[1].trim();
          if (splits[0].includes("Employer2_Unit_Number"))
            employmentObjRes.Employer2_Unit_Number = splits[1].trim();
          if (splits[0].includes("Employer2_City"))
            employmentObjRes.Employer2_City = splits[1].trim();
          if (splits[0].includes("Employer2_State"))
            employmentObjRes.Employer2_State = splits[1].trim();
          if (splits[0].includes("Employer2_Zip"))
            employmentObjRes.Employer2_Zip = splits[1].trim();
          if (splits[0].includes("Employer2_Province"))
            employmentObjRes.Employer2_Province = splits[1].trim();
          if (splits[0].includes("Employer2_Postal_Code"))
            employmentObjRes.Employer2_Postal_Code = splits[1].trim();
          if (splits[0].includes("Employer2_Country"))
            employmentObjRes.Employer2_Country = splits[1].trim();
          if (splits[0].includes("Employer2_Your_Occupation"))
            employmentObjRes.Employer2_Your_Occupation = splits[1].trim();
          if (splits[0].includes("Employer2_Date_From"))
            employmentObjRes.Employer2_Date_From = splits[1].trim();
          if (splits[0].includes("Employer2_Date_To"))
            employmentObjRes.Employer2_Date_To = splits[1].trim();
        }
      }
      setEmploymentObj(employmentObjRes);
    }
  }

  // integrate Citizen info for submit
  function integrateEmploymentInfo(info) {
    const entries = Object.entries(info);
    let employmentString = "";
    for (let i = 0; i < entries.length; i++) {
      employmentString =
        employmentString + entries[i][0] + ":" + entries[i][1] + ";\n";
    }
    clientContent.Employment_History = employmentString;
  }

  //split multi-line from CRM Bene marriage info
  function splitmarriageInfoBene(info) {
    if (info !== undefined && info !== null) {
      let marriageObjResBene = {};
      let marriageInfoBene = info.split(";");
      for (let i = 0; i < marriageInfoBene.length; i++) {
        if (marriageInfoBene[i] !== undefined && marriageInfoBene[i] !== null) {
          let splits = marriageInfoBene[i].split(":");
          if (splits[0].includes("MarriedTimes"))
            marriageObjResBene.MarriedTimes = splits[1].trim();
          if (splits[0].includes("DateOfCurrentMarriage"))
            marriageObjResBene.DateOfCurrentMarriage = splits[1].trim();
          if (splits[0].includes("City"))
            marriageObjResBene.City = splits[1].trim();
          if (splits[0].includes("State"))
            marriageObjResBene.State = splits[1].trim();
          if (splits[0].includes("Province"))
            marriageObjResBene.Province = splits[1].trim();
          if (splits[0].includes("Country"))
            marriageObjResBene.Country = splits[1].trim();
          if (splits[0].includes("Spouse1_First_Name"))
            marriageObjResBene.Spouse1_First_Name = splits[1].trim();
          if (splits[0].includes("Spouse1_Last_Name"))
            marriageObjResBene.Spouse1_Last_Name = splits[1].trim();
          if (splits[0].includes("Spouse1_Middle_Name"))
            marriageObjResBene.Spouse1_Middle_Name = splits[1].trim();
          if (splits[0].includes("Spouse1DateOfMarriageEnd"))
            marriageObjResBene.Spouse1DateOfMarriageEnd = splits[1].trim();
          if (splits[0].includes("Spouse2_First_Name"))
            marriageObjResBene.Spouse2_First_Name = splits[1].trim();
          if (splits[0].includes("Spouse2_Last_Name"))
            marriageObjResBene.Spouse2_Last_Name = splits[1].trim();
          if (splits[0].includes("Spouse2_Middle_Name"))
            marriageObjResBene.Spouse2_Middle_Name = splits[1].trim();
          if (splits[0].includes("Spouse2DateOfMarriageEnd"))
            marriageObjResBene.Spouse2DateOfMarriageEnd = splits[1].trim();
        }
      }
      setMarriageObjBene(marriageObjResBene);
    }
  }

  // integrate Bene marriage info for submit
  function integratemarriageInfoBene(info) {
    const entries = Object.entries(info);
    let marriageString = "";
    for (let i = 0; i < entries.length; i++) {
      marriageString =
        marriageString + entries[i][0] + ":" + entries[i][1] + ";\n";
    }
    beneficiary.Marriage_Information = marriageString;
  }

  //split multi-line from CRM Bene family info
  function splitFamilyBeneInfo(info) {
    if (info !== undefined && info !== null) {
      let ResBene = {};
      let infoBene = info.split(";");
      for (let i = 0; i < infoBene.length; i++) {
        if (infoBene[i] !== undefined && infoBene[i] !== null) {
          let splits = infoBene[i].split(":");
          if (splits[0].includes("P1_First_Name"))
            ResBene.P1_First_Name = splits[1].trim();
          if (splits[0].includes("P1_Middle_Name"))
            ResBene.P1_First_Name = splits[1].trim();
          if (splits[0].includes("P1_Last_Name"))
            ResBene.P1_First_Name = splits[1].trim();
          if (splits[0].includes("P1_Relationship"))
            ResBene.P1_First_Name = splits[1].trim();
          if (splits[0].includes("P1_DateOfBirth"))
            ResBene.P1_First_Name = splits[1].trim();
          if (splits[0].includes("P1_CountryOfBirth"))
            ResBene.P1_First_Name = splits[1].trim();
          if (splits[0].includes("P2_First_Name"))
            ResBene.P2_First_Name = splits[1].trim();
          if (splits[0].includes("P2_Middle_Name"))
            ResBene.P2_First_Name = splits[1].trim();
          if (splits[0].includes("P2_Last_Name"))
            ResBene.P2_First_Name = splits[1].trim();
          if (splits[0].includes("P2_Relationship"))
            ResBene.P2_First_Name = splits[1].trim();
          if (splits[0].includes("P2_DateOfBirth"))
            ResBene.P2_First_Name = splits[1].trim();
          if (splits[0].includes("P2_CountryOfBirth"))
            ResBene.P2_First_Name = splits[1].trim();
          if (splits[0].includes("P3_First_Name"))
            ResBene.P3_First_Name = splits[1].trim();
          if (splits[0].includes("P3_Middle_Name"))
            ResBene.P3_First_Name = splits[1].trim();
          if (splits[0].includes("P3_Last_Name"))
            ResBene.P3_First_Name = splits[1].trim();
          if (splits[0].includes("P3_Relationship"))
            ResBene.P3_First_Name = splits[1].trim();
          if (splits[0].includes("P3_DateOfBirth"))
            ResBene.P3_First_Name = splits[1].trim();
          if (splits[0].includes("P3_CountryOfBirth"))
            ResBene.P3_First_Name = splits[1].trim();
          if (splits[0].includes("P4_First_Name"))
            ResBene.P4_First_Name = splits[1].trim();
          if (splits[0].includes("P4_Middle_Name"))
            ResBene.P4_First_Name = splits[1].trim();
          if (splits[0].includes("P4_Last_Name"))
            ResBene.P4_First_Name = splits[1].trim();
          if (splits[0].includes("P4_Relationship"))
            ResBene.P4_First_Name = splits[1].trim();
          if (splits[0].includes("P4_DateOfBirth"))
            ResBene.P4_First_Name = splits[1].trim();
          if (splits[0].includes("P4_CountryOfBirth"))
            ResBene.P4_First_Name = splits[1].trim();
          if (splits[0].includes("P5_First_Name"))
            ResBene.P5_First_Name = splits[1].trim();
          if (splits[0].includes("P5_Middle_Name"))
            ResBene.P5_First_Name = splits[1].trim();
          if (splits[0].includes("P5_Last_Name"))
            ResBene.P5_First_Name = splits[1].trim();
          if (splits[0].includes("P5_Relationship"))
            ResBene.P5_First_Name = splits[1].trim();
          if (splits[0].includes("P5_DateOfBirth"))
            ResBene.P5_First_Name = splits[1].trim();
          if (splits[0].includes("P5_CountryOfBirth"))
            ResBene.P5_First_Name = splits[1].trim();
        }
      }
      setFamilyBene(ResBene);
    }
  }

  // integrate Bene family info for submit
  function integrateFamilyBeneInfo(info) {
    const entries = Object.entries(info);
    let beneString = "";
    for (let i = 0; i < entries.length; i++) {
      beneString = beneString + entries[i][0] + ":" + entries[i][1] + ";\n";
    }
    beneficiary.Family_Information = beneString;
  }

  //split multi-line from CRM Bene employment info
  function splitEmploymentBeneInfo(info) {
    if (info !== undefined && info !== null) {
      let ResBene = {};
      let infoBene = info.split(";");
      for (let i = 0; i < infoBene.length; i++) {
        if (infoBene[i] !== undefined && infoBene[i] !== null) {
          let splits = infoBene[i].split(":");
          if (splits[0].includes("P1_First_Name"))
            ResBene.P1_First_Name = splits[1].trim();
        }
      }
      setFamilyBene(ResBene);
    }
  }

  // integrate Bene employment info for submit
  function integrateEmploymentBeneInfo(info) {
    const entries = Object.entries(info);
    let beneString = "";
    for (let i = 0; i < entries.length; i++) {
      beneString = beneString + entries[i][0] + ":" + entries[i][1] + ";\n";
    }
    beneficiary.Employment_History = beneString;
  }

  return (
    <>
      <I130Form
        formContent={formContent}
        clientContent={clientContent}
        beneficiary={beneficiary}
        caseMmgContent={caseMmgContent}
        marriageObj={marriageObj}
        parentObj={parentObj}
        citizenObj={citizenObj}
        employmentObj={employmentObj}
        marriageObjBene={marriageObjBene}
        familyBene={familyBene}
        employmentBene={employmentBene}
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
        onParentChange={handleParentChange}
        onCitizenChange={handleCitizenChange}
        onEmploymentChange={handleEmploymentChange}
        onBeneMarriageChange={handleBeneMarriageChange}
        onFamilyBeneChange={handleFamilyBeneChange}
        onEmploymentBeneChange={handleEmploymentBeneChange}
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
