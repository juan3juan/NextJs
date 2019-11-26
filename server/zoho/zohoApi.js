const ZCRMRestClient = require("zcrmsdk");
const mysql_util = require("zcrmsdk/lib/js/mysql/mysql_util");
const initialzie = require("./zoho/Initialize");
const wrap = require("./wrapresult");

export function getRecords(input) {
  ZCRMRestClient.initialize().then(function() {
    ZCRMRestClient.API.MODULES.get(input).then(function(response) {
      let data = JSON.parse(response.body).data;
      console.log(data);
      let result = wrap.wrapresult(input.module, data);
      res.set("Content-Type", "text/html");
      res.send(result);
    });
  });
}
