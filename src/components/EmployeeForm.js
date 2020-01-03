import React from "react";
import TextInput from "./common/TextInput";
import PickupList from "./common/PickupList";

function EmployeeForm(props) {
  return (
    <>
      <h1 className="title"> H-1B EMPLOYEE QUESTIONNAIRE</h1>
      <form className="form">
        <div className="left">
          <div className="section1">
            <label className="head form-control">Basic Information</label>
            <TextInput
              label="First Name"
              type="text"
              placeholder="First Name"
              id="First_Name"
              name="First_Name"
              value={props.formContent.First_Name}
              onChange={props.onChange}
            />
            <TextInput
              label="Middle Name"
              type="text"
              placeholder="Middle Name"
              id="Middle_Name"
              name="Middle_Name"
              value={props.formContent.Middle_Name}
              onChange={props.onChange}
            />

            <TextInput
              label="Last Name"
              type="text"
              placeholder="Last Name"
              id="Last_Name"
              name="Last_Name"
              value={props.formContent.Last_Name}
              onChange={props.onChange}
            />
            <TextInput
              label="Email"
              type="email"
              placeholder="Email"
              id="Email"
              name="Email"
              value={props.formContent.Email}
              onChange={props.onChange}
            />

            <PickupList
              label="Gender"
              options={props.Gender}
              id="Gender"
              name="Gender"
              value={props.formContent.Gender}
              onChange={props.onChange}
            />

            <TextInput
              label="D.O.B."
              type="date"
              id="D_O_B"
              name="D_O_B"
              value={props.formContent.D_O_B}
              onChange={props.onChange}
            />
          </div>

          <div className="section1">
            <label className="head form-control">
              Travel Document Information
            </label>
            <TextInput
              label="S.S.N."
              type="text"
              placeholder="S_S_N"
              id="S_S_N"
              name="S_S_N"
              value={props.formContent.S_S_N}
              onChange={props.onChange}
            />
            <TextInput
              label="Country of Birth"
              type="text"
              placeholder="Country_of_Birth"
              id="Country_of_Birth"
              name="Country_of_Birth"
              value={props.formContent.Country_of_Birth}
              onChange={props.onChange}
            />

            <TextInput
              label="Province of Birth"
              type="text"
              id="Province_of_Birth"
              name="Province_of_Birth"
              value={props.formContent.Province_of_Birth}
              onChange={props.onChange}
            />
            <TextInput
              label="Country of Citizenship"
              type="text"
              id="Country_of_Citizenship"
              name="Country_of_Citizenship"
              value={props.formContent.Country_of_Citizenship}
              onChange={props.onChange}
            />
            <TextInput
              label="Date of Last Arrival"
              type="date"
              id="Date_of_Last_Arrival"
              name="Date_of_Last_Arrival"
              value={props.formContent.Date_of_Last_Arrival}
              onChange={props.onChange}
            />
            <TextInput
              label="Passport No."
              type="text"
              id="Passport_No"
              name="Passport_No"
              value={props.formContent.Passport_No}
              onChange={props.onChange}
            />

            <TextInput
              label="Date Passport Issued"
              type="text"
              id="Date_Passport_Issued"
              name="Date_Passport_Issued"
              value={props.formContent.Date_Passport_Issued}
              onChange={props.onChange}
            />

            <TextInput
              label="Date Passport Expires"
              type="text"
              id="Date_Passport_Expires"
              name="Date_Passport_Expires"
              value={props.formContent.Date_Passport_Expires}
              onChange={props.onChange}
            />

            <PickupList
              label="Current Status"
              options={props.currentStatus}
              id="Current_Status"
              name="Current_Status"
              //value={props.formContent.Current_Status}
              onChange={props.onChange}
            />
            <TextInput
              label="Date Status Expires"
              type="text"
              id="Date_Status_Expires"
              name="Date_Status_Expires"
              value={props.formContent.Date_Status_Expires}
              onChange={props.onChange}
            />

            <TextInput
              label="SEVIS No."
              type="text"
              id="SEVIS_No"
              name="SEVIS_No"
              value={props.formContent.SEVIS_No}
              onChange={props.onChange}
            />
            <TextInput
              label="EAD No."
              type="text"
              id="EAD_No"
              name="EAD_No"
              value={props.formContent.EAD_No}
              onChange={props.onChange}
            />
          </div>

          <div className="section1">
            <label className="head form-control">
              Previous Status Information
            </label>
            <PickupList
              label="Any J Visa Before"
              options={props.yesOrNo}
              id="Any_J_Visa_Before"
              name="Any_J_Visa_Before"
              value={props.formContent.Any_J_Visa_Before}
              onChange={props.onChange}
            />
            <TextInput
              label="Dates maintained J Status"
              type="text"
              placeholder="Dates_maintained_J_Status"
              id="Dates_maintained_J_Status"
              name="Dates_maintained_J_Status"
              value={props.formContent.Dates_maintained_J_Status}
              onChange={props.onChange}
            />
            <PickupList
              label="Any H Petition in Last 7yrs"
              options={props.yesOrNo}
              id="Any_H_Petition_in_Last_7yrs"
              name="Any_H_Petition_in_Last_7yrs"
              value={props.formContent.Any_H_Petition_in_Last_7yrs}
              onChange={props.onChange}
            />
            <PickupList
              label="Any Denied H Petition in last 7yrs"
              options={props.yesOrNo}
              id="Any_Denied_H_Petition_in_last_7yrs"
              name="Any_Denied_H_Petition_in_last_7yrs"
              value={props.formContent.Any_Denied_H_Petition_in_last_7yrs}
              onChange={props.onChange}
            />
          </div>

          <div className="section1">
            <label className="head form-control">
              U.S. Contact Information
            </label>
            <TextInput
              label="Current U.S. Address"
              type="text"
              placeholder="Current_U_S_Address"
              id="Current_U_S_Address"
              name="Current_U_S_Address"
              value={props.formContent.Current_U_S_Address}
              onChange={props.onChange}
            />
            <PickupList
              label="Current Unit"
              options={props.currentUnits}
              id="Current_Unit"
              name="Current_Unit"
              value={props.formContent.Current_Unit}
              onChange={props.onChange}
            />
            <TextInput
              label="Current Unit Number"
              type="text"
              id="Current_Unit_Number"
              name="Current_Unit_Number"
              value={props.formContent.Current_Unit_Number}
              onChange={props.onChange}
            />
            <TextInput
              label="Current City"
              type="text"
              id="Current_City"
              name="Current_City"
              value={props.formContent.Current_City}
              onChange={props.onChange}
            />
            <PickupList
              label="Current State"
              options={props.states}
              id="Current_State"
              name="Current_State"
              value={props.formContent.Current_State}
              onChange={props.onChange}
            />
            <TextInput
              label="Current Zip Code"
              type="text"
              id="Current_Zip_Code"
              name="Current_Zip_Code"
              value={props.formContent.Current_Zip_Code}
              onChange={props.onChange}
            />
          </div>
        </div>
        <div className="right">
          <div className="section1">
            <label className="head form-control">
              Foreign Contact Information
            </label>
            <TextInput
              label="Consulate Office City ⚠️"
              type="text"
              id="Office_City"
              name="Office_City"
              value={props.formContent.Office_City}
              onChange={props.onChange}
            />

            <TextInput
              label="Consulate Office State or Country"
              type="text"
              id="State_or_Country"
              name="State_or_Country"
              value={props.formContent.State_or_Country}
              onChange={props.onChange}
            />
            <TextInput
              label="Foreign Address"
              type="text"
              placeholder="Foreign_Address"
              id="Foreign_Address"
              name="Foreign_Address"
              value={props.formContent.Foreign_Address}
              onChange={props.onChange}
            />
            <PickupList
              label="Foreign Unit"
              options={props.currentUnits}
              id="Foreign_Unit"
              name="Foreign_Unit"
              value={props.formContent.Foreign_Unit}
              onChange={props.onChange}
            />
            <TextInput
              label="Foreign Unit Number"
              type="text"
              id="Foreign_Unit_Number"
              name="Foreign_Unit_Number"
              value={props.formContent.Foreign_Unit_Number}
              onChange={props.onChange}
            />
            <TextInput
              label="Foreign City"
              type="text"
              id="Foreign_City"
              name="Foreign_City"
              value={props.formContent.Foreign_City}
              onChange={props.onChange}
            />
            <TextInput
              label="Foreign Province"
              type="text"
              id="Foreign_Province"
              name="Foreign_Province"
              value={props.formContent.Foreign_Province}
              onChange={props.onChange}
            />

            <TextInput
              label="Foreign Postal Code"
              type="text"
              id="Foreign_Postal_Code"
              name="Foreign_Postal_Code"
              value={props.formContent.Foreign_Postal_Code}
              onChange={props.onChange}
            />

            <TextInput
              label="Foreign Country"
              type="text"
              id="Foreign_Country"
              name="Foreign_Country"
              value={props.formContent.Foreign_Country}
              onChange={props.onChange}
            />
          </div>
          <div className="section1">
            <label className="head form-control">Degree Information</label>
            <PickupList
              label="Type of Petition"
              options={props.typeOfPetition}
              id="Type_of_Petition"
              name="Type_of_Petition"
              value={props.formContent.Type_of_Petition}
              onChange={props.onChange}
            />
            <PickupList
              label="Highest Education"
              options={props.highestEducation}
              id="Highest_Education"
              name="Highest_Education"
              value={props.formContent.Highest_Education}
              onChange={props.onChange}
            />
            <TextInput
              label="University Name"
              type="text"
              id="University_Name"
              name="University_Name"
              value={props.formContent.University_Name}
              onChange={props.onChange}
            />
            <TextInput
              label="Date Degree Awarded"
              type="text"
              id="Date_Degree_Awarded"
              name="Date_Degree_Awarded"
              value={props.formContent.Date_Degree_Awarded}
              onChange={props.onChange}
            />
            <TextInput
              label="Type of U.S. Degree"
              type="text"
              id="Type_of_U_S_Degree"
              name="Type_of_U_S_Degree"
              value={props.formContent.Type_of_U_S_Degree}
              onChange={props.onChange}
            />
            <TextInput
              label="Major / Field"
              type="text"
              id="Major_Field"
              name="Major_Field"
              value={props.formContent.Major_Field}
              onChange={props.onChange}
            />
            <TextInput
              label="University Address"
              type="text"
              id="University_Address"
              name="University_Address"
              value={props.formContent.University_Address}
              onChange={props.onChange}
            />
            <PickupList
              label="University Unit"
              options={props.currentUnits}
              id="University_Unit"
              name="University_Unit"
              value={props.formContent.University_Unit}
              onChange={props.onChange}
            />
            <TextInput
              label="University Unit Number"
              type="text"
              id="University_Unit_Number"
              name="University_Unit_Number"
              value={props.formContent.University_Unit_Number}
              onChange={props.onChange}
            />{" "}
            <TextInput
              label="University City"
              type="text"
              id="University_City"
              name="University_City"
              value={props.formContent.University_City}
              onChange={props.onChange}
            />
            <PickupList
              label="University State"
              options={props.states}
              id="University_State"
              name="University_State"
              value={props.formContent.University_State}
              onChange={props.onChange}
            />
            <TextInput
              label="University Zip Code"
              type="text"
              id="University_Zip_Code"
              name="University_Zip_Code"
              value={props.formContent.University_Zip_Code}
              onChange={props.onChange}
            />
            <div className="form-group form-content">
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
      background: #33453D;
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

export default EmployeeForm;
