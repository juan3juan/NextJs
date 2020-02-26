import React, { useState, useEffect } from "react";
import I131Form from "./I131Form";
//import { getRecord, saveRecord } from "../server/zoho/zohoApi";
import * as zohoApi from "../../server/zoho/zohoApi";
import PropTypes from "prop-types";
import axios from "axios";
import Router from "next/router";
import { withRouter } from "react-router-dom";
import { choices } from "./common/choices";

function I131(props) {
  // for upload files
  const [selectedFile, setSelectedFile] = useState();
  const [formContent, setFormContent] = useState({
    id: ""
  });
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
    A_Number: ""
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
              A_Number: clientRecords[0].A_Number
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

  function handleChange({ target }) {
    setFormContent({
      ...formContent,
      [target.name]: target.value
    });
    setClientContent({
      ...clientContent,
      [target.name]: target.value
    });
    setCaseMmgContent({
      ...caseMmgContent,
      [target.name]: target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
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
    data.append("pb", "131");

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

  return (
    <>
      <I131Form
        formContent={formContent}
        clientContent={clientContent}
        Units={choices.units}
        states={choices.states}
        wage={choices.wage}
        yesOrNo={choices.yesOrNo}
        Gender={choices.gender}
        onChange={handleChange}
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
export default I131;
