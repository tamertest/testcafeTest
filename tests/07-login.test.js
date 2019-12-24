import {Selector} from 'testcafe'

fixture `Zero Webapp login tests`
    .page `http://zero.webappsecurity.com/`;

test('user can not login with invalid credintials', async t => {
    const signin_button = Selector("#signin_button")
    await t.click(signin_button);

    const login_form = Selector("#login_form")
    await t.expect(login_form.exists).ok();

    const login_user_input = Selector("#user_login")
    const login_pass_input = Selector("#user_password")

    await t.typeText(login_user_input,"invalid user to write",{paste:true})
    await t.typeText(login_pass_input,"invalid pass to write",{paste:true})

    const submit_button = Selector("input[name=submit]")
    await t.click(submit_button)

    const error_message = Selector(".alert-error").innerText
    await t.expect(error_message).eql("Login and/or password are wrong.")
});

test('user can login into application then logout', async t => {
    const signin_button = Selector("#signin_button")
    await t.click(signin_button);

    const login_form = Selector("#login_form")
    await t.expect(login_form.exists).ok();

    const login_user_input = Selector("#user_login")
    const login_pass_input = Selector("#user_password")

    await t.typeText(login_user_input,"username",{paste:true})
    await t.typeText(login_pass_input,"password",{paste:true})

    const submit_button = Selector("input[name=submit]")
    await t.click(submit_button)

    const account_summary_tab = Selector("#account_summary_tab")
    await t.expect(account_summary_tab.exists).ok()
    await t.expect(login_form.exists).notOk()

    const user_icon = Selector(".icon-user")
    await t.click(user_icon)

    const logout_button = Selector("#logout_link")
    await t.click(logout_button)

    await t.expect(logout_button.exists).notOk();
    await t.expect(signin_button.exists).ok();
});