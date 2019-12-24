import {Selector} from 'testcafe'
import FeedbackPage from '../page-objects/pages/FeedbackPage';

const feedback_page = new FeedbackPage

fixture `Feedback Form Test`
    .page `http://zero.webappsecurity.com/`;

test.only('user can send feedback', async t => {
    //Selectors
    const feedback_button = Selector("#feedback")
    //Actions
    await t.click(feedback_button);
    await t.typeText(feedback_page.name_input,"Tamer",{paste:true})
    await t.typeText(feedback_page.email_input,"tamer@tamer.com",{paste:true})
    await t.typeText(feedback_page.subject_input,"subject is here",{paste:true})
    await t.typeText(feedback_page.comment_input,"i like this website",{paste:true})
    await t.click(feedback_page.submit_button);

    ////////Or we can make function to submit feedback!
    //Assertion
    await t.expect(feedback_page.message.innerText).contains("Thank you")
});
