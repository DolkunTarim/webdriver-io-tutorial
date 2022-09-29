

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CubecartLoginPage extends Page{
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginButton () {
        return $('input[id="login"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.openUrl('/cc6/admin_5xArPd.php');
    }
}

module.exports = new CubecartLoginPage();
