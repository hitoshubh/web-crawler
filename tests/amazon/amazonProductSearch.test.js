const fs = require("fs");
const productSearch = require("../../src/amazon/parser/productSearch");
const constants = require("../../src/amazon/constants")
let amazonProductSearchPageHtml = fs.readFileSync("./output/"+constants.AMAZON_PRODUCT_SEARCH_DOWNLOAD_PAGE+".html",'utf8');
let parseResult;

beforeAll(()=>{ 
    parseResult = productSearch.parseAmazonProductSearch(amazonProductSearchPageHtml); 
});
describe("Parsing html product page correctly",()=>{

    test("test Product Search page",()=>{
        expect(parseResult.length ).toBe(22);
    })
   
});