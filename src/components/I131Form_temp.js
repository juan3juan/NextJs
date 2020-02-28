import React from "react";
import TextInput from "./common/TextInput";
import PickupList from "./common/PickupList";
import MultiSelect from "./common/MultiSelect";

function I131Form(props) {
  return (
    <div className="container-fluid">
      <h1 className="title"> I-131 Form</h1>
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
                  type="phone"
                  placeholder="phone"
                  id="phone"
                  name="phone"
                  value={props.clientContent.phone}
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
              </div>

              <div className="section1">
                <label className="head form-control">
                  U.S. Physical Address
                </label>
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
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
              <div className="section1">
                <label className="head form-control">
                  Foreign Contact Information
                </label>
              </div>

              <div className="section1">
                <label className="head form-control">Degree Information</label>

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

export default I131Form;
