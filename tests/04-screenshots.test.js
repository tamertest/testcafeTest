import {Selector} from 'testcafe'

fixture `Starting with testCafe`
    .page `https://devexpress.github.io/testcafe/example/`;

test('My Test', async t => {
    const developer_name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")
    const article_header = Selector("#article-header")
    await t.takeScreenshot() //screenshot of page
    await t.takeElementScreenshot(submit_button) //screenshot of element given
    await t.typeText(developer_name_input,"tamer")
    await t.click(submit_button)
    await t.expect((article_header).innerText).eql("Thank you, tamer!")
    
});
