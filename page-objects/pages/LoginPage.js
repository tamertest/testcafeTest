import { t, Selector } from 'testcafe'

class LoginPage {

    constructor() {
        this.login_form = Selector("#login_form")
        this.username_input = Selector("#user_login");
        this.password_input = Selector("#user_password");
        this.login_button = Selector("input[name=submit]");
        this.error_message = Selector(".alert-error")
        this.forgotten_password_link = Selector("a").withText("Forgot your password ?")
    }
    async loginToApp(username, password) {
        await t.typeText(this.username_input, username, { paste: true, replace: true })
        await t.typeText(this.password_input, password, { paste: true, replace: true })
        await t.click(this.login_button)
    }
}

export default LoginPage;