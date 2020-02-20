import React from "react";

function MultiSelect(props) {
  console.log("props.value");

  console.log(props.value);
  return (
    <div className="form-group form-content">
      <label className="mdb-main-label">{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="form-control"
          multiple
        >
          {props.options.map((opt, index) => (
            <option key={index}>{opt}</option>
          ))}
        </select>
      </div>
      <style jsx>{`
        // .form-content {
        //   padding-left: 30px;
        //   padding-right: 30px;
        //   padding-bottom: 5px;
        // }
      `}</style>
    </div>
  );
}

export default MultiSelect;
