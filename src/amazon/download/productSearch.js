/*
const fs = require('fs');
const axios = require('axios');
async function saveHtmlFile(searchUrl, filename) {
  const { data } = await axios.get(searchUrl, {
    headers: {
      Accept: "application/json",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0",
    },
  });
  fs.writeFileSync("./output/" + filename + ".html", data);
}
*/

const saveHtmlFile = require("../../saveHtmlFile");
const constants = require("../constants");
saveHtmlFile.saveHtml(constants.AMAZON_PRODUCT_SEARCH_END_POINT,constants.AMAZON_PRODUCT_SEARCH_DOWNLOAD_PAGE);


//saveHtmlFile(searchUrl, "amazonProductSearchPage");