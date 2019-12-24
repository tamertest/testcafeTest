import {Selector} from 'testcafe'

fixture `Starting with testCafe`
    .page `https://devexpress.github.io/testcafe/example/`;

test.skip('Actions and Assertions', async t => {
    const developer_name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")

    await t.click(submit_button)
    await t.doubleClick(submit_button)
    await t.rightClick(submit_button)
    await t.hover(submit_button)
    await t.typeText(developer_name_input, 'Peter')
    await t.typeText(developer_name_input, 'tamer', { replace: true })
    await t.navigateTo('http://devexpress.github.io/testcafe');
    await t.pressKey('enter')
    await t
    .click(developer_name_input)
    .pressKey('ctrl+a delete');
    //Drag an Element by an Offset
    await t.drag('.ui-slider-handle', 360, 0) 
    //Drag an Element onto Another One
    await t.dragToElement('.toolbox-item.text-input', '.design-surface')

    //////
    await t.expect("tamer").eql("tamer")
    await t.expect("tamer").notEql("ahmed")
    await t.expect(true).ok()
    await t.expect(false).notOk()
    await t.expect("tamer is here").contains("tamer")
    await t.expect("tamer is here").notContains("ahmed")
    await t.expect(5).gte(5)
    await t.expect(5).gt(5)
    await t.expect(5).lte(5)
    await t.expect(5).lt(10)
    await t.expect(10).within(1,100)
    await t.expect(101).notWithin(1,100)
    await t.expect(Selector('#elementId').innerText).eql('text',{ timeout: 500 });

});