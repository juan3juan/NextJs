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
                <label className="head form-control">Case Information</label>
                <PickupList
                  label="I am filing this petition for my"
                  options={props.I130ApplyFor}
                  id="Relationship"
                  name="Relationship"
                  value={props.caseMmgContent.Relationship}
                  onChange={props.onCaseMmgChange}
                />
                <PickupList
                  label="If you are filing this petition for your child or parent,select the box that describes your relationship"
                  options={props.I130ChildParentRelationship}
                  id="Child_Parent_Relationship"
                  name="Child_Parent_Relationship"
                  value={props.caseMmgContent.Child_Parent_Relationship}
                  onChange={props.onCaseMmgChange}
                />
                <PickupList
                  label="If the beneficiary is your brother/sister, are you related by adoption?"
                  options={props.yesOrNo}
                  id="Sibling_Related_by_adoption"
                  name="Sibling_Related_by_adoption"
                  value={props.caseMmgContent.Sibling_Related_by_adoption}
                  onChange={props.onCaseMmgChange}
                />
                <PickupList
                  label="Did you gain lawful permanent resident status or  citizenship through adoption?"
                  options={props.yesOrNo}
                  id="Gain_PR_Citizen_Through_Adoption"
                  name="Gain_PR_Citizen_Through_Adoption"
                  value={props.caseMmgContent.Gain_PR_Citizen_Through_Adoption}
                  onChange={props.onCaseMmgChange}
                />
                <PickupList
                  label="Was Beneficiary ever in the US"
                  options={props.yesOrNo}
                  id="Was_Beneficiary_ever_in_the_US"
                  name="Was_Beneficiary_ever_in_the_US"
                  value={props.caseMmgContent.Was_Beneficiary_ever_in_the_US}
                  onChange={props.onCaseMmgChange}
                />
                <PickupList
                  label="Was Beneficiary ever in immigration proceedings"
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
                  label="Is Beneficiary Currently in the US"
                  options={props.yesOrNo}
                  id="Is_Currently_In_US"
                  name="Is_Currently_In_US"
                  value={props.beneficiary.Is_Currently_In_US}
                  onChange={props.onBeneficiaryChange}
                />
                {props.beneficiary.Is_Currently_In_US === "Yes" ? (
                  <>
                    <TextInput
                      label="Beneficiary Status of Last Entry"
                      type="text"
                      id="Status_of_Last_Entry"
                      name="Status_of_Last_Entry"
                      value={props.beneficiary.Status_of_Last_Entry}
                      onChange={props.onBeneficiaryChange}
                    />
                    <TextInput
                      label="Beneficiary I-94 No."
                      type="text"
                      id="I_94_No"
                      name="I_94_No"
                      value={props.beneficiary.I_94_No}
                      onChange={props.onBeneficiaryChange}
                    />
                    <TextInput
                      label="Beneficiary Date of Last Entry"
                      type="date"
                      id="Date_of_Last_Entry"
                      name="Date_of_Last_Entry"
                      value={props.beneficiary.Date_of_Last_Entry}
                      onChange={props.onBeneficiaryChange}
                    />
                    <TextInput
                      label="Beneficiary Date of Current Status Expires"
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
                  value={props.clientContent.Date_of_Birth}
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
                  label="Petition PR Class of Admission"
                  type="text"
                  id="PR_Class_of_Admission"
                  name="PR_Class_of_Admission"
                  value={props.clientContent.PR_Class_of_Admission}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Citizenship Place Of Issuance"
                  type="text"
                  id="CitizenshipPlaceOfIssuance"
                  name="CitizenshipPlaceOfIssuance"
                  value={props.citizenObj.CitizenshipPlaceOfIssuance}
                  onChange={props.onCitizenChange}
                />
                <TextInput
                  label="Citizenship Date Of Issuance"
                  type="date"
                  id="CitizenshipDateOfIssuance"
                  name="CitizenshipDateOfIssuance"
                  value={props.citizenObj.CitizenshipDateOfIssuance}
                  onChange={props.onCitizenChange}
                />
                <TextInput
                  label="PR Date Of Admission"
                  type="text"
                  id="PRDateOfAdmission"
                  name="PRDateOfAdmission"
                  value={props.citizenObj.PRDateOfAdmission}
                  onChange={props.onCitizenChange}
                />
                <TextInput
                  label="PR City Or Town"
                  type="text"
                  id="PRCityOrTown"
                  name="PRCityOrTown"
                  value={props.citizenObj.PRCityOrTown}
                  onChange={props.onCitizenChange}
                />
                <TextInput
                  label="PR State"
                  type="text"
                  id="PRState"
                  name="PRState"
                  value={props.citizenObj.PRState}
                  onChange={props.onCitizenChange}
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

              <div className="section1">
                <label className="head form-control">
                  Petitioner Marriage Information
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
                  label="Date of Current Marriage"
                  type="date"
                  id="DateOfCurrentMarriage"
                  name="DateOfCurrentMarriage"
                  value={props.marriageObj.DateOfCurrentMarriage}
                  onChange={props.onMarriageChange}
                />
                <TextInput
                  label="Marriage City"
                  type="text"
                  id="City"
                  name="City"
                  value={props.marriageObj.City}
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
                <TextInput
                  label="Marriage Province"
                  type="text"
                  id="Province"
                  name="Province"
                  value={props.marriageObj.Province}
                  onChange={props.onMarriageChange}
                />
                <TextInput
                  label="Marriage Country"
                  type="text"
                  id="Country"
                  name="Country"
                  value={props.marriageObj.Country}
                  onChange={props.onMarriageChange}
                />
                <TextInput
                  label="Spouse1 First Name"
                  type="text"
                  id="Spouse1_First_Name"
                  name="Spouse1_First_Name"
                  value={props.marriageObj.Spouse1_First_Name}
                  onChange={props.onMarriageChange}
                />
                <TextInput
                  label="Spouse1 Last Name"
                  type="text"
                  id="Spouse1_Last_Name"
                  name="Spouse1_Last_Name"
                  value={props.marriageObj.Spouse1_Last_Name}
                  onChange={props.onMarriageChange}
                />
                <TextInput
                  label="Spouse1 Middle Name"
                  type="text"
                  id="Spouse1_Middle_Name"
                  name="Spouse1_Middle_Name"
                  value={props.beneficiary.Spouse1_Middle_Name}
                  onChange={props.onMarriageChange}
                />
                <TextInput
                  label="Date of Marriage Ended with Spouse1"
                  type="date"
                  id="Spouse1DateOfMarriageEnd"
                  name="Spouse1DateOfMarriageEnd"
                  value={props.marriageObj.Spouse1DateOfMarriageEnd}
                  onChange={props.onMarriageChange}
                />
                <TextInput
                  label="Spouse2 First Name"
                  type="text"
                  id="Spouse2_First_Name"
                  name="Spouse2_First_Name"
                  value={props.marriageObj.Spouse2_First_Name}
                  onChange={props.onMarriageChange}
                />
                <TextInput
                  label="Spouse2 Last Name"
                  type="text"
                  id="Spouse2_Last_Name"
                  name="Spouse2_Last_Name"
                  value={props.marriageObj.Spouse2_Last_Name}
                  onChange={props.onMarriageChange}
                />
                <TextInput
                  label="Spouse2 Middle Name"
                  type="text"
                  id="Spouse2_Middle_Name"
                  name="Spouse2_Middle_Name"
                  value={props.beneficiary.Spouse2_Middle_Name}
                  onChange={props.onMarriageChange}
                />
                <TextInput
                  label="Date of Marriage Ended with Spouse2"
                  type="date"
                  id="Spouse2DateOfMarriageEnd"
                  name="Spouse2DateOfMarriageEnd"
                  value={props.marriageObj.Spouse2DateOfMarriageEnd}
                  onChange={props.onMarriageChange}
                />
              </div>

              <div className="section1">
                <label className="head form-control">
                  Petitioner Parents Information
                </label>
                <TextInput
                  label="Parent1 First Name"
                  type="text"
                  id="Parent1FirstName"
                  name="Parent1FirstName"
                  value={props.parentObj.Parent1FirstName}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent1 Last Name"
                  type="text"
                  id="Parent1LastName"
                  name="Parent1LastName"
                  value={props.parentObj.Parent1LastName}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent1 Middle Name"
                  type="text"
                  id="Parent1MiddleName"
                  name="Parent1MiddleName"
                  value={props.parentObj.Parent1MiddleName}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent1 Date of Birth"
                  type="date"
                  id="Parent1DOB"
                  name="Parent1DOB"
                  value={props.parentObj.Parent1DOB}
                  onChange={props.onParentChange}
                />
                <PickupList
                  label="Parent1 Gender"
                  options={props.Gender}
                  id="Parent1Sex"
                  name="Parent1Sex"
                  value={props.parentObj.Parent1Sex}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent1 Country of Birth"
                  type="text"
                  id="Parent1CountryOfBirth"
                  name="Parent1CountryOfBirth"
                  value={props.parentObj.Parent1CountryOfBirth}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent1 City of Residence"
                  type="text"
                  id="Parent1CityOfResidence"
                  name="Parent1CityOfResidence"
                  value={props.parentObj.Parent1CityOfResidence}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent1 Country of Residence"
                  type="text"
                  id="Parent1CountryOfResidence"
                  name="Parent1CountryOfResidence"
                  value={props.parentObj.Parent1CountryOfResidence}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent2 First Name"
                  type="text"
                  id="Parent2FirstName"
                  name="Parent2FirstName"
                  value={props.parentObj.Parent2FirstName}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent2 Last Name"
                  type="text"
                  id="Parent2LastName"
                  name="Parent2LastName"
                  value={props.parentObj.Parent2LastName}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent2 Middle Name"
                  type="text"
                  id="Parent2MiddleName"
                  name="Parent2MiddleName"
                  value={props.parentObj.Parent2MiddleName}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent2 Date of Birth"
                  type="date"
                  id="Parent2DOB"
                  name="Parent2DOB"
                  value={props.parentObj.Parent2DOB}
                  onChange={props.onParentChange}
                />
                <PickupList
                  label="Parent2 Gender"
                  options={props.Gender}
                  id="Parent2Sex"
                  name="Parent2Sex"
                  value={props.parentObj.Parent2Sex}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent2 Country of Birth"
                  type="text"
                  id="Parent2CountryOfBirth"
                  name="Parent2CountryOfBirth"
                  value={props.parentObj.Parent2CountryOfBirth}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent2 City of Residence"
                  type="text"
                  id="Parent2CityOfResidence"
                  name="Parent2CityOfResidence"
                  value={props.parentObj.Parent2CityOfResidence}
                  onChange={props.onParentChange}
                />
                <TextInput
                  label="Parent2 Country of Residence"
                  type="text"
                  id="Parent2CountryOfResidence"
                  name="Parent2CountryOfResidence"
                  value={props.parentObj.Parent2CountryOfResidence}
                  onChange={props.onParentChange}
                />
              </div>
              <div className="section1">
                <label className="head form-control">
                  Petitioner Employment History
                </label>
                <TextInput
                  label="Name of Employer/Company 1"
                  type="text"
                  id="Company1"
                  name="Company1"
                  value={props.employmentObj.Company1}
                  onChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer1 Street"
                  type="text"
                  placeholder="Employer1_Street"
                  id="Employer1_Street"
                  name="Employer1_Street"
                  value={props.employmentObj.Employer1_Street}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <PickupList
                  label="Employer1 Unit"
                  options={props.Units}
                  id="Employer1_Unit"
                  name="Employer1_Unit"
                  value={props.employmentObj.Employer1_Unit}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer1 Unit Number"
                  type="text"
                  id="Employer1_Unit_Number"
                  name="Employer1_Unit_Number"
                  value={props.employmentObj.Employer1_Unit_Number}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer1 City"
                  type="text"
                  id="Employer1_City"
                  name="Employer1_City"
                  value={props.employmentObj.Employer1_City}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <PickupList
                  label="Employer1 State"
                  options={props.states}
                  id="Employer1_State"
                  name="Employer1_State"
                  value={props.employmentObj.Employer1_State}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer1 Zip"
                  type="text"
                  id="Employer1_Zip"
                  name="Employer1_Zip"
                  value={props.employmentObj.Employer1_Zip}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer1 Province"
                  type="text"
                  id="Employer1_Province"
                  name="Employer1_Province"
                  value={props.employmentObj.Employer1_Province}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer1 Postal Code"
                  type="text"
                  id="Employer1_Postal_Code"
                  name="Employer1_Postal_Code"
                  value={props.employmentObj.Employer1_Postal_Code}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer1 Country"
                  type="text"
                  id="Employer1_Country"
                  name="Employer1_Country"
                  value={props.employmentObj.Employer1_Country}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer1 Your Occupation"
                  type="text"
                  id="Employer1_Your_Occupation"
                  name="Employer1_Your_Occupation"
                  value={props.employmentObj.Employer1_Your_Occupation}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer1 Date From"
                  type="date"
                  id="Employer1_Date_From"
                  name="Employer1_Date_From"
                  value={props.employmentObj.Employer1_Date_From}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer1 Date To"
                  type="date"
                  id="Employer1_Date_To"
                  name="Employer1_Date_To"
                  value={props.employmentObj.Employer1_Date_To}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Name of Employer/Company 2"
                  type="text"
                  id="Company2"
                  name="Company2"
                  value={props.employmentObj.Company2}
                  onChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer2 Street"
                  type="text"
                  placeholder="Employer2_Street"
                  id="Employer2_Street"
                  name="Employer2_Street"
                  value={props.employmentObj.Employer2_Street}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <PickupList
                  label="Employer2 Unit"
                  options={props.Units}
                  id="Employer2_Unit"
                  name="Employer2_Unit"
                  value={props.employmentObj.Employer2_Unit}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer2 Unit Number"
                  type="text"
                  id="Employer2_Unit_Number"
                  name="Employer2_Unit_Number"
                  value={props.employmentObj.Employer2_Unit_Number}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer2 City"
                  type="text"
                  id="Employer2_City"
                  name="Employer2_City"
                  value={props.employmentObj.Employer2_City}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <PickupList
                  label="Employer2 State"
                  options={props.states}
                  id="Employer2_State"
                  name="Employer2_State"
                  value={props.employmentObj.Employer2_State}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer2 Zip"
                  type="text"
                  id="Employer2_Zip"
                  name="Employer2_Zip"
                  value={props.employmentObj.Employer2_Zip}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer2 Province"
                  type="text"
                  id="Employer2_Province"
                  name="Employer2_Province"
                  value={props.employmentObj.Employer2_Province}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer2 Postal Code"
                  type="text"
                  id="Employer2_Postal_Code"
                  name="Employer2_Postal_Code"
                  value={props.employmentObj.Employer2_Postal_Code}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer2 Country"
                  type="text"
                  id="Employer2_Country"
                  name="Employer2_Country"
                  value={props.employmentObj.Employer2_Country}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer2 Your Occupation"
                  type="text"
                  id="Employer2_Your_Occupation"
                  name="Employer2_Your_Occupation"
                  value={props.employmentObj.Employer2_Your_Occupation}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer2 Date From"
                  type="date"
                  id="Employer2_Date_From"
                  name="Employer2_Date_From"
                  value={props.employmentObj.Employer2_Date_From}
                  onEmploymentChange={props.onEmploymentChange}
                />
                <TextInput
                  label="Employer2 Date To"
                  type="date"
                  id="Employer2_Date_To"
                  name="Employer2_Date_To"
                  value={props.employmentObj.Employer2_Date_To}
                  onEmploymentChange={props.onEmploymentChange}
                />
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
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
                  value={props.beneficiary.Date_of_Birth}
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
                  label="PR Class of Admission"
                  type="text"
                  id="PR_Class_of_Admission"
                  name="PR_Class_of_Admission"
                  value={props.beneficiary.PR_Class_of_Admission}
                  onChange={props.onBeneficiaryChange}
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
                <label className="head form-control">
                  Beneficiary Marriage Information
                </label>
                <TextInput
                  label="Married Times"
                  type="text"
                  id="MarriedTimes"
                  name="MarriedTimes"
                  value={props.marriageObjBene.MarriedTimes}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Date of Current Marriage"
                  type="date"
                  id="DateOfCurrentMarriage"
                  name="DateOfCurrentMarriage"
                  value={props.marriageObjBene.DateOfCurrentMarriage}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Marriage City"
                  type="text"
                  id="City"
                  name="City"
                  value={props.marriageObjBene.City}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Marriage State"
                  type="text"
                  id="State"
                  name="State"
                  value={props.marriageObjBene.State}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Marriage Province"
                  type="text"
                  id="Province"
                  name="Province"
                  value={props.marriageObjBene.Province}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Marriage Country"
                  type="text"
                  id="Country"
                  name="Country"
                  value={props.marriageObjBene.Country}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Spouse1 First Name"
                  type="text"
                  id="Spouse1_First_Name"
                  name="Spouse1_First_Name"
                  value={props.marriageObjBene.Spouse1_First_Name}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Spouse1 Last Name"
                  type="text"
                  id="Spouse1_Last_Name"
                  name="Spouse1_Last_Name"
                  value={props.marriageObjBene.Spouse1_Last_Name}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Spouse1 Middle Name"
                  type="text"
                  id="Spouse1_Middle_Name"
                  name="Spouse1_Middle_Name"
                  value={props.beneficiary.Spouse1_Middle_Name}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Date of Marriage Ended with Spouse1"
                  type="date"
                  id="Spouse1DateOfMarriageEnd"
                  name="Spouse1DateOfMarriageEnd"
                  value={props.marriageObjBene.Spouse1DateOfMarriageEnd}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Spouse2 First Name"
                  type="text"
                  id="Spouse2_First_Name"
                  name="Spouse2_First_Name"
                  value={props.marriageObjBene.Spouse2_First_Name}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Spouse2 Last Name"
                  type="text"
                  id="Spouse2_Last_Name"
                  name="Spouse2_Last_Name"
                  value={props.marriageObjBene.Spouse2_Last_Name}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Spouse2 Middle Name"
                  type="text"
                  id="Spouse2_Middle_Name"
                  name="Spouse2_Middle_Name"
                  value={props.beneficiary.Spouse2_Middle_Name}
                  onChange={props.onBeneMarriageChange}
                />
                <TextInput
                  label="Date of Marriage Ended with Spouse2"
                  type="date"
                  id="Spouse2DateOfMarriageEnd"
                  name="Spouse2DateOfMarriageEnd"
                  value={props.marriageObjBene.Spouse2DateOfMarriageEnd}
                  onChange={props.onBeneMarriageChange}
                />
              </div>

              <div className="section1">
                <label className="head form-control">
                  Beneficiary Family Information
                </label>
                <TextInput
                  label="Person 1 First Name"
                  type="text"
                  id="P1_First_Name"
                  name="P1_First_Name"
                  value={props.familyBene.P1_First_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 1 Middle Name"
                  type="text"
                  id="P1_Middle_Name"
                  name="P1_Middle_Name"
                  value={props.familyBene.P1_Middle_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 1 Last Name"
                  type="text"
                  id="P1_Last_Name"
                  name="P1_Last_Name"
                  value={props.familyBene.P1_Last_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 1 Relationship"
                  type="text"
                  id="P1_Relationship"
                  name="P1_Relationship"
                  value={props.familyBene.P1_Relationship}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 1 Date Of Birth"
                  type="date"
                  id="P1_DateOfBirth"
                  name="P1_DateOfBirth"
                  value={props.familyBene.P1_DateOfBirth}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 1 Country Of Birth"
                  type="text"
                  id="P1_CountryOfBirth"
                  name="P1_CountryOfBirth"
                  value={props.familyBene.P1_CountryOfBirth}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 2 First Name"
                  type="text"
                  id="P2_First_Name"
                  name="P2_First_Name"
                  value={props.familyBene.P2_First_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 2 Middle Name"
                  type="text"
                  id="P2_Middle_Name"
                  name="P2_Middle_Name"
                  value={props.familyBene.P2_Middle_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 2 Last Name"
                  type="text"
                  id="P2_Last_Name"
                  name="P2_Last_Name"
                  value={props.familyBene.P2_Last_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 2 Relationship"
                  type="text"
                  id="P2_Relationship"
                  name="P2_Relationship"
                  value={props.familyBene.P2_Relationship}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 2 Date Of Birth"
                  type="date"
                  id="P2_DateOfBirth"
                  name="P2_DateOfBirth"
                  value={props.familyBene.P2_DateOfBirth}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 2 Country Of Birth"
                  type="text"
                  id="P2_CountryOfBirth"
                  name="P2_CountryOfBirth"
                  value={props.familyBene.P2_CountryOfBirth}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 3 First Name"
                  type="text"
                  id="P3_First_Name"
                  name="P3_First_Name"
                  value={props.familyBene.P3_First_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 3 Middle Name"
                  type="text"
                  id="P3_Middle_Name"
                  name="P3_Middle_Name"
                  value={props.familyBene.P3_Middle_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 3 Last Name"
                  type="text"
                  id="P3_Last_Name"
                  name="P3_Last_Name"
                  value={props.familyBene.P3_Last_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 3 Relationship"
                  type="text"
                  id="P3_Relationship"
                  name="P3_Relationship"
                  value={props.familyBene.P3_Relationship}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 3 Date Of Birth"
                  type="date"
                  id="P3_DateOfBirth"
                  name="P3_DateOfBirth"
                  value={props.familyBene.P3_DateOfBirth}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 3 Country Of Birth"
                  type="text"
                  id="P3_CountryOfBirth"
                  name="P3_CountryOfBirth"
                  value={props.familyBene.P3_CountryOfBirth}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 4 First Name"
                  type="text"
                  id="P4_First_Name"
                  name="P4_First_Name"
                  value={props.familyBene.P4_First_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 4 Middle Name"
                  type="text"
                  id="P4_Middle_Name"
                  name="P4_Middle_Name"
                  value={props.familyBene.P4_Middle_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 4 Last Name"
                  type="text"
                  id="P4_Last_Name"
                  name="P4_Last_Name"
                  value={props.familyBene.P4_Last_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 4 Relationship"
                  type="text"
                  id="P4_Relationship"
                  name="P4_Relationship"
                  value={props.familyBene.P4_Relationship}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 4 Date Of Birth"
                  type="date"
                  id="P4_DateOfBirth"
                  name="P4_DateOfBirth"
                  value={props.familyBene.P4_DateOfBirth}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 4 Country Of Birth"
                  type="text"
                  id="P4_CountryOfBirth"
                  name="P4_CountryOfBirth"
                  value={props.familyBene.P4_CountryOfBirth}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 5 First Name"
                  type="text"
                  id="P5_First_Name"
                  name="P5_First_Name"
                  value={props.familyBene.P5_First_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 5 Middle Name"
                  type="text"
                  id="P5_Middle_Name"
                  name="P5_Middle_Name"
                  value={props.familyBene.P5_Middle_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 5 Last Name"
                  type="text"
                  id="P5_Last_Name"
                  name="P5_Last_Name"
                  value={props.familyBene.P5_Last_Name}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 5 Relationship"
                  type="text"
                  id="P5_Relationship"
                  name="P5_Relationship"
                  value={props.familyBene.P5_Relationship}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 5 Date Of Birth"
                  type="date"
                  id="P5_DateOfBirth"
                  name="P5_DateOfBirth"
                  value={props.familyBene.P5_DateOfBirth}
                  onChange={props.onFamilyBeneChange}
                />
                <TextInput
                  label="Person 5 Country Of Birth"
                  type="text"
                  id="P5_CountryOfBirth"
                  name="P5_CountryOfBirth"
                  value={props.familyBene.P5_CountryOfBirth}
                  onChange={props.onFamilyBeneChange}
                />
              </div>

              <div className="section1">
                <label className="head form-control">
                  Beneficiary Employment History
                </label>
                <TextInput
                  label="Name of Current Employer/Company(if applicable)"
                  type="text"
                  id="Company1"
                  name="Company1"
                  value={props.employmentBene.Company1}
                  onChange={props.onEmploymentBeneChange}
                />
                <TextInput
                  label="Employer1 Street"
                  type="text"
                  placeholder="Employer1_Street"
                  id="Employer1_Street"
                  name="Employer1_Street"
                  value={props.employmentBene.Employer1_Street}
                  onEmploymentBeneChange={props.onEmploymentBeneChange}
                />
                <PickupList
                  label="Employer1 Unit"
                  options={props.Units}
                  id="Employer1_Unit"
                  name="Employer1_Unit"
                  value={props.employmentBene.Employer1_Unit}
                  onEmploymentBeneChange={props.onEmploymentBeneChange}
                />
                <TextInput
                  label="Employer1 Unit Number"
                  type="text"
                  id="Employer1_Unit_Number"
                  name="Employer1_Unit_Number"
                  value={props.employmentBene.Employer1_Unit_Number}
                  onEmploymentBeneChange={props.onEmploymentBeneChange}
                />
                <TextInput
                  label="Employer1 City"
                  type="text"
                  id="Employer1_City"
                  name="Employer1_City"
                  value={props.employmentBene.Employer1_City}
                  onEmploymentBeneChange={props.onEmploymentBeneChange}
                />
                <PickupList
                  label="Employer1 State"
                  options={props.states}
                  id="Employer1_State"
                  name="Employer1_State"
                  value={props.employmentBene.Employer1_State}
                  onEmploymentBeneChange={props.onEmploymentBeneChange}
                />
                <TextInput
                  label="Employer1 Zip"
                  type="text"
                  id="Employer1_Zip"
                  name="Employer1_Zip"
                  value={props.employmentBene.Employer1_Zip}
                  onEmploymentBeneChange={props.onEmploymentBeneChange}
                />
                <TextInput
                  label="Employer1 Province"
                  type="text"
                  id="Employer1_Province"
                  name="Employer1_Province"
                  value={props.employmentBene.Employer1_Province}
                  onEmploymentBeneChange={props.onEmploymentBeneChange}
                />
                <TextInput
                  label="Employer1 Postal Code"
                  type="text"
                  id="Employer1_Postal_Code"
                  name="Employer1_Postal_Code"
                  value={props.employmentBene.Employer1_Postal_Code}
                  onEmploymentBeneChange={props.onEmploymentBeneChange}
                />
                <TextInput
                  label="Employer1 Country"
                  type="text"
                  id="Employer1_Country"
                  name="Employer1_Country"
                  value={props.employmentBene.Employer1_Country}
                  onEmploymentBeneChange={props.onEmploymentBeneChange}
                />
                <TextInput
                  label="Employer1 Date From"
                  type="date"
                  id="Employer1_Date_From"
                  name="Employer1_Date_From"
                  value={props.employmentBene.Employer1_Date_From}
                  onEmploymentBeneChange={props.onEmploymentBeneChange}
                />
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
