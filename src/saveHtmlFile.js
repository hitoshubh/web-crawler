const httpRequest = require("./httpRequest");

async function saveHtml(url,pageName ="amazonProductPage") {
    const html = await httpRequest.getRequest(url);
    await httpRequest.saveHtml(html,pageName);
}

module.exports ={
    saveHtml
}