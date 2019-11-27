const ZCRMRestClient = require("zcrmsdk");
const mysql_util = require("zcrmsdk/lib/js/mysql/mysql_util");
//const initialzie = require("./zoho/Initialize");
// const wrap = require("./wrapresult");

// module.exports ={
//   getRecord: async function(input) {
//     ZCRMRestClient.initialize().then(function() {
//       ZCRMRestClient.API.MODULES.get(input).then(function(response) {
//         let data = JSON.parse(response.body).data;
//         console.log(data);
//         let result = wrap.wrapresult(input.module, data);
//         res.set("Content-Type", "text/html");
//         res.send(result);
//       });
//     });
//   }

//   // function createRecord(input) {}
// }

const baseUrl = "/getRecord/";

export function getRecord() {
  console.log("baseUrl: " + baseUrl);
  console.log(
    "process.env.REACT_APP_API_URL: " + process.env.REACT_APP_API_URL
  );
  return fetch(baseUrl).then(function(response) {
    if (response.ok) return response.json();
  });
}

export function saveRecord() {
  try {
    ZCRMRestClient.initialize().then(function() {
      mysql_util.getOAuthTokens().then(function(result) {
        if (result == null || result.length === 0) {
          //This token needs to be updated for initialization
          let token =
            "1000.8b10455febcd56e8884f7d92799ec540.fd95d5251a143391c26791afc38c3aa2";
          initialzie.getTokenOnetime(token);
        } else {
          //saveRecordToZoho(record);
          saveRecordToZoho();
        }
      });
    });
  } catch {
    throw new Error("exception!\n" + e);
  }
}

function saveRecordToZoho() {
  let input = {};
  input.module = "Contacts";
  let record = JSON.parse(
    `{ \"data\": [ { \"Client_Number\": \"888888\", \"Location\": \"New York\" }] }`
  );
  input.body = record;
  ZCRMRestClient.API.MODULES.post(input).then(function(response) {
    let data = JSON.parse(response.body).data;
    // console.log(data);
    // let result = wrap.wrapresult(input.module, data);
    // res.set("Content-Type", "text/html");
    //res.send(result);
    console.log(data);
    res.send(data);
  });
}

// export function saveRecord(record) {
//   return fetch("/saveRecord", {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({
//       record
//     })
//   }).then(function(response) {});
// }
