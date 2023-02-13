const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

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
    let options = {
        args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
            defaultViewport: chrome.defaultViewport,
            executablePath: await chrome.executablePath,
            headless: true,
            ignoreHTTPSErrors: true,
    }
    try {
        const scrapedData = []
        const browser = await puppeteer.launch(options);
        const page = await browser.newPage();
        await page.goto(url);
        const tmpurls = await page.$$eval("div.mc-title > a", data => data.map(a => a.href))
        const urls = tmpurls.filter((link, index) => { return tmpurls.indexOf(link) === index })
        for (i in urls) {
            const filmaffinity = await extractSensacineData(urls[i], browser)
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