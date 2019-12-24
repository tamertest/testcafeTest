import { t, Selector } from 'testcafe'

class ForgottenPasswordPage {

    constructor() {
        this.email_input = Selector("#user_email")
        this.message = Selector("div")

    }

}

export default ForgottenPasswordPage;