/*global chrome */
import titles from '../json/titles.json'
import Sites from '../json/websites.json'

const getTitle = () => {
    const titleLen = titles.length;
    const index = Math.floor(Math.random()*titleLen);
    return titles[index]
};

const getCatagory = (value) => {
   return Sites[value];
};

const goTo = (site) => {
    chrome.tabs.getCurrent((tab) => {
        chrome.tabs.update(tab.id, {url: "//"+site})
    })
}

export { getTitle, getCatagory, goTo } 