import {Selector} from 'testcafe'

fixture `Testing Frogot Password`
    .page `http://zero.webappsecurity.com/`;

test('user can request new password by forgot password', async t => {
    //Selectors
    const signin_button = Selector("#signin_button")
    const forgotten_password_link = Selector("a").withText("Forgot your password ?")
    const email_input = Selector("#user_email")
    const message = Selector("div").innerText

    //Actions
    await t.click(signin_button);
    await t.click(forgotten_password_link);
    await t.typeText(email_input,"tamer@tamer.com",{paste:true})
    await t.pressKey("enter")

    //Assertion
    await t.expect(message).contains("tamer@tamer.com")
    await t.expect(email_input.exists).notOk();
});
