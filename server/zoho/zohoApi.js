const baseUrl = "/getRecord/";
//process.env.REACT_APP_API_URL

export function getRecord() {
  console.log("baseUrl: " + baseUrl);
  return fetch(baseUrl).then(function(response) {
    if (response.ok) return response.json();
  });
  //return "Hello";
}

export function getRecordByID(id) {
  console.log(id);
  let url = baseUrl + id;
  console.log("url :");
  console.log(url);
  return fetch(url).then(response => {
    if (!response.ok) throw new Error("Network not ok.");
    return response.json().then(records => {
      if (records.length !== 1) throw new Error("Record not found!");
      return records; //should only find one record per id
    });
  });
}

export function saveRecord(record) {
  return fetch("/saveRecord", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      record
    })
  }).then(function(response) {
    if (response.ok) return response;
  });
}

export function searchRecordByCriteria(criteria) {
  let url = "/searchRecord/" + criteria;
  return fetch(url).then(response => {
    if (!response.ok) throw new Error("Network not ok.");
    return response.json().then(records => {
      if (records.length !== 1) throw new Error("Record not found!");
      return records;
    });
  });
}

// export function saveRecord(record) {
//   return fetch("/saveRecord", {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({
//       record
//     })
//   }).then(function(response) {
//     if (response.ok) return response.json();
//   });
// }

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
