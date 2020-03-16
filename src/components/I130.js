import React, { useState, useEffect } from "react";
import I130Form from "./I130Form";
//import { getRecord, saveRecord } from "../server/zoho/zohoApi";
import * as zohoApi from "../../server/zoho/zohoApi";
import PropTypes from "prop-types";
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
    id: ""
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
    Country_of_Citizenship: "",
    Country_of_Birth: "",
    Date_of_Birth: "",
    A_Number: "111",
    Marriage_Information: ""
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
            splitMarriageInfo(clientRecords[0].Marriage_Information);
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
              Country_of_Citizenship: clientRecords[0].Country_of_Citizenship,
              Country_of_Birth: clientRecords[0].Country_of_Birth,
              Date_of_Birth: clientRecords[0].Date_of_Birth,
              A_Number: clientRecords[0].A_Number,
              Marriage_Information: clientRecords[0].Marriage_Information
            });
          });
      }
      if (records[0].Related_Case != null) {
        zohoApi
          .getRecordByID(records[0].Related_Case.id, "Deals")
          .then(casemmgRecords => {
            setCaseMmgContent({
              ...caseMmgContent,
              id: casemmgRecords[0].id
            });
          });
      }
      setFormContent({
        ...formContent,
        id: records[0].id
      });
    });
  }, []);

  // useEffect(() => {
  //   integrateMarriageInfo(marriageObj);
  // }, [marriageObj]);
  console.log("clientContent---");
  console.log(marriageObj);
  console.log(clientContent);
  console.log(formContent);
  console.log(caseMmgContent);
  function handleChange({ target }) {
    setClientContent({
      ...clientContent,
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

    let clientResp = await zohoApi.saveRecord(clientContent, "Contacts");
    let caseMmgResp = await zohoApi.saveRecord(caseMmgContent, "Deals");
    //    let caseInfoResp = await zohoApi.saveRecord(caseInfoContent, "Cases_Info");

    zohoApi.uploadAttachment(formContent);
    if (clientResp.ok && caseMmgResp.ok) Router.push("/success");
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
    console.log("marriageInfo----------");
    console.log(marriageInfo);
    for (let i = 0; i < marriageInfo.length; i++) {
      let splits = marriageInfo[i].split(":");
      if (splits[0].includes("MarriedTimes"))
        marriageObjRes.MarriedTimes = splits[1].trim();
      if (splits[0].includes("DateOfCurrentMarriage"))
        marriageObjRes.DateOfCurrentMarriage = splits[1].trim();
      if (splits[0].includes("City")) marriageObjRes.City = splits[1].trim();
    }
    console.log("marriageObj.MarriedTimes");
    console.log(marriageObjRes);
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

    console.log("***********************************");
    console.log(clientContent.Marriage_Information);
    clientContent.Marriage_Information = marriageString;
    console.log("***********************************");
    console.log(clientContent.Marriage_Information);
    // setClientContent({
    //   ...clientContent,
    //   Marriage_Information: marriageString
    //});
  }

  return (
    <>
      <I130Form
        formContent={formContent}
        clientContent={clientContent}
        marriageObj={marriageObj}
        Units={choices.units}
        states={choices.states}
        wage={choices.wage}
        yesOrNo={choices.yesOrNo}
        Gender={choices.gender}
        onChange={handleChange}
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
