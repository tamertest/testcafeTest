require('dotenv').config()
import { t, Selector } from 'testcafe'
export async function login() {
    await t.click("#signin_button");
    await t.typeText("#user_login", "username", { paste: true })
    await t.typeText("#user_password", "password", { paste: true })
    await t.click(Selector("input[name=submit]"))
}

export async function loginWithEnv() {
    await t.click("#signin_button");
    await t.typeText("#user_login", process.env.user, { paste: true })
    await t.typeText("#user_password", process.env.pass, { paste: true })
    await t.click(Selector("input[name=submit]"))
}

//Other helpers
export async function getLoadedURL() {
    var loadedURL = await t.eval(() => document.documentURI);
    console.log(loadedURL);
    return loadedURL;
}

//just for example
export async function checkPageLoaded() {
    const add_button = Selector('#add-button');
    await t.expect(add_button.hasAttribute('disabled')).notOk('ready for testing', { timeout: 120000 });
}
export async function pickRandomText(maxCharacters) {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, maxCharacters);
}
export async function pickRandomTextWithTimeStamp(maxCharacters) {
    return await pickRandomText(maxCharacters) + Math.round(new Date() / 1000);
}