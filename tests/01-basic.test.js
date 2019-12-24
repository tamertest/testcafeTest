import { Selector } from 'testcafe'

fixture`Starting with testCafe`
    .page`https://devexpress.github.io/testcafe/example/`;

test('My Test', async t => {
    await t.setTestSpeed(0.01)
    await t.typeText("#developer-name", "tamer")
    await t.click("#submit-button")
    await t.expect(Selector("#article-header").innerText).eql("Thank you, tamer!")
    //OR .contains("tamer") instead of .eql
});