const siteUrl = "https://gossip.hirufm.lk/";
const axios = require("axios");
const cheerio = require("cheerio");



const fetchData = async () => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
};

async function getData() {
    const months = new Set();
    const dates = new Set();
    const links = new Set();
    const linkTests = new Set();

    const $ = await fetchData();

    $(".datecalendar > .mnmonth").each((index, element) => {
        months.add($(element).text());
    });
    $(".datecalendar > .mndate").each((index, element) => {
        dates.add($(element).text());
    });
    $(".nwsheading > a").each((index, element) => {
        links.add(element.attribs.href);
        linkTests.add($(element).text());
    });

    //Convert to an array so that we can sort the results.
    return {
        months: [...months],
        days: [...dates],
        links: [...links],
        linkTests: [...linkTests],
    };
}

getData().then(value => console.log(value)).catch(reason => {console.log(reason)})