const puppeteer = require('puppeteer');
const cheerio = require('cheerio')

module.exports = function(book, callback) {
  console.log('looking for book '+book);

  //mendele
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.mendele.co.il/?s='+encodeURI(book)+'&post_type=product');
    const url = await page.url();
    conosle.log('final url of the query: '+url);
    if ( url.search('https://www.mendele.co.il/product') > -1 ) {
      await browser.close();
      return callback(null, {mendele: {url: url}});
    }
    else {
      const html = await page.content();
      await browser.close();
      return callback(null, {mendele: {html: html}});
      // const $ = cheerio.load(html);
    }
  })();
}
