import React from "react";
import TextInput from "./common/TextInput";
import PickupList from "./common/PickupList";
import MultiSelect from "./common/MultiSelect";

function I130Form(props) {
  return (
    <div className="container-fluid">
      <h1 className="title"> I-130 Form</h1>
      <form className="form">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
              <div className="section1">
                <label className="head form-control">
                  Petitioner Basic Information
                </label>
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
                  label="Middle Name"
                  type="text"
                  placeholder="Middle Name"
                  id="Middle_Name"
                  name="Middle_Name"
                  value={props.clientContent.Middle_Name}
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
                <PickupList
                  label="Has other name before"
                  options={props.yesOrNo}
                  id="Has_Other_Name"
                  name="Has_Other_Name"
                  value={props.clientContent.Has_Other_Name}
                  onChange={props.onChange}
                />
                {props.clientContent.Has_Other_Name === "Yes" ? (
                  <>
                    <TextInput
                      label="Other First Name 1"
                      type="text"
                      placeholder="Other First Name 1"
                      id="Other_First_Name_1"
                      name="Other_First_Name_1"
                      value={props.clientContent.Other_First_Name_1}
                      onChange={props.onChange}
                    />
                    <TextInput
                      label="Other Last Name 1"
                      type="text"
                      placeholder="Other Last Name 1"
                      id="Other_Last_Name_1"
                      name="Other_Last_Name_1"
                      value={props.clientContent.Other_Last_Name_1}
                      onChange={props.onChange}
                    />
                  </>
                ) : null}
                <TextInput
                  label="Email"
                  type="email"
                  placeholder="Email"
                  id="Email"
                  name="Email"
                  value={props.clientContent.Email}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Phone"
                  type="Phone"
                  placeholder="Phone"
                  id="Phone"
                  name="Phone"
                  value={props.clientContent.Phone}
                  onChange={props.onChange}
                />

                <PickupList
                  label="Gender"
                  options={props.Gender}
                  id="Gender"
                  name="Gender"
                  value={props.clientContent.Gender}
                  onChange={props.onChange}
                />

                <TextInput
                  label="D.O.B."
                  type="date"
                  id="D_O_B"
                  name="D_O_B"
                  value={props.clientContent.D_O_B}
                  onChange={props.onChange}
                />
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
                  label="A Number"
                  type="text"
                  id="A_Number"
                  name="A_Number"
                  value={props.clientContent.A_Number}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Country of Birth"
                  type="text"
                  placeholder="Country_of_Birth"
                  id="Country_of_Birth"
                  name="Country_of_Birth"
                  value={props.clientContent.Country_of_Birth}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Country of Citizenship"
                  type="text"
                  id="Country_of_Citizenship"
                  name="Country_of_Citizenship"
                  value={props.clientContent.Country_of_Citizenship}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Marital Status"
                  options={props.maritial}
                  id="Marital_Status"
                  name="Marital_Status"
                  value={props.clientContent.Marital_Status}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Citizen or PR"
                  options={props.CitizenOrPR}
                  id="US_Citizen_PR"
                  name="US_Citizen_PR"
                  value={props.clientContent.US_Citizen_PR}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Citizen or PR"
                  options={props.CitizenOrPR}
                  id="US_Citizen_PR"
                  name="US_Citizen_PR"
                  value={props.clientContent.US_Citizen_PR}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Acquire citizenship through"
                  options={props.AcquireCitizenshipThrough}
                  id="Acquire_citizenship_through"
                  name="Acquire_citizenship_through"
                  value={props.clientContent.Acquire_citizenship_through}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Obtained Certificate of Naturalization or Citizens"
                  options={props.yesOrNo}
                  id="Obtained_Certificate_of_Naturalization_or_Citizens"
                  name="Obtained_Certificate_of_Naturalization_or_Citizens"
                  value={
                    props.clientContent
                      .Obtained_Certificate_of_Naturalization_or_Citizens
                  }
                  onChange={props.onChange}
                />
                <TextInput
                  label="Citizenship Certificate Number"
                  type="text"
                  id="Citizenship_Certificate_Number"
                  name="Citizenship_Certificate_Number"
                  value={props.clientContent.Citizenship_Certificate_Number}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Citizenship Certificate Number"
                  type="text"
                  id="Citizenship_Certificate_Number"
                  name="Citizenship_Certificate_Number"
                  value={props.clientContent.Citizenship_Certificate_Number}
                  onChange={props.onChange}
                />
                <TextInput
                  label="PR Class of Admission"
                  type="text"
                  id="PR_Class_of_Admission"
                  name="PR_Class_of_Admission"
                  value={props.clientContent.PR_Class_of_Admission}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Petitioner"
                  type="text"
                  id="Company_Petitioner"
                  name="Company_Petitioner"
                  value={props.caseMmgContent.Company_Petitioner}
                  onChange={props.onCaseMmgChange}
                />
              </div>

              <div className="section1">
                <label className="head form-control">
                  Petitioner Biographic Information
                </label>
                <PickupList
                  label="Ethnicity"
                  options={props.Ethnicity}
                  id="Ethnicity"
                  name="Ethnicity"
                  value={props.clientContent.Ethnicity}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Height(Feet)"
                  type="text"
                  id="Height"
                  name="Height"
                  value={props.clientContent.Height}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Weight(Pounds)"
                  type="text"
                  id="Weight"
                  name="Weight"
                  value={props.clientContent.Weight}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Eye Color"
                  options={props.EyeColor}
                  id="Eye_Color"
                  name="Eye_Color"
                  value={props.clientContent.Eye_Color}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Hair Color"
                  options={props.HairColor}
                  id="Hair_Color"
                  name="Hair_Color"
                  value={props.clientContent.Hair_Color}
                  onChange={props.onChange}
                />
              </div>

              <div className="section1">
                <label className="head form-control">Petitioner Address</label>
                <TextInput
                  label="Mailing Street"
                  type="text"
                  placeholder="Mailing_Street"
                  id="Mailing_Street"
                  name="Mailing_Street"
                  value={props.clientContent.Mailing_Street}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Mailing Unit"
                  options={props.Units}
                  id="Mailing_Unit"
                  name="Mailing_Unit"
                  value={props.clientContent.Mailing_Unit}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Mailing Unit Number"
                  type="text"
                  id="Mailing_Unit_Number"
                  name="Mailing_Unit_Number"
                  value={props.clientContent.Mailing_Unit_Number}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Mailing City"
                  type="text"
                  id="Mailing_City"
                  name="Mailing_City"
                  value={props.clientContent.Mailing_City}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Mailing State"
                  options={props.states}
                  id="Mailing_State"
                  name="Mailing_State"
                  value={props.clientContent.Mailing_State}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Mailing Zip"
                  type="text"
                  id="Mailing_Zip"
                  name="Mailing_Zip"
                  value={props.clientContent.Mailing_Zip}
                  onChange={props.onChange}
                />
                <PickupList
                  label="Is mailing address same as physical address?"
                  options={props.yesOrNo}
                  id="Is_mailing_address_same_as_physical_address"
                  name="Is_mailing_address_same_as_physical_address"
                  value={
                    props.clientContent
                      .Is_mailing_address_same_as_physical_address
                  }
                  onChange={props.onChange}
                />
                {props.clientContent
                  .Is_mailing_address_same_as_physical_address === "No" ? (
                  <>
                    <TextInput
                      label="Other Street"
                      type="text"
                      placeholder="Other Street"
                      id="Other_Street"
                      name="Other_Street"
                      value={props.clientContent.Other_Street}
                      onChange={props.onChange}
                    />
                    <PickupList
                      label="Other Unit"
                      options={props.Units}
                      id="Other_Unit"
                      name="Other_Unit"
                      value={props.clientContent.Other_Unit}
                      onChange={props.onChange}
                    />
                    <TextInput
                      label="Other Unit Number"
                      type="text"
                      id="Other_Unit_Number"
                      name="Other_Unit_Number"
                      value={props.clientContent.Other_Unit_Number}
                      onChange={props.onChange}
                    />
                    <TextInput
                      label="Other City"
                      type="text"
                      id="Other_City"
                      name="Other_City"
                      value={props.clientContent.Other_City}
                      onChange={props.onChange}
                    />
                    <PickupList
                      label="Other State"
                      options={props.states}
                      id="Other_State"
                      name="Other_State"
                      value={props.clientContent.Other_State}
                      onChange={props.onChange}
                    />
                    <TextInput
                      label="Other Zip Code"
                      type="text"
                      id="Other_Zip"
                      name="Other_Zip"
                      value={props.clientContent.Other_Zip}
                      onChange={props.onChange}
                    />
                  </>
                ) : null}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
              <div className="section1">
                <label className="head form-control">
                  Marriage Information
                </label>
                <TextInput
                  label="Married Times"
                  type="text"
                  id="MarriedTimes"
                  name="MarriedTimes"
                  value={props.marriageObj.MarriedTimes}
                  onChange={props.onMarriageChange}
                />
                <TextInput
                  label="Marriage State"
                  type="text"
                  id="State"
                  name="State"
                  value={props.marriageObj.State}
                  onChange={props.onMarriageChange}
                />
              </div>

              <div className="section1">
                <label className="head form-control">
                  Beneficiary Basic Information
                </label>
                <TextInput
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                  id="First_Name"
                  name="First_Name"
                  value={props.beneficiary.First_Name}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="Middle Name"
                  type="text"
                  placeholder="Middle Name"
                  id="Middle_Name"
                  name="Middle_Name"
                  value={props.beneficiary.Middle_Name}
                  onChange={props.onBeneficiaryChange}
                />

                <TextInput
                  label="Last Name"
                  type="text"
                  placeholder="Last Name"
                  id="Last_Name"
                  name="Last_Name"
                  value={props.beneficiary.Last_Name}
                  onChange={props.onBeneficiaryChange}
                />
                <PickupList
                  label="Has other name before"
                  options={props.yesOrNo}
                  id="Has_Other_Name"
                  name="Has_Other_Name"
                  value={props.beneficiary.Has_Other_Name}
                  onChange={props.onBeneficiaryChange}
                />
                {props.beneficiary.Has_Other_Name === "Yes" ? (
                  <>
                    <TextInput
                      label="Other First Name 1"
                      type="text"
                      placeholder="Other First Name 1"
                      id="Other_First_Name_1"
                      name="Other_First_Name_1"
                      value={props.beneficiary.Other_First_Name_1}
                      onChange={props.onBeneficiaryChange}
                    />
                    <TextInput
                      label="Other Last Name 1"
                      type="text"
                      placeholder="Other Last Name 1"
                      id="Other_Last_Name_1"
                      name="Other_Last_Name_1"
                      value={props.beneficiary.Other_Last_Name_1}
                      onChange={props.onBeneficiaryChange}
                    />
                  </>
                ) : null}
                <TextInput
                  label="Email"
                  type="email"
                  placeholder="Email"
                  id="Email"
                  name="Email"
                  value={props.beneficiary.Email}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="Phone"
                  type="phone"
                  placeholder="Phone"
                  id="Phone"
                  name="Phone"
                  value={props.beneficiary.Phone}
                  onChange={props.onBeneficiaryChange}
                />

                <PickupList
                  label="Gender"
                  options={props.Gender}
                  id="Gender"
                  name="Gender"
                  value={props.beneficiary.Gender}
                  onChange={props.onBeneficiaryChange}
                />

                <TextInput
                  label="D.O.B."
                  type="date"
                  id="D_O_B"
                  name="D_O_B"
                  value={props.beneficiary.D_O_B}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="S.S.N."
                  type="text"
                  placeholder="S_S_N"
                  id="S_S_N"
                  name="S_S_N"
                  value={props.beneficiary.S_S_N}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="A Number"
                  type="text"
                  id="A_Number"
                  name="A_Number"
                  value={props.beneficiary.A_Number}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="Country of Birth"
                  type="text"
                  placeholder="Country_of_Birth"
                  id="Country_of_Birth"
                  name="Country_of_Birth"
                  value={props.beneficiary.Country_of_Birth}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="Country of Citizenship"
                  type="text"
                  id="Country_of_Citizenship"
                  name="Country_of_Citizenship"
                  value={props.beneficiary.Country_of_Citizenship}
                  onChange={props.onBeneficiaryChange}
                />
                <PickupList
                  label="Marital Status"
                  options={props.maritial}
                  id="Marital_Status"
                  name="Marital_Status"
                  value={props.beneficiary.Marital_Status}
                  onChange={props.onBeneficiaryChange}
                />
                <PickupList
                  label="Citizen or PR"
                  options={props.CitizenOrPR}
                  id="US_Citizen_PR"
                  name="US_Citizen_PR"
                  value={props.beneficiary.US_Citizen_PR}
                  onChange={props.onBeneficiaryChange}
                />
                <PickupList
                  label="Citizen or PR"
                  options={props.CitizenOrPR}
                  id="US_Citizen_PR"
                  name="US_Citizen_PR"
                  value={props.beneficiary.US_Citizen_PR}
                  onChange={props.onBeneficiaryChange}
                />
                <PickupList
                  label="Acquire citizenship through"
                  options={props.AcquireCitizenshipThrough}
                  id="Acquire_citizenship_through"
                  name="Acquire_citizenship_through"
                  value={props.beneficiary.Acquire_citizenship_through}
                  onChange={props.onBeneficiaryChange}
                />
                <PickupList
                  label="Obtained Certificate of Naturalization or Citizens"
                  options={props.yesOrNo}
                  id="Obtained_Certificate_of_Naturalization_or_Citizens"
                  name="Obtained_Certificate_of_Naturalization_or_Citizens"
                  value={
                    props.beneficiary
                      .Obtained_Certificate_of_Naturalization_or_Citizens
                  }
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="Citizenship Certificate Number"
                  type="text"
                  id="Citizenship_Certificate_Number"
                  name="Citizenship_Certificate_Number"
                  value={props.beneficiary.Citizenship_Certificate_Number}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="Citizenship Certificate Number"
                  type="text"
                  id="Citizenship_Certificate_Number"
                  name="Citizenship_Certificate_Number"
                  value={props.beneficiary.Citizenship_Certificate_Number}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="PR Class of Admission"
                  type="text"
                  id="PR_Class_of_Admission"
                  name="PR_Class_of_Admission"
                  value={props.beneficiary.PR_Class_of_Admission}
                  onChange={props.onBeneficiaryChange}
                />
              </div>

              <div className="section1">
                <label className="head form-control">Beneficiary Address</label>
                <TextInput
                  label="Mailing Street"
                  type="text"
                  placeholder="Mailing_Street"
                  id="Mailing_Street"
                  name="Mailing_Street"
                  value={props.beneficiary.Mailing_Street}
                  onChange={props.onBeneficiaryChange}
                />
                <PickupList
                  label="Mailing Unit"
                  options={props.Units}
                  id="Mailing_Unit"
                  name="Mailing_Unit"
                  value={props.beneficiary.Mailing_Unit}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="Mailing Unit Number"
                  type="text"
                  id="Mailing_Unit_Number"
                  name="Mailing_Unit_Number"
                  value={props.beneficiary.Mailing_Unit_Number}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="Mailing City"
                  type="text"
                  id="Mailing_City"
                  name="Mailing_City"
                  value={props.beneficiary.Mailing_City}
                  onChange={props.onBeneficiaryChange}
                />
                <PickupList
                  label="Mailing State"
                  options={props.states}
                  id="Mailing_State"
                  name="Mailing_State"
                  value={props.beneficiary.Mailing_State}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="Mailing Zip"
                  type="text"
                  id="Mailing_Zip"
                  name="Mailing_Zip"
                  value={props.beneficiary.Mailing_Zip}
                  onChange={props.onBeneficiaryChange}
                />
                <PickupList
                  label="Is mailing address same as physical address?"
                  options={props.yesOrNo}
                  id="Is_mailing_address_same_as_physical_address"
                  name="Is_mailing_address_same_as_physical_address"
                  value={
                    props.beneficiary
                      .Is_mailing_address_same_as_physical_address
                  }
                  onChange={props.onBeneficiaryChange}
                />
                {props.beneficiary
                  .Is_mailing_address_same_as_physical_address === "No" ? (
                  <>
                    <TextInput
                      label="Other Street"
                      type="text"
                      placeholder="Other Street"
                      id="Other_Street"
                      name="Other_Street"
                      value={props.beneficiary.Other_Street}
                      onChange={props.onBeneficiaryChange}
                    />
                    <PickupList
                      label="Other Unit"
                      options={props.Units}
                      id="Other_Unit"
                      name="Other_Unit"
                      value={props.beneficiary.Other_Unit}
                      onChange={props.onBeneficiaryChange}
                    />
                    <TextInput
                      label="Other Unit Number"
                      type="text"
                      id="Other_Unit_Number"
                      name="Other_Unit_Number"
                      value={props.beneficiary.Other_Unit_Number}
                      onChange={props.onBeneficiaryChange}
                    />
                    <TextInput
                      label="Other City"
                      type="text"
                      id="Other_City"
                      name="Other_City"
                      value={props.beneficiary.Other_City}
                      onChange={props.onBeneficiaryChange}
                    />
                    <PickupList
                      label="Other State"
                      options={props.states}
                      id="Other_State"
                      name="Other_State"
                      value={props.beneficiary.Other_State}
                      onChange={props.onBeneficiaryChange}
                    />
                    <TextInput
                      label="Other Zip Code"
                      type="text"
                      id="Other_Zip"
                      name="Other_Zip"
                      value={props.beneficiary.Other_Zip}
                      onChange={props.onBeneficiaryChange}
                    />
                  </>
                ) : null}
              </div>

              <div className="section1">
                <label className="head form-control">Case Information</label>
                <PickupList
                  label="Was Beneficiary ever in the US"
                  options={props.yesOrNo}
                  id="Was_Beneficiary_ever_in_the_US"
                  name="Was_Beneficiary_ever_in_the_US"
                  value={props.caseMmgContent.Was_Beneficiary_ever_in_the_US}
                  onChange={props.onCaseMmgChange}
                />
                <TextInput
                  label="Passport Number"
                  type="text"
                  id="Passport_Number"
                  name="Passport_Number"
                  value={props.beneficiary.Passport_Number}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="Travel Document Number"
                  type="text"
                  id="Travel_Document_Number"
                  name="Travel_Document_Number"
                  value={props.beneficiary.Travel_Document_Number}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="Country Passport Issued"
                  type="text"
                  id="Country_Passport_Issued"
                  name="Country_Passport_Issued"
                  value={props.beneficiary.Country_Passport_Issued}
                  onChange={props.onBeneficiaryChange}
                />
                <TextInput
                  label="Date Passport Expired"
                  type="date"
                  id="Date_Passport_Expired"
                  name="Date_Passport_Expired"
                  value={props.beneficiary.Date_Passport_Expired}
                  onChange={props.onBeneficiaryChange}
                />
                <PickupList
                  label="EVER in immigration proceedings"
                  options={props.yesOrNo}
                  id="EVER_in_immigration_proceedings"
                  name="EVER_in_immigration_proceedings"
                  value={props.beneficiary.EVER_in_immigration_proceedings}
                  onChange={props.onBeneficiaryChange}
                />
                <PickupList
                  label="Ever Filed Petition For The Beneficiary or other alien"
                  options={props.yesOrNo}
                  id="Ever_Filed_Petition_For_The_Beneficiary"
                  name="Ever_Filed_Petition_For_The_Beneficiary"
                  value={
                    props.caseMmgContent.Ever_Filed_Petition_For_The_Beneficiary
                  }
                  onChange={props.onCaseMmgChange}
                />
                <PickupList
                  label="Is Currently in the US"
                  options={props.yesOrNo}
                  id="Is_Currently_In_US"
                  name="Is_Currently_In_US"
                  value={props.beneficiary.Is_Currently_In_US}
                  onChange={props.onBeneficiaryChange}
                />
                {props.beneficiary.Is_Currently_In_US === "Yes" ? (
                  <>
                    <TextInput
                      label="Status of Last Entry"
                      type="text"
                      id="Status_of_Last_Entry"
                      name="Status_of_Last_Entry"
                      value={props.beneficiary.Status_of_Last_Entry}
                      onChange={props.onBeneficiaryChange}
                    />
                    <TextInput
                      label="I-94 No."
                      type="text"
                      id="I_94_No"
                      name="I_94_No"
                      value={props.beneficiary.I_94_No}
                      onChange={props.onBeneficiaryChange}
                    />
                    <TextInput
                      label="Date of Last Entry"
                      type="date"
                      id="Date_of_Last_Entry"
                      name="Date_of_Last_Entry"
                      value={props.beneficiary.Date_of_Last_Entry}
                      onChange={props.onBeneficiaryChange}
                    />
                    <TextInput
                      label="Date of Current Status Expires"
                      type="date"
                      id="Current_Status_Expires"
                      name="Current_Status_Expires"
                      value={props.beneficiary.Current_Status_Expires}
                      onChange={props.onBeneficiaryChange}
                    />
                  </>
                ) : null}
              </div>

              <div className="section1">
                <label className="head form-control">Upload Files</label>

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

export default I130Form;
