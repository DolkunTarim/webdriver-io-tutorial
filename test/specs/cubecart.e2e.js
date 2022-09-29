const CubecartLoginPage = require('../pageobjects/cubecart.login.page');
const CubecartDashboardPage = require('../pageobjects/cubecart.dashboard.page');
const CubecartCustomerPage=require('../pageobjects/cubecart.customer.page.js');
const config=require('../../wdio.conf.js').config;
describe('Cubecart admin customer module', () => {
    before('verify user login', async ()=> {
        await CubecartLoginPage.open();
        await CubecartLoginPage.login(config.username,config.password);

    });
    it('Admin user should be able to verify logout icon', async () => {
        await expect(CubecartDashboardPage.logoutIcon).toBeExisting();

    });
    it('Admin user should be able to verify Customer List Link', async () => {
        await expect(CubecartDashboardPage.customerLink).toBeExisting();

    });
    it('should be able to add a customer', async () => {
        await expect(CubecartDashboardPage.logoutIcon).toBeExisting();
        await CubecartDashboardPage.customerLinkClick();
        await CubecartCustomerPage.addACustomer('testfirst','testlast',
            'Unregistered Customer','testuser@test.com')
        await expect(CubecartCustomerPage.successMessage).toHaveTextContaining('Customer successfully added')
    });
    after('logout ',async ()=>{
        await CubecartDashboardPage.logout();
        await expect(CubecartLoginPage.inputUsername).toBeExisting();
    });
});


