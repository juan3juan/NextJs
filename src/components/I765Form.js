import React from "react";
import TextInput from "./common/TextInput";
import PickupList from "./common/PickupList";

function I765Form(props) {
  //   return (
  //       <div className="container-fluid">
  //           <h1 className="title"> I-765 QUESTIONNAIRE</h1>
  //           <form className="form">

  //           </form>

  //       </div>
  //   );
  console.log("765 Yes OR NO");
  console.log(props.yesOrNo);
  return (
    <div className="container-fluid">
      <h1 className="title"> I-765 QUESTIONNAIRE</h1>
      <form className="form">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
              <div className="section1">
                <label className="head form-control">Basic Information</label>
                <TextInput
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                  id="First_Name"
                  name="First_Name"
                  value={props.clientContent.First_Name}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Last Name"
                  type="text"
                  placeholder="Last Name"
                  id="Last_Name"
                  name="Last_Name"
                  value={props.clientContent.Last_Name}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Phone"
                  type="phone"
                  placeholder="phone"
                  id="phone"
                  name="phone"
                  value={props.clientContent.phone}
                  onChange={props.onChange}
                />
                {/* <PickupList
                  label="Gender"
                  options={props.gender}
                  id="Gender"
                  name="Gender"
                  value={props.clientContent.Gender}
                  onChange={props.onChange}
                /> */}
                {/* <PickupList
                  label="Marital Status"
                  options={props.maritial}
                  id="Marital_Status"
                  name="Marital_Status"
                  value={props.clientContent.Marital_Status}
                  onChange={props.onChange}
                /> */}
                <TextInput
                  label="S.S.N."
                  type="text"
                  placeholder="S_S_N"
                  id="S_S_N"
                  name="S_S_N"
                  value={props.clientContent.S_S_N}
                  onChange={props.onChange}
                />

                <TextInput
                  label="Father's First Name"
                  type="text"
                  placeholder="Father's First Name"
                  id="Father_s_First_Name"
                  name="Father_s_First_Name"
                  value={props.clientContent.Father_s_First_Name}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Father's Last Name"
                  type="text"
                  placeholder="Father's Last Name"
                  id="Father_s_Last_Name"
                  name="Father_s_Last_Name"
                  value={props.clientContent.Father_s_Last_Name}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Mother's First Name"
                  type="text"
                  placeholder="Mother's First Name"
                  id="Mother_s_First_Name"
                  name="Mother_s_First_Name"
                  value={props.clientContent.Mother_s_First_Name}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Mother's Last Name"
                  type="text"
                  placeholder="Mother's Last Name"
                  id="Mother_s_Last_Name"
                  name="Mother_s_Last_Name"
                  value={props.clientContent.Mother_s_Last_Name}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Country of Citizenship"
                  type="text"
                  placeholder="Country of Citizenship"
                  id="Country_of_Citizenship"
                  name="Country_of_Citizenship"
                  value={props.clientContent.Country_of_Citizenship}
                  onChange={props.onChange}
                />
                <TextInput
                  label="City of Birth"
                  type="text"
                  placeholder="City of Birth"
                  id="City_of_Birth"
                  name="City_of_Birth"
                  value={props.clientContent.City_of_Birth}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Province of Birth"
                  type="text"
                  placeholder="Province of Birth"
                  id="Province_of_Birth"
                  name="Province_of_Birth"
                  value={props.clientContent.Province_of_Birth}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Country of Birth"
                  type="text"
                  placeholder="Country of Birth"
                  id="Country_of_Birth"
                  name="Country_of_Birth"
                  value={props.clientContent.Country_of_Birth}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Date of Birth"
                  type="date"
                  id="Date_of_Birth"
                  name="Date_of_Birth"
                  value={props.clientContent.Date_of_Birth}
                  onChange={props.onChange}
                />
                <TextInput
                  label="I94 No"
                  type="text"
                  id="I_94_No"
                  name="I_94_No"
                  value={props.clientContent.I_94_No}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Passport Number"
                  type="text"
                  id="Passport_Number"
                  name="Passport_Number"
                  value={props.clientContent.Passport_Number}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Date Passport Expired"
                  placeholder="mm/dd/yyyy"
                  type="date"
                  id="Date_Passport_Expired"
                  name="Date_Passport_Expired"
                  value={props.clientContent.Date_Passport_Expired}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Date of Last Entry"
                  placeholder="mm/dd/yyyy"
                  type="date"
                  id="Date_of_Last_Entry"
                  name="Date_of_Last_Entry"
                  value={props.clientContent.Date_of_Last_Entry}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Place of Last Entry"
                  type="text"
                  id="Place_of_Last_Entry"
                  name="Place_of_Last_Entry"
                  value={props.clientContent.Place_of_Last_Entry}
                  onChange={props.onChange}
                />
                {/* <PickupList
                  label="Status_of_Last_Entry"
                  options={props.statusLastEntry}
                  id="Status_of_Last_Entry"
                  name="Status_of_Last_Entry"
                  value={props.clientContent.Status_of_Last_Entry}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Current Status"
                  options={props.statusLastEntry}
                  id="Current_Status"
                  name="Current_Status"
                  value={props.clientContent.Current_Status}
                  onChange={props.onChange}
                /> */}
                <TextInput
                  label="A Number"
                  type="text"
                  id="A_Number"
                  name="A_Number"
                  value={props.clientContent.A_Number}
                  onChange={props.onChange}
                />
                <TextInput
                  label="SEVIS No"
                  type="text"
                  id="SEVIS_No"
                  name="SEVIS_No"
                  value={props.clientContent.SEVIS_No}
                  onChange={props.onChange}
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
              <div className="section1">
                <div className="section1">
                  <label className="head form-control">
                    Contact Information
                  </label>
                  <TextInput
                    label="Mailing Street"
                    type="text"
                    placeholder="Mailing Street"
                    id="Mailing_Street"
                    name="Mailing_Street"
                    value={props.clientContent.Mailing_Street}
                    onChange={props.onChange}
                  />
                  {/* <PickupList
                    label="Mailing Unit"
                    options={props.companyUnits}
                    id="Mailing_Unit"
                    name="Mailing_Unit"
                    value={props.clientContent.Mailing_Unit}
                    onChange={props.onChange}
                  /> */}
                  <TextInput
                    label="Mailing Unit Number"
                    type="text"
                    placeholder="Mailing_Unit_Number"
                    id="Mailing_Unit_Number"
                    name="Mailing_Unit_Number"
                    value={props.clientContent.Mailing_Unit_Number}
                    onChange={props.onChange}
                  />
                  <TextInput
                    label="Mailing City"
                    type="text"
                    placeholder="Mailing_City"
                    id="Mailing_City"
                    name="Mailing_City"
                    value={props.clientContent.Mailing_City}
                    onChange={props.onChange}
                  />
                  {/* <PickupList
                    label="Mailing State"
                    options={props.states}
                    id="Mailing_State"
                    name="Mailing_State"
                    value={props.clientContent.Mailing_State}
                    onChange={props.onChange}
                  /> */}
                  <TextInput
                    label="Mailing Zip Code"
                    type="text"
                    id="Mailing_Zip"
                    name="Mailing_Zip"
                    value={props.clientContent.Mailing_Zip}
                    onChange={props.onChange}
                  />
                </div>
                <div className="section1">
                  <label className="head form-control">
                    Company Information
                  </label>
                  <TextInput
                    label="Employer Name"
                    type="text"
                    id="Account_Number"
                    name="Account_Number"
                    value={props.companyContent.Account_Number}
                    onChange={props.onChange}
                  />
                  <TextInput
                    label="Employer ID"
                    type="text"
                    id="E_Verify_ID"
                    name="E_Verify_ID"
                    value={props.companyContent.E_Verify_ID}
                    onChange={props.onChange}
                  />
                </div>
                <label className="head form-control">Other Information</label>
                {/* <PickupList
                  label="Eligibility Category"
                  options={props.eligibilityCategory}
                  id="Eligibility_Category"
                  name="Eligibility_Category"
                  value={props.caseInfoContent.Eligibility_Category}
                  onChange={props.onChange}
                /> */}
                <TextInput
                  label="Type of US Degree"
                  type="text"
                  id="Type_of_U_S_Degree"
                  name="Type_of_U_S_Degree"
                  value={props.caseInfoContent.Type_of_U_S_Degree}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Has_SSA"
                  options={props.yesOrNo}
                  id="Has_SSA"
                  name="Has_SSA"
                  value={props.caseInfoContent.Has_SSA}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Any Same Category Petition Before"
                  options={props.yesOrNo}
                  id="Any_Same_Category_Petition_Before"
                  name="Any_Same_Category_Petition_Before"
                  value={
                    props.caseInfoContent.Any_Same_Category_Petition_Before
                  }
                  onChange={props.onChange}
                />
                <TextInput
                  label="Preparer First Name"
                  type="text"
                  id="Preparer_First_Name"
                  name="Preparer_First_Name"
                  value={props.caseInfoContent.Preparer_First_Name}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Preparer Last Name"
                  type="text"
                  id="Preparer_Last_Name"
                  name="Preparer_Last_Name"
                  value={props.caseInfoContent.Preparer_Last_Name}
                  onChange={props.onChange}
                />
              </div>
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
          background: #33453d;
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

export default I765Form;
