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
    window.location.href = site
}

export { getTitle, getCatagory, goTo } 