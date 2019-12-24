import {Selector} from 'testcafe'

fixture `Feedback Form Test`
    .page `http://zero.webappsecurity.com/`;

test('user can send feedback', async t => {
    //Selectors
    const feedback_button = Selector("#feedback")
    const name_input = Selector("#name")
    const email_input = Selector("#email")
    const subject_input = Selector("#subject")
    const comment_input = Selector("#comment")
    const submit_button = Selector("input").withAttribute("value","Send Message")
    const message = Selector("div").innerText

    //Actions
    await t.click(feedback_button);
    await t.typeText(name_input,"Tamer",{paste:true})
    await t.typeText(email_input,"tamer@tamer.com",{paste:true})
    await t.typeText(subject_input,"subject is here",{paste:true})
    await t.typeText(comment_input,"i like this website",{paste:true})
    await t.click(submit_button);

    //Assertion
    await t.expect(message).contains("Thank you")
});
