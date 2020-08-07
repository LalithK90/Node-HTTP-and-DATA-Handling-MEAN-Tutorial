const siteUrl = "https://lankacnews.com/";
const axios = require("axios");
const cheerio = require("cheerio");


const fetchData = async () => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
};

async function getData() {

    const links = [];
    const linkTests = [];
    const text = [];

    const $ = await fetchData();
    let newsAll = [];

    $(".clearfix article > header > h3 > a").each((index, element) => {
        links.push(element.attribs.href);
        linkTests.push($(element).text());
    });
    $(" article p").each((index, element) => {
        console.log($(element).text())
        text.push($(element).text());
    });

    links.forEach(((value, index) => {
        let news = {
            "link": links[index],
            "linkText": linkTests[index],
            "text": text[index],
        }
        newsAll.push(news);
    }));
    return newsAll;
}

//getData();
//console.log(data);
getData().then(value => console.log(value)).catch(reason => {
    console.log(reason)
})
