const puppeteer = require("puppeteer");

const extractFilmAffinityData = async (url,browser) => {
    try{
        const filmaffinityData = {}
        const page = await browser.newPage()
        await page.goto(url)
        filmaffinityData['Critics'] = await page.$eval("#pro-reviews > li:nth-child(2) > div > div:nth-child(1)", critica => critica.innerHTML.slice(0,500))
        filmaffinityData['Punctuation'] = await page.$eval("#movie-rat-avg", note => note.innerHTML)
        return filmaffinityData
    }
    catch(err){
       return {error:err}
    }
}

const title = 'titanic'
const infoFilmAffinity = async (title) => {
   
    try {
        const criticsData= []
        console.log("Opening the browser......");
        const browser = await puppeteer.launch({headless:true})
        const page = await browser.newPage();
        await page.goto(`https://www.filmaffinity.com/es/search.php?stype=title&stext=${title}`);
        console.log(`Navigating to ${title}...`);
        const movieurls = await page.$$eval("div.mc-title > a", data => data.map(a => a.href))
        const urls = await movieurls.filter((link,index) =>{ return movieurls.indexOf(link) === index})
        const urls2 = urls.slice(0, 1);
        for(filmaffinityLink in urls2){
            const filmaffinity = await extractFilmAffinityData(urls2[filmaffinityLink],browser)
            criticsData.push(filmaffinity)
        }
        await browser.close()   
        return criticsData;
    } catch (err) {
        console.log("Error:", err);
    }
}

exports. infoFilmAffinity=  infoFilmAffinity;

infoFilmAffinity(`https://www.filmaffinity.com/es/search.php?stype=title&stext=${title}`).then(data =>console.log(data))


//Sensacine

const extractSensaCineData = async (url,browser) => {
    try{
        const SensaCineData = {}
        const page = await browser.newPage()
        await page.goto(url)
        SensaCineData['Critics'] = await page.$eval("div.editorial-content.cf", critica => critica.innerHTML.slice(0,500))
        SensaCineData['Punctuation'] = await page.$eval(".note", note => note.innerHTML)
        return SensaCineData
    }
    catch(err){
       return {error:err}
    }
}

const infoSensaCine= async (title) => {
   
    try {
        const criticsData= []
        const browser = await puppeteer.launch({headless:true})
        const page = await browser.newPage();
        await page.goto(`https://www.sensacine.com/buscar/?q=${title}`);
        const movieurls = await page.$$eval("h2 > a", data => data.map(a => a.href))
        const urls = await movieurls.filter((link,index) =>{ return movieurls.indexOf(link) === index})
        const urls2 = urls.slice(0, 1);
        for(SensaCineLink in urls2){
            const SensaCine = await extractSensaCineData(urls2[SensaCineLink],browser)
            criticsData.push(SensaCine)
        }
        await browser.close()   
        return criticsData;
    } catch (err) {
        console.log("Error:", err);
    }
}

exports. infoSensaCine=  infoSensaCine;

infoSensaCine(`https://www.sensacine.com/buscar/?q=${title}`).then(data =>console.log(data))