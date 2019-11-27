import React from "react";
import TextInput from "./common/TextInput";
import PickupList from "./common/PickupList";

function EmployerForm(props) {
  return (
    <>
      <h1 className="title"> H-1B EMPLOYER QUESTIONNAIRE</h1>
      <form className="form">
        <div className="left">
          <div className="section1">
            <label className="head form-control">
              Company Signatory Basic Information
            </label>
            <TextInput
              label="Company Signatory First Name"
              type="text"
              placeholder="First Name"
              id="firstName"
              name="Full_Name"
              value={props.formContent.Full_Name}
              onChange={props.onChange}
            />
            <TextInput
              label="Company Signatory Middle Name"
              type="text"
              placeholder="Middle Name"
            />

            <TextInput
              label="Company Signatory Last Name"
              type="text"
              placeholder="Last Name"
            />
            <TextInput label="Company Signatory Title" type="text" />
            <TextInput label="Company Signatory Daytime Phone" type="phone" />
            <TextInput label="Company Signatory Email" type="email" />
            <TextInput label="Company Street Address" type="text" />
            <PickupList label="Company Unit" options={props.companyUnits} />
            <TextInput label="Company Unit Number" type="text" />
            <TextInput label="Company City" type="text" />
            <PickupList label="Company State" options={props.states} />
            <TextInput label="Company Zip Code" type="text" />
          </div>

          <div className="section1">
            <label className="head form-control">Company Information</label>
            <TextInput label="Company Name" type="text" />
            <TextInput label="Type of Business" type="text" />
            <TextInput label="Year Established" type="date" />
            <TextInput label="Gross Annual Income" type="text" />
            <TextInput label="Net Annual Income" type="text" />
            <TextInput label="FEIN" type="text" />
            <TextInput label="DOT Code" type="text" />
            <TextInput label="NAICS Code" type="text" />
            <TextInput label="Total Number of Employee" type="number" />
            <TextInput label="Current Number of H1B Employees" type="number" />
          </div>
        </div>
        <div className="right">
          <div className="section1">
            <label className="head form-control">Employment Information</label>
            <PickupList
              label="Ever File a Petition for this Employee"
              options={props.yesOrNo}
            />
            <TextInput label="Job Title" type="text" />
            <TextInput
              label="Intended Start Date"
              placeholder="mm/dd/yyyy"
              type="date"
            />
            <TextInput
              label="Intended End Date"
              placeholder="mm/dd/yyyy"
              type="date"
            />
            <TextInput label="Rate of Pay Per Year" type="text" />
            <TextInput label="Hours Per Week" type="text" />
            <TextInput label="Wage Range" type="text" />
            <PickupList label="Wage Unit" options={props.wage} />
            <PickupList label="Full-time" options={props.yesOrNo} />
            <PickupList label="Off-site Assignment" options={props.yesOrNo} />

            <div className="form-group form-content">
              <label>Attachment(s)(Maximum three files)</label>
              <div className="col-sm-9">
                <span className="btn btn-default btn-file">
                  <input
                    type="file"
                    className="file"
                    multiple
                    data-show-upload="true"
                    data-show-caption="true"
                  />
                </span>
              </div>
            </div>
          </div>
          <input
            id="submit"
            type="submit"
            value="Submit"
            className="btn btn-secondary"
          />
        </div>
      </form>
      <style jsx>{`
    .title{
      text-align: center;
      font-family: "Gill Sans", sans-serif;
    }
    .form {
      display: flex;
      flex-wrap: wrap;
    }

    .left{
      flex:40%;
      background-color: #e3deda,
      padding:50px;
      padding-left:200px;
      margin: 50px;
    }
    .right{
      flex:40%;
      background-color: #e3deda,
      padding:50px;
      padding-right: 200px;
      margin: 50px;
    }
    .head{
      background: #5b5630;
      color:white;
      font-size: 28px;
    }
    .section1{
      background: #f9fafb;
      margin-bottom: 50px;
    }
    .form-content {
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 5px;
    }
    #submit{
      display: block; 
      margin: 0 auto;
  }
  `}</style>
    </>
  );
}

export default EmployerForm;
