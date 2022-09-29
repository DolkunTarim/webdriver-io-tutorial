const Page = require("./page");

class CubecartDashboardPage extends Page{
    /**
     * define selectors using getter methods
     */
    get logoutIcon () {
        return $('i.fa.fa-sign-out');
    }
    get customerLink()
    {
        return $('=Customer List');
    }
    async customerLinkClick(){
        const link= await $('=Customer List');
        await link.click();
    }
    async logout () {
        await this.logoutIcon.click()
    }
}
module.exports = new CubecartDashboardPage();
