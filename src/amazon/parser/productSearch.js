const cheerio = require("cheerio");
function parseAmazonProductSearch(data) {
    const items = [];
    try {
      const $ = cheerio.load(data);
      const list = $(".s-widget-spacing-small");
      list.each((i, el) => {
        const description = $(el).find(".a-size-medium").text();
        const price = $(el).find(".a-price-whole").text().replace(".", "");
        const image = $(el).find(".s-image").attr("src");
        const link = $(el).find(".a-link-normal").attr("href");
        const rating = $(el).find(".aok-align-bottom .a-icon-alt").text();
        const review = $(el).find(".s-link-style .s-underline-text").text();
        const nid = $(el).find(".sg-col-inner > div").attr("data-csa-c-item-id");
        var descArray = description.replaceAll("|", ",").split(",");
        items.push({
          image: image,
          priceShow:
            price == ""
              ? null
              : `$ ${price} ~ Rs, ${Math.round(price.replaceAll(",", "") * 130)}`,
          name: descArray[0],
          id: nid,
          sellerName: "",
          description: descArray,
          productUrl: "https://www.amazon.com/" + link,
          price: price,
          ratingScore: rating.split(" ")[0],
          review: review,
        });
      });
  
      //console.log(items);
    } catch (err) {
      console.log(err);
    }
    return items;
  }
  
  module.exports ={
    parseAmazonProductSearch
  }