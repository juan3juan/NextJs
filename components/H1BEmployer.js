import React, { useState } from "react";
import EmployerForm from "./EmployerForm";

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
    firstName: "",
    lastName: ""
  });

  function handleChange({ target }) {
    setFormContent({
      ...formContent,
      [target.name]: target.value
    });
  }
  return (
    <EmployerForm
      companyUnits={companyUnits}
      states={states}
      wage={wage}
      yesOrNo={yesOrNo}
      formContent={formContent}
      onChange={handleChange}
    />
  );
}

export default H1BEmployer;
