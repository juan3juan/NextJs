const baseUrl = "/getRecord/";

export function getRecord() {
  console.log("baseUrl: " + baseUrl);
  console.log(
    "process.env.REACT_APP_API_URL: " + process.env.REACT_APP_API_URL
  );
  return fetch(baseUrl).then(function(response) {
    if (response.ok) return response.json();
  });
  //return "Hello";
}

export function saveRecord(record) {
  return fetch("/saveRecord", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      record
    })
  }).then(function(response) {
    if (response.ok) return response.json();
  });
}

// function saveRecordToZoho() {
//   let input = {};
//   input.module = "Contacts";
//   let record = JSON.parse(
//     `{ \"data\": [ { \"Client_Number\": \"888888\", \"Location\": \"New York\" }] }`
//   );
//   input.body = record;
//   ZCRMRestClient.API.MODULES.post(input).then(function(response) {
//     let data = JSON.parse(response.body).data;
//     // console.log(data);
//     // let result = wrap.wrapresult(input.module, data);
//     // res.set("Content-Type", "text/html");
//     //res.send(result);
//     console.log(data);
//     res.send(data);
//   });
// }
