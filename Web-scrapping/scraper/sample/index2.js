const siteUrl = "https://gossip.hirufm.lk/";
const axios = require("axios");
const cheerio = require("cheerio");


const fetchData = async () => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
};

async function getData() {
    const months = [];
    const dates = [];
    const links = [];
    const linkTests = [];
    const text = [];

    const $ = await fetchData();

    let newsAll = [];

    $(".datecalendar > .mnmonth").each((index, element) => {
        months.push($(element).text());
    });
    $(".datecalendar > .mndate").each((index, element) => {
        dates.push($(element).text());
    });
    $(".nwsheading > a").each((index, element) => {
        links.push(element.attribs.href);
        linkTests.push($(element).text());
    });
    $(".newsbox > .bodynewscnt").each((index, element) => {
        text.push($(element).html());
    });

    months.forEach(((value, index) => {
        let news = {
            "month": value,
            "date": dates[index],
            "link": links[index],
            "linkText": linkTests[index],
            "text": text[index],
        }
        newsAll.push(news);
    }));
    return newsAll;
}

//let data = getData();
//console.log(data);
getData().then(value => console.log(value)).catch(reason => {
    console.log(reason)
})