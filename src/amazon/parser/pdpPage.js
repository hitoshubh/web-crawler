const cheerio = require("cheerio");
function parseAmazonProductDetails(html) {
  const $ = cheerio.load(html);
  const title = $("#productTitle").text().trim();
  const price = $("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay>span.a-offscreen").text().trim();
  const mrp = $("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-small.aok-align-center > span > span.a-size-small.a-color-secondary.aok-align-center.basisPrice > span > span:nth-child(2)").text().trim();
  //console.log("mrp ="+mrp +"  ");
  return { title, price, mrp };
}
  module.exports ={
    parseAmazonProductDetails
  }