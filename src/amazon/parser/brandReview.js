const cheerio = require("cheerio");
function parseAmazonBarndReview(html) {
  const items = [];
  const $ = cheerio.load(html);
  const feedbackTable = $(".a-fixed-left-grid-inner");
  // console.log(feedbackTable.text());
  let ratingLists = [];
  feedbackTable.each((i, el) => {
    const rating = $(el).find(".a-icon-alt").text();
    const comment = $(el).find(".a-text-quote").text();
    const customerNameAndDate = $(el).find(".a-size-small.a-color-secondary.feedback-rater").text();
    let customerName = "";
    let ratingDate = ""
    if (customerNameAndDate != undefined && customerNameAndDate.toLocaleLowerCase().indexOf("on")) {
      
      /*
      You are trying to replace an element that is not in a live document. The Element.replace() method can only be used on elements that are part of a live document.
       If you are trying to replace an element that is not in a live document, you will need to first insert it into the document using a method such as Element.appendChild() or Element.insertBefore().
      You are trying to replace an element that is read-only. Some elements, such as the <html> and <body> elements, are read-only and cannot be replaced
      */
      customerName = customerNameAndDate.split("on")[0];
      ratingDate = customerNameAndDate.split("on")[1];
      //ratingDate= dateObj.trim();
      customerName = customerName != undefined ? customerName.replace("By", "").trim() :"";
      ratingDate = ratingDate != undefined ? ratingDate.replace(".", "").trim() :"";
    }
    items.push({
      rating: rating,
      comment: comment,
      name: customerName,
      date:ratingDate,

    });


    //const price = $(el).find(".a-price-whole").text().replace(".", "");
  });

 //console.log(items);
  //console.log("rating")
  return { rating: "5" };
}

module.exports = {
  parseAmazonBarndReview
}