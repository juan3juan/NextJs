const express = require("express");
const next = require("next");

//const port = parseInt(process.env.PORT, 10) || 3010;
const port = 3010;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const ZCRMRestClient = require("zcrmsdk");
const mysql_util = require("zcrmsdk/lib/js/mysql/mysql_util");
const initialzie = require("./zoho/Initialize");
const wrap = require("./zoho/wrapresult");
const bodyParser = require("body-parser");

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ entended: true }));

  server.post("/saveRecord", function(req, res) {
    let record = req.body.record;
    //let data = JSON.parse(req);
    console.log(req.method);
    saveRecordToZoho(record, res);
    //res.send("POST request to the homePage");
    // res.send(id);
  });

  function saveRecordToZoho(recordInput, res) {
    let input = {};
    input.module = "Cases_Info";
    console.log(recordInput);
    // let record = JSON.parse(
    //   `{ \"data\": [ { \"Name\": \"888888\", \"Dates_maintained_J_Status\": \"New York\", \"First_Name\": \"test\" }] }`
    // );
    console.log("recordInput.Full_Name: " + recordInput.Full_Name);
    let recordInner = {
      Name: "888",
      Dates_maintained_J_Status: recordInput.Full_Name
    };
    let record = {
      data: [recordInner]
    };
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

  function updateRecordToZoho(res) {
    let input = {};
    input.module = "Cases_Info";
    // let record = JSON.parse(
    //   `{ \"data\": [ { \"Name\": \"888888\", \"LCA_ETA_Case_Number\": \"888\",\"More_than_50\": \"Yes\" }] }`
    // );
    let recordInner = {
      Name: "888",
      Dates_maintained_J_Status: recordInput.Full_Name
    };
    let record = {
      data: [recordInner]
    };
    input.body = record;
    input.id = "3890818000013536002";
    ZCRMRestClient.API.MODULES.put(input).then(function(response) {
      let data = JSON.parse(response.body).data;
      console.log(data);
      res.send(data);
    });
  }

  server.get("/a", (req, res) => {
    console.log("a-req.query :");
    console.log(req.query);
    return app.render(req, res, "/a", req.query);
  });

  server.get("/b", (req, res) => {
    return app.render(req, res, "/b", req.query);
  });

  server.get("/posts/:id", (req, res) => {
    console.log("post-req.query :");
    console.log(req.params);
    return app.render(req, res, "/posts", { id: req.params.id });
  });

  server.get("/api/show", (req, res) => {
    return res.send("we made it!");
  });

  server.get("/getRecord", function(req, res) {
    try {
      ZCRMRestClient.initialize().then(function() {
        mysql_util.getOAuthTokens().then(function(result) {
          if (result == null || result.length === 0) {
            //This token needs to be updated for initialization
            let token =
              "1000.8b10455febcd56e8884f7d92799ec540.fd95d5251a143391c26791afc38c3aa2";
            initialzie.getTokenOnetime(token);
          } else {
            getContacts(res);
            //saveRecordToZoho(res);
            //updateRecordToZoho(res);
          }
        });
      });
    } catch {
      throw new Error("exception!\n" + e);
    }
  });

  function getContacts(res) {
    let input = {};
    input.module = "Contacts";
    let params = {};
    params.page = 0;
    params.per_page = 100;
    input.params = params;
    ZCRMRestClient.API.MODULES.get(input).then(function(response) {
      let data = JSON.parse(response.body).data;
      //console.log(data);
      // let result = wrap.wrapresult(input.module, data);
      // res.set("Content-Type", "text/html");
      // res.send(result);
      res.send(data);
    });
  }

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
