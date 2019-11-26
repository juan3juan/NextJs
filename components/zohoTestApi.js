const ZCRMRestClient = require("zcrmsdk");
const mysql_util = require("zcrmsdk/lib/js/mysql/mysql_util");

module.exports = {
  getRecord: async function(input) {
    ZCRMRestClient.initialize().then(function() {
      ZCRMRestClient.API.MODULES.get(input).then(function(response) {
        let data = JSON.parse(response.body).data;
        console.log(data);
        // let result = wrap.wrapresult(input.module, data);
        // res.set("Content-Type", "text/html");
        // res.send(result);
      });
    });
  }

  // function createRecord(input) {}
};
