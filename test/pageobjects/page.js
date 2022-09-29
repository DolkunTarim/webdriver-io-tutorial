/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
    openUrl (url) {
        return browser.url(`${url}`)
    }
    getLocalTime() {
        var now = new Date();
        var dateStr = now.toISOString().replaceAll(':','-').replaceAll('.','-').
        replace('T','-').replace('Z','');
        return dateStr;
    }
}
