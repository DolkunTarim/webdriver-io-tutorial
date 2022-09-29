const Page = require("./page");

class CubecartCustomerPage extends Page{
    /**
     * define selectors using getter methods
     */
    get addCustomerLink () {
        return $('=Add Customer');
    }
    get statusCheckBox()
    {
        return $('img[rel="#customer_status"]')
    }
    get firstNameTextField()
    {
        return $('#cust-firstname');
    }
    get lastNameTextField()
    {
        return $('#cust-lastname')
    }

    get emailTextField()
    {
        return $('#cust-email')
    }

    get typeDropdownList()
    {
        return $('#cust-type')

    }
    get saveButton()
    {
        return $('input[name="save"]');
    }
    get successMessage() {
        return $('div.success')
    }

    async clickAddCustomerLink () {
        await this.addCustomerLink.click();
    }
    async clickStatusCheckBox () {
        await this.statusCheckBox.waitForDisplayed()
        await this.statusCheckBox.click();
    }
    async enterFirstName(firstname)
    {
        await  this.firstNameTextField.setValue(firstname);
    }
    async enterLastName(lastname)
    {
        await this.lastNameTextField.setValue(lastname);
    }
    async enterEmailAddress(email)
    {
        await  this.emailTextField.setValue(email);
    }
    async selectCustomerType(customerType)
    {
        await this.typeDropdownList.waitForDisplayed()
        await this.typeDropdownList.getText(customerType)
    }
    async clickSaveButton()
    {
        const elem=await $('input[name="save"]')
        await elem.waitForDisplayed()
        elem.click()
    }
    async addACustomer(customerFirstName,customerLastName,customerTpe,customerEmailAddress)
    {
       await this.clickAddCustomerLink()
      await  this.clickStatusCheckBox()
       await this.enterFirstName(customerFirstName+"-"+this.getLocalTime())
      await  this.enterLastName(customerLastName+"-"+this.getLocalTime())
       await this.selectCustomerType(customerTpe)
      await  this.enterEmailAddress("test-"+this.getLocalTime()+"-"+customerEmailAddress)
      await  this.clickSaveButton()
    }

}
module.exports = new CubecartCustomerPage();
