import { t, Selector } from 'testcafe'

class navbar {

    constructor() {
        //Selectors
        this.sign_in_button = Selector("#signin_button")
        this.user_icon = Selector(".icon-user")
        this.logout_button = Selector("#logout_link")
    }
    async logoutFromApp(){
        await t.click(this.user_icon)
        await t.click(this.logout_button)
    }
}

export default navbar