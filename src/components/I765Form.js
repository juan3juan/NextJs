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
                  value={props.companyContent.Account_Number}
                  onChange={props.onChange}
                />
                <TextInput
                  label="Phone"
                  type="text"
                  placeholder="Phone"
                  id="Phone"
                  name="Phone"
                  value={props.formContent.Phone}
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

                {/* <PickupList
                  label="Gender"
                  options={props.Gender}
                  id="Gender"
                  name="Gender"
                  value={props.formContent.Gender}
                  onChange={props.onChange}
                /> */}
              </div>

              <div className="section1">
                <label className="head form-control">Contact</label>
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
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
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
