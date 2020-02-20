const express = require("express");
const next = require("next");

//const port = parseInt(process.env.PORT, 10) || 3010;
const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const ZCRMRestClient = require("zcrmsdk");
const mysql_util = require("zcrmsdk/lib/js/mysql/mysql_util");
const initialzie = require("./zoho/Initialize");
const wrap = require("./zoho/wrapresult");
//const bodyParser = require("body-parser");
//for upload file
const multer = require("multer");
const cors = require("cors");
// for upload attachment
let fs = require("fs");

app.prepare().then(() => {
  const server = express();
  // retrive post query parmas using express
  server.use(express.json());

  // for upload file
  server.use(cors());
  let storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "src/fileUpload");
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    }
  });
  var upload = multer({ storage: storage }).array("file");
  server.post("/upload", (req, res) => {
    upload(req, res, function(err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send(req.file);
    });
  });

  // for upload attachment
  // upload attachment
  server.post("/uploadAttachment", (req, res) => {
    try {
      ZCRMRestClient.initialize().then(function() {
        mysql_util.getOAuthTokens().then(function(result) {
          if (result == null || result.length === 0) {
            //This token needs to be updated for initialization
            let token =
              "1000.8b10455febcd56e8884f7d92799ec540.fd95d5251a143391c26791afc38c3aa2";
            initialzie.getTokenOnetime(token);
          } else {
            let record = req.body.record;
            uploadAttachment(record, res);
          }
        });
      });
    } catch {
      throw new Error("exception!\n" + e);
    }
  });

  function uploadAttachment(record, res) {
    let input = {};
    input.module = "Cases_Info";
    //input.id = "3890818000011802561";
    input.id = record.id;
    let dirname = "src/fileUpload/";
    fs.readdir(dirname, function(err, filenames) {
      if (err) {
        throw new Error("read directory Error: " + err);
      }
      filenames.forEach(function(filename) {
        let filepath = dirname + filename;
        fs.readFile(filepath, "utf-8", function(err, content) {
          if (err) {
            throw new Error("uploadFile Error: " + err);
          }
          let readStream = fs.createReadStream(filepath);
          input.x_file_content = readStream;

          const uploadFileResp = ZCRMRestClient.API.ATTACHMENTS.uploadFile(
            input
          );
          console.log("uploadFileResp");
          console.log(uploadFileResp);
          //delete the update file
          //  if(uploadFileResp==ok){
          fs.unlink(filepath, err => {
            if (err) throw err;
          });
          //}
        });
      });
    });
  }

  server.post("/saveRecord", function(req, res) {
    let params = {
      record: req.body.record,
      module: req.body.module
    };

    //saveRecordToZoho(record, res);
    updateRecordToZoho(params, res);
    //res.send("POST request to the homePage");
    // res.send(id);
  });

  function saveRecordToZoho(params, res) {
    let input = {};
    input.module = params.module;
    let recordInput = params.record;
    console.log("recordInput :");
    console.log(recordInput);
    // let record = JSON.parse(
    //   `{ \"data\": [ { \"Name\": \"888888\", \"Dates_maintained_J_Status\": \"New York\", \"First_Name\": \"test\" }] }`
    // );
    // console.log("recordInput.Full_Name: " + recordInput.Full_Name);
    let recordInner = {
      Petitioner_Title: "title111",
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
      console.log("data from zohoAPI :");
      console.log(data);
      res.send(data);
    });
  }

  function updateRecordToZoho(params, res) {
    let input = {};
    input.module = params.module;
    let recordInput = params.record;
    // let record = JSON.parse(
    //   `{ \"data\": [ { \"Name\": \"888888\", \"LCA_ETA_Case_Number\": \"888\",\"More_than_50\": \"Yes\" }] }`
    // );
    // let recordInner = {
    //   Petitioner_Title: recordInput.Petitioner_Title,
    //   Dates_maintained_J_Status: recordInput.Full_Name
    // };
    let record = {
      data: [recordInput]
    };
    input.body = record;
    input.id = recordInput.id;
    //"3890818000013536002";
    ZCRMRestClient.API.MODULES.put(input).then(function(response) {
      let data = JSON.parse(response.body).data;
      console.log("data from update: ");
      console.log(data);
      res.send(data);
    });
  }

  server.get("/note", (req, res) => {
    try {
      ZCRMRestClient.initialize().then(function() {
        mysql_util.getOAuthTokens().then(function(result) {
          if (result == null || result.length === 0) {
            //This token needs to be updated for initialization
            let token =
              "1000.8b10455febcd56e8884f7d92799ec540.fd95d5251a143391c26791afc38c3aa2";
            initialzie.getTokenOnetime(token);
          } else {
            insertNoteToZoho(res);
          }
        });
      });
    } catch {
      throw new Error("exception!\n" + e);
    }
  });
  function insertNoteToZoho(res) {
    let input = {};
    // let record = JSON.parse(
    //   `{ \"data\": [ { \"Name\": \"888888\", \"Dates_maintained_J_Status\": \"New York\", \"First_Name\": \"test\" }] }`
    // );
    // console.log("recordInput.Full_Name: " + recordInput.Full_Name);

    let recordInner = {
      entityId: "3890818000011802561",
      Note_Title: "Title",
      Note_Content: "content",
      Name: "name"
    };
    let record = {
      data: [recordInner]
    };
    input.module = "Cases_Info";
    input.body = record;
    ZCRMRestClient.API.MODULES.post(input).then(function(response) {
      let data = JSON.parse(response.body).data;
      // console.log(data);
      // let result = wrap.wrapresult(input.module, data);
      // res.set("Content-Type", "text/html");
      //res.send(result);
      console.log("data from zohoAPI :");
      console.log(response.body);
      res.send(data);
    });
  }

  server.get("/a", (req, res) => {
    // console.log("a-req.query :");
    // console.log(req.query);
    // return app.render(req, res, "/a", req.query);
    try {
      ZCRMRestClient.initialize().then(function() {
        mysql_util.getOAuthTokens().then(function(result) {
          if (result == null || result.length === 0) {
            //This token needs to be updated for initialization
            let token =
              "1000.8b10455febcd56e8884f7d92799ec540.fd95d5251a143391c26791afc38c3aa2";
            initialzie.getTokenOnetime(token);
          } else {
            getRecord(res);
          }
        });
      });
    } catch {
      throw new Error("exception!\n" + e);
    }
  });

  function getRecord(res) {
    let input = {};
    input.module = "Deals";
    input.id = "3890818000018755021";
    //input.id = "3890818000013679004";

    ZCRMRestClient.API.MODULES.get(input).then(function(response) {
      let data = JSON.parse(response.body).data;
      //console.log(data);
      // let result = wrap.wrapresult(input.module, data);
      // res.set("Content-Type", "text/html");
      // res.send(result);
      res.send(data);
    });
  }

  server.get("/b/:id", (req, res) => {
    res.send(req.params.id);
    //return app.render(req, res, "/b", req.query);
  });

  server.param("id", function(req, res, next, name) {
    let modifiedID = "333";
    req.id = modifiedID;
    next();
  });
  server.get("/posts/:id", (req, res) => {
    console.log("post-req.query :");
    console.log(req.params);
    return app.render(req, res, "/posts", { id: req.params.id });
  });

  server.get("/questionnaire/:id", (req, res) => {
    console.log("post-req.query :");
    console.log(req.params);
    return app.render(req, res, "/questionnaire", { id: req.params.id });
  });
  server.get("/questionnaire1/:id", (req, res) => {
    console.log("post-req.query :");
    console.log(req.params);
    return app.render(req, res, "/questionnaire1", { id: req.params.id });
  });
  server.get("/questionnaire765/:id", (req, res) => {
    console.log("post-req.query :");
    console.log(req.params);
    return app.render(req, res, "/questionnaire765", { id: req.params.id });
  });

  server.get("/login/:criteria", (req, res) => {
    console.log("post-req.query :");
    console.log(req.params);
    return app.render(req, res, "/login", { criteria: req.params.criteria });
  });

  server.get("/login1/:criteria", (req, res) => {
    console.log("post-req.query :");
    console.log(req.params);
    return app.render(req, res, "/login1", { criteria: req.params.criteria });
  });

  server.get("/login765/:criteria", (req, res) => {
    console.log("post-req.query :");
    console.log(req.params);
    return app.render(req, res, "/login765", { criteria: req.params.criteria });
  });

  // server.get("/:id", (req, res) => {
  //   console.log("post-req.query :");
  //   console.log(req.params);
  //   return app.render(req, res, "/", { id: req.params.id });
  // });

  server.get("/api/show", (req, res) => {
    return res.send("we made it!");
  });

  // server.get("/getRecord", function(req, res) {
  //   try {
  //     ZCRMRestClient.initialize().then(function() {
  //       mysql_util.getOAuthTokens().then(function(result) {
  //         if (result == null || result.length === 0) {
  //           //This token needs to be updated for initialization
  //           let token =
  //             "1000.8b10455febcd56e8884f7d92799ec540.fd95d5251a143391c26791afc38c3aa2";
  //           initialzie.getTokenOnetime(token);
  //         } else {
  //           getContacts(res);
  //           //saveRecordToZoho(res);
  //           //updateRecordToZoho(res);
  //         }
  //       });
  //     });
  //   } catch {
  //     throw new Error("exception!\n" + e);
  //   }
  // });

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

  server.get("/getRecord/:id/:module", function(req, res) {
    try {
      ZCRMRestClient.initialize().then(function() {
        mysql_util.getOAuthTokens().then(function(result) {
          if (result == null || result.length === 0) {
            //This token needs to be updated for initialization
            let token =
              "1000.8b10455febcd56e8884f7d92799ec540.fd95d5251a143391c26791afc38c3aa2";
            initialzie.getTokenOnetime(token);
          } else {
            let params = {
              id: req.params.id,
              module: req.params.module
            };
            console.log("req.params : ");
            console.log(req.params.module);

            getRecordByID(params, res);
          }
        });
      });
    } catch {
      throw new Error("exception!\n" + e);
    }
  });

  function getRecordByID(params, res) {
    let input = {};
    input.module = params.module;
    input.id = params.id;
    //input.id = "3890818000013679004";

    ZCRMRestClient.API.MODULES.get(input).then(function(response) {
      let data = JSON.parse(response.body).data;
      //console.log(data);
      // let result = wrap.wrapresult(input.module, data);
      // res.set("Content-Type", "text/html");
      // res.send(result);
      res.send(data);
    });
  }

  server.get("/searchRecord/:criteria", function(req, res) {
    try {
      ZCRMRestClient.initialize().then(function() {
        mysql_util.getOAuthTokens().then(function(result) {
          if (result == null || result.length === 0) {
            //This token needs to be updated for initialization
            let token =
              "1000.8b10455febcd56e8884f7d92799ec540.fd95d5251a143391c26791afc38c3aa2";
            initialzie.getTokenOnetime(token);
          } else {
            searchRecordByCriteria(req.params.criteria, res);
          }
        });
      });
    } catch {
      throw new Error("exception!\n" + e);
    }
  });

  function searchRecordByCriteria(criteria, res) {
    let criteriaCombine =
      "(Name:equals:" +
      criteria +
      ")and(IsPetitionerOrEmployer:equals:Beneficiary)";
    //"((Phone:equals:123456)and(Last_Name:equals:test-20190825))";
    console.log("criteriaCombine");
    console.log(criteriaCombine);
    //criteria.Last_Name = "test-20190825";
    let params = {};
    params.criteria = criteriaCombine;
    //params.Client_Number = "NC803617";

    let input = {};
    input.module = "Cases_Info";
    input.params = params;
    console.log("input");
    console.log(input);

    ZCRMRestClient.API.MODULES.search(input).then(function(response) {
      let data = JSON.parse(response.body).data;
      console.log(response.body);
      // let result = wrap.wrapresult(input.module, data);
      // res.set("Content-Type", "text/html");
      // res.send(result);
      res.send(data);
    });
  }

  server.all("*", (req, res) => {
    return handle(req, res);
    //return app.render(req, res, "/_errors", req.query);
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
