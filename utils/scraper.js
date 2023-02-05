const puppeteer = require("puppeteer");

const extractFilmAffinityData = async (url,browser) => {
    try{
        const filmaffinityData = {}
        const page = await browser.newPage()
        await page.goto(url)
        filmaffinityData['Critics'] = await page.$eval("#pro-reviews > li:nth-child(1) > div > a > div", critica => critica.innerHTML.slice(0,500))
        filmaffinityData['Punctuation'] = await page.$eval("#movie-rat-avg", note => note.innerHTML)
        return filmaffinityData
    }
    catch(err){
       return {error:err}
    }
}

const title = 'AVATAR'
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
        console.log(`${urls2.length} links encontrados`);
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