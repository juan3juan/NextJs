import React, { useState, useEffect } from "react";
import EmployerForm from "./EmployerForm";
//import { getRecord, saveRecord } from "../server/zoho/zohoApi";
import * as zohoApi from "../server/zoho/zohoApi";
import PropTypes from "prop-types";

function H1BEmployer(props) {
  const [companyUnits, setCompanyUnits] = useState([
    { id: "1", value: "Apt" },
    { id: "2", value: "Ste" },
    { id: "3", value: "Flr" }
  ]);
  const [states, setStates] = useState([
    { id: "1", value: "AA" },
    { id: "2", value: "AE" },
    { id: "3", value: "AK" }
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
    Full_Name: "",
    Last_Name: ""
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
      setFormContent({ ...formContent, Full_Name: records[0].Full_Name });
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
    zohoApi.saveRecord(formContent).then(() => {});
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
    />
  );
}
H1BEmployer.propTypes = {
  Full_Name: PropTypes.number.isRequired
};
export default H1BEmployer;
