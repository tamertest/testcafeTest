import { t, Selector } from 'testcafe'

class FeedbackPage {

    constructor() {
        this.name_input = Selector("#name")
        this.email_input = Selector("#email")
        this.subject_input = Selector("#subject")
        this.comment_input = Selector("#comment")
        this.submit_button = Selector("input").withAttribute("value","Send Message")
        this.message = Selector("div")

    }

}

export default FeedbackPage;