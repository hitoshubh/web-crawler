const fs = require("fs");
const pdpPage = require("../../src/amazon/parser/pdpPage");
const constants = require("../../src/amazon/constants")
let amazonProductPageHtml = fs.readFileSync("./output/"+constants.AMAZON_PDP_DOWNLOAD_PAGE+".html");

let parseResult;
beforeAll(()=>{
    
    parseResult = pdpPage.parseAmazonProductDetails(amazonProductPageHtml);
    
});
describe("Parsing html product page correctly",()=>{
    test("Can add 2 + 2",()=>{
        expect(2+2).toBe(4);
    })
    test("test Title",()=>{
        expect(parseResult.title).toBe("Crunchy Fashion Bollywood Jewellery Designer Ethnic Boho HandMade/Handcrafts White Beads Contemporary Earring For Women & Girls");
    })
    test("test Price",()=>{
        expect(parseResult.price).toBe("₹399.00");
    })
    test("test MRP",()=>{
        expect(parseResult.mrp).toBe("₹1,375.00");
    })
});