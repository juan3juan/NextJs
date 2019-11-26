const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const ZCRMRestClient = require("zcrmsdk");
const mysql_util = require("zcrmsdk/lib/js/mysql/mysql_util");
const initialzie = require("./zoho/Initialize");
const wrap = require("./zoho/wrapresult");

app.prepare().then(() => {
  const server = express();

  server.get("/a", (req, res) => {
    return app.render(req, res, "/a", req.query);
  });

  server.get("/b", (req, res) => {
    return app.render(req, res, "/b", req.query);
  });

  server.get("/posts/:id", (req, res) => {
    return app.render(req, res, "/posts", { id: req.params.id });
  });

  server.get("/api/show", (req, res) => {
    return res.send("we made it!");
  });
  server.get("/show", (req, res) => {
    return res.send("we made it!");
  });
  server.get("/api/getContract", function(req, res) {
    res.send("thanks!");
  });
  server.get("/getContract", function(req, res) {
    res.send("thanks!");
  });

  server.get("/getContracts", function(req, res) {
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
          }
        });
      });
    } catch {
      throw new Error("exception!\n" + e);
    }
  });

  function getContacts(res) {
    let input = {};
    input.module = "Leads";
    let params = {};
    params.page = 0;
    params.per_page = 100;
    input.params = params;
    ZCRMRestClient.API.MODULES.get(input).then(function(response) {
      let data = JSON.parse(response.body).data;
      //console.log(data);
      let result = wrap.wrapresult(input.module, data);
      res.set("Content-Type", "text/html");
      res.send(result);
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
