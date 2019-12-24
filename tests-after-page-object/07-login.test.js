import { Selector } from 'testcafe'
import LoginPage from '../page-objects/pages/LoginPage';
import NavBar from '../page-objects/components/NavBar';
import AccountFunctionBar from '../page-objects/components/AccountFunctionBar';

const login_page = new LoginPage();
const nav_bar = new NavBar();
const account_function_bar = new AccountFunctionBar();
fixture`Zero Webapp login tests`
    .page`http://zero.webappsecurity.com/`;

test('user can not login with invalid credintials', async t => {
    await t.click(nav_bar.sign_in_button)
    await t.expect(login_page.login_form.exists).ok();
    await login_page.loginToApp("invalid user", "invalid pass")
    await t.expect(login_page.error_message.innerText).eql("Login and/or password are wrong.")
});

test('user can login into application then logout', async t => {
    await t.click(nav_bar.sign_in_button)
    await t.expect(login_page.login_form.exists).ok();
    await login_page.loginToApp("username", "password")
    await t.expect(account_function_bar.account_summary_tab.exists).ok()
    await t.expect(login_page.login_form.exists).notOk()
    await nav_bar.logoutFromApp()
    await t.expect(nav_bar.sign_in_button.exists).ok();
    await t.expect(nav_bar.logout_button.exists).notOk();
});