const puppeteer = require("puppeteer-core");

const extractSensacineData = async (url, browser) => {
    try {
        const filmaffinityData = {}
        const page = await browser.newPage()
        await page.goto(url)
        filmaffinityData['Title'] = await page.$eval("dd:nth-child(2)", name => name.innerHTML)
        filmaffinityData['Critics'] = await page.$eval("#pro-reviews > li:nth-child(1) > div > a > div", critica => critica.innerHTML.slice(0, (critica.innerHTML.indexOf("&"))))
        filmaffinityData['Punctuation'] = await page.$eval("#movie-rat-avg", note => note.innerHTML)
        return filmaffinityData
    }
    catch (err) {
        return { error: err }
    }
}
const scrap = async (url) => {
    try {
        const scrapedData = []
        // console.log("Opening the browser......");
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage();
        await page.goto(url);
        // console.log(`Navigating to ${url}...`);
        const tmpurls = await page.$$eval("div.mc-title > a", data => data.map(a => a.href))
        const urls = await tmpurls.filter((link, index) => { return tmpurls.indexOf(link) === index })
        // console.log("url capuradas", urls)
        // const urls2 = urls.slice(0, 1);
        // console.log(`${urls.length} links encontrados`);
        for (filmaffinityLink in urls) {
            const filmaffinity = await extractSensacineData(urls[filmaffinityLink], browser)
            if(filmaffinity.Title) {
            scrapedData.push(filmaffinity)
            }
        }
        // console.log(scrapedData, "Lo que devuelve mi función scraper", scrapedData.length)
        await browser.close()
        return scrapedData;
    } catch (err) {
        console.log("Error:", err);
    }
}

exports.scrap = scrap;