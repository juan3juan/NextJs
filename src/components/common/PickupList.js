import React from "react";

function PickupList(props) {
  return (
    <div className="form-group form-content">
      <label>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="form-control"
        >
          {props.options.map((unit, index) => {
            return (
              <>
                <option key={unit.id}>{unit.value}</option>
              </>
            );
          })}
        </select>
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

export default PickupList;
