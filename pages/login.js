import React, { useState } from "react";
import Router from "next/router";
import * as zohoApi from "../server/zoho/zohoApi";

function Login(props) {
  const [userData, setUserData] = useState({ pin: "" });

  function handleSubmit() {
    event.preventDefault();
    console.log("userData.pin");
    console.log(userData);
    zohoApi.getRecordByID(props.id).then(records => {
      console.log("records");
      console.log(records);
      if (records[0].PIN === userData.pin) {
        const url = "/questionnaire/" + props.id;
        Router.push(url);
      } else {
        alert("The pin is not correct!");
      }
    });
  }

  function handleChange({ target }) {
    setUserData({
      ...userData,
      [target.name]: target.value
    });
  }
  return (
    <div>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="pin">Please input the pin from Email</label>

          <input
            type="text"
            id="pin"
            name="pin"
            value={userData.pin}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>

          {userData.error && <p className="error">Error: {userData.error}</p>}
        </form>
      </div>
      <style jsx>{`
        .login {
          max-width: 340px;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        form {
          display: flex;
          flex-flow: column;
        }

        label {
          font-weight: 600;
        }

        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .error {
          margin: 0.5rem 0 0;
          color: brown;
        }
      `}</style>
    </div>
  );
}

Login.getInitialProps = async ({ query: { id } }) => {
  return { id: id };
};

export default Login;

//3890818000007600020
