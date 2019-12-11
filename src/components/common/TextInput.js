import React from "react";

function TextInput(props) {
  return (
    <div className="form-group form-content">
      <label>{props.label}</label>
      <div className="field">
        <input
          type={props.type}
          className="form-control"
          placeholder={props.placeholder}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        ></input>
      </div>

      <style jsx>{`
        .form-content {
          padding-left: 30px;
          padding-right: 30px;
          padding-bottom: 5px;
        }
      `}</style>
    </div>
  );
}

export default TextInput;
