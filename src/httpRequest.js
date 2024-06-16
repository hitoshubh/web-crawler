const needle = require("needle");
const fs = require("fs");

async function getRequest(url) {
    const result =  await needle("get",url);
    return result.body;
}

function saveHtml(html,filename){
    fs.writeFileSync("./output/"+filename+".html",html);
}

module.exports ={
    getRequest,
    saveHtml
}

