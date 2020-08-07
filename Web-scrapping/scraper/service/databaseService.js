const  siteUrls = require("../config/urls");
const axios = require("axios");
const cheerio = require("cheerio");

const fetchData = async (siteUrl) => {
    const result = await axios.get(siteUrl)
    return cheerio.load(result.data);
};

const getResults = async () => {
    const links = [];
    const linkTests = [];
    const text = [];

    let newsAll = [];

    const $ = await fetchData(siteUrls.hiru);

    $(".nwsheading > a").each((index, element) => {
        links.push(element.attribs.href);
        linkTests.push($(element).text());
    });
    $(".newsbox > .bodynewscnt").each((index, element) => {
        text.push($(element).html());
    });

    links.forEach(((value, index) => {
        let news = {
            "link": links[index],
            "linkText": linkTests[index],
            "text": text[index],
        }
        newsAll.push(news);
    }));
    const $data = await fetchData(siteUrls.lanka);
    $data(".clearfix article > header > h3 > a").each((index, element) => {
        links.push(element.attribs.href);
        linkTests.push($(element).text());
    });
    $data(" article p").each((index, element) => {
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


module.exports = getResults;