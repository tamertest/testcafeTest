import {Selector} from 'testcafe'

fixture `Starting with testCafe`
    .page `https://devexpress.github.io/testcafe/example/`;

test('My Test', async t => {
    const developer_name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")
    const article_header = Selector("#article-header")
    
    await t.typeText(developer_name_input,"tamer")
    await t.click(submit_button)
    await t.expect((article_header).innerText).eql("Thank you, tamer!")
    //await t.typeText("#developer-name","tamer")
    //await t.click("#submit-button")
    //await t.expect(Selector("#article-header").innerText).eql("Thank you, tamer!")
    //OR .contains("tamer") instead of .eql
});

//skipped because we do not have those selectors in the current demo
test.skip('checking selector Types', async t => {
    //selector who have ID
    const selector_with_id = Selector("#developer-name") 
     //selector who have css with class name
    const selector_with_css = Selector(".article-content")
     //selector who have css and then filtering since there are many radio buttons
    const selector_with_filter_text= Selector('.radio-button').withText('Windows');
    //selector with type, attribute and Value!
    const selector_by_type_attr_value = Selector("input[id=developer-name]") 
});


