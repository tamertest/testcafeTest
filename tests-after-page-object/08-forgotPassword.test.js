import NavBar from '../page-objects/components/NavBar';
import LoginPage from '../page-objects/pages/LoginPage';
import ForgottenPasswordPage from '../page-objects/pages/ForgottenPasswordPage';

const nav_bar = new NavBar();
const login_page = new LoginPage();
const forgotten_page = new ForgottenPasswordPage();

fixture `Testing Forget Password`
    .page `http://zero.webappsecurity.com/`;

test('user can request new password by forgot password', async t => {
    //Actions
    await t.click(nav_bar.sign_in_button);
    await t.click(login_page.forgotten_password_link);
    await t.typeText(forgotten_page.email_input,"tamer@tamer.com",{paste:true})
    await t.pressKey("enter")

    //Assertion
    await t.expect(forgotten_page.message.innerText).contains("tamer@tamer.com")
    await t.expect(forgotten_page.email_input.exists).notOk();
});
