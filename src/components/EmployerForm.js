import React from "react";
import TextInput from "./common/TextInput";
import PickupList from "./common/PickupList";
import "bootstrap/dist/css/bootstrap.min.css";

function EmployerForm(props) {
  return (
    <div className="container-fluid">
      <h1 className="title"> H-1B EMPLOYER QUESTIONNAIRE</h1>
      <form className="form">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
              <div className="section1">
                <label className="head form-control">
                  Company Signatory Basic Information
                </label>
                <TextInput
                  label="Company Signatory First Name"
                  type="text"
                  placeholder="Petitioner First Name"
                  id="Petitioner_First_Name"
                  name="Petitioner_First_Name"
                  value={props.formContent.Petitioner_First_Name}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Company Signatory Middle Name"
                  type="text"
                  placeholder="Petitioner Middle Name"
                  id="Petitioner_Middle_Name"
                  name="Petitioner_Middle_Name"
                  value={props.formContent.Petitioner_Middle_Name}
                  onChange={props.onChange}
                />

                <TextInput
                  label="Company Signatory Last Name"
                  type="text"
                  placeholder="Petitioner Last Name"
                  id="Petitioner_Last_Name"
                  name="Petitioner_Last_Name"
                  value={props.formContent.Petitioner_Last_Name}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Company Signatory Title"
                  type="text"
                  placeholder="Petitioner Title"
                  id="Petitioner_Title"
                  name="Petitioner_Title"
                  value={props.formContent.Petitioner_Title}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Company Signatory Daytime Phone"
                  type="phone"
                  placeholder="Petitioner_Daytime_Phone"
                  id="Petitioner_Daytime_Phone"
                  name="Petitioner_Daytime_Phone"
                  value={props.formContent.Petitioner_Daytime_Phone}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Company Signatory Email"
                  type="email"
                  placeholder="Petitioner_Email"
                  id="Petitioner_Email"
                  name="Petitioner_Email"
                  value={props.formContent.Petitioner_Email}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Company Street Address"
                  type="text"
                  placeholder="Petitioner_Street_Address"
                  id="Petitioner_Street_Address"
                  name="Petitioner_Street_Address"
                  value={props.formContent.Petitioner_Street_Address}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Company Unit"
                  options={props.companyUnits}
                  id="Petitioner_Unit"
                  name="Petitioner_Unit"
                  value={props.formContent.Petitioner_Unit}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Company Unit Number"
                  type="text"
                  placeholder="Petitioner_Unit_Number"
                  id="Petitioner_Unit_Number"
                  name="Petitioner_Unit_Number"
                  value={props.formContent.Petitioner_Unit_Number}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Company City"
                  type="text"
                  placeholder="Petitioner_City"
                  id="Petitioner_City"
                  name="Petitioner_City"
                  value={props.formContent.Petitioner_City}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Company State"
                  options={props.states}
                  id="Petitioner_State"
                  name="Petitioner_State"
                  value={props.formContent.Petitioner_State}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Company Zip Code"
                  type="text"
                  id="Petitioner_Zip_Code"
                  name="Petitioner_Zip_Code"
                  value={props.formContent.Petitioner_Zip_Code}
                  onChange={props.onChange}
                />
              </div>

              <div className="section1">
                <label className="head form-control">Company Information</label>
              </div>
              <TextInput
                label="Company Name"
                type="text"
                id="Company_Name"
                name="Company_Name"
                value={props.formContent.Company_Name}
                onChange={props.onChange}
              />
              <TextInput
                label="Type of Business"
                type="text"
                id="Type_of_Business"
                name="Type_of_Business"
                value={props.formContent.Type_of_Business}
                onChange={props.onChange}
              />
              <TextInput
                label="Year Established"
                type="date"
                id="Year_Established"
                name="Year_Established"
                value={props.formContent.Year_Established}
                onChange={props.onChange}
              />
              <TextInput
                label="Gross Annual Income"
                type="text"
                id="Gross_Annual_Income"
                name="Gross_Annual_Income"
                value={props.formContent.Gross_Annual_Income}
                onChange={props.onChange}
              />
              <TextInput
                label="Net Annual Income"
                type="text"
                id="Net_Annual_Income"
                name="Net_Annual_Income"
                value={props.formContent.Net_Annual_Income}
                onChange={props.onChange}
              />
              <TextInput
                label="FEIN"
                type="text"
                id="FEIN"
                name="FEIN"
                value={props.formContent.FEIN}
                onChange={props.onChange}
              />
              <TextInput
                label="DOT Code"
                type="text"
                id="DOT_Code"
                name="DOT_Code"
                value={props.formContent.DOT_Code}
                onChange={props.onChange}
              />
              <TextInput
                label="NAICS Code"
                type="text"
                id="NAICS_Code"
                name="NAICS_Code"
                value={props.formContent.NAICS_Code}
                onChange={props.onChange}
              />
              <TextInput
                label="Total Number of Employee"
                type="number"
                id="Total_Number_of_Employee"
                name="Total_Number_of_Employee"
                value={props.formContent.Total_Number_of_Employee}
                onChange={props.onChange}
              />
              <TextInput
                label="Current Number of H1B Employees"
                type="number"
                id="Number_of_H1B_Employee"
                name="Number_of_H1B_Employee"
                value={props.formContent.Number_of_H1B_Employee}
                onChange={props.onChange}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
              <div className="section1">
                <label className="head form-control">
                  Employment Information
                </label>

                <PickupList
                  label="Ever File a Petition for this Employee"
                  options={props.yesOrNo}
                  id="Ever_Filled_a_Petition_for_this_Beneficiary"
                  name="Ever_Filled_a_Petition_for_this_Beneficiary"
                  value={
                    props.formContent
                      .Ever_Filled_a_Petition_for_this_Beneficiary
                  }
                  onChange={props.onChange}
                />
                <TextInput
                  label="Job Title"
                  type="text"
                  id="Job_Title"
                  name="Job_Title"
                  value={props.formContent.Job_Title}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Intended Start Date"
                  placeholder="mm/dd/yyyy"
                  type="date"
                  id="Start_From"
                  name="Start_From"
                  value={props.formContent.Start_From}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Intended End Date"
                  placeholder="mm/dd/yyyy"
                  type="date"
                  id="To"
                  name="To"
                  value={props.formContent.To}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Rate of Pay Per Year"
                  type="text"
                  id="Rate_of_Pay_Per_Year"
                  name="Rate_of_Pay_Per_Year"
                  value={props.formContent.Rate_of_Pay_Per_Year}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Hours Per Week"
                  type="text"
                  id="Hours_Per_Week"
                  name="Hours_Per_Week"
                  value={props.formContent.Hours_Per_Week}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Wage Range"
                  type="text"
                  id="Wage"
                  name="Wage"
                  value={props.formContent.Wage}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Wage Unit"
                  options={props.wage}
                  id="Wage_Unit"
                  name="Wage_Unit"
                  value={props.formContent.Wage_Unit}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Full-time"
                  options={props.yesOrNo}
                  id="Full_time"
                  name="Full_time"
                  value={props.formContent.Full_time}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Off-site Assignment"
                  options={props.yesOrNo}
                  id="Off_site_Assignment"
                  name="Off_site_Assignment"
                  value={props.formContent.Off_site_Assignment}
                  onChange={props.onChange}
                />

                <div className="form-group">
                  <label>Attachment(s)(Maximum three files)</label>
                  <div className="col-sm-9">
                    <span className="btn btn-default btn-file">
                      <input
                        type="file"
                        className="file"
                        multiple
                        onChange={props.onChangeUpload}
                      />
                      <button onClick={props.onClickUpload}>Upload</button>
                    </span>
                  </div>
                </div>
              </div>
              {/* <props.VCode />
        <br /> */}
              <input
                id="submit"
                type="submit"
                value="Submit"
                className="btn btn-secondary"
                onClick={props.onSubmit}
              />
            </div>
          </div>
        </div>
      </form>
      <style jsx>{`
        .title {
          text-align: center;
          font-family: "Gill Sans", sans-serif;
          font-size: 2rem;
        }
        .head {
          background: #5b5630;
          color: white;
          font-size: 28px;
        }
        #submit {
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}

export default EmployerForm;
