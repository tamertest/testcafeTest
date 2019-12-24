import { Selector, t } from 'testcafe'

fixture`Several Tests`
    .page`https://only-testing-blog.blogspot.com/2014/01/textbox.html`;

test.only('Practice', async t => {
    await t.setTestSpeed(0.1)
    await check_page_loaded_and_submit_available()
    await check_existing_class();
    await check_firstname_input_disabled();
    await check_lastname_input_enabled()
    await check_checkbox_activation();
    await check_gender_radio_button()
    await upload_file();
    await get_value_of_dropdown();
    await test_confirmation_dialog();
});

async function check_page_loaded_and_submit_available() {
    const submit_button_selector = Selector("#submitButton")
    await t.expect(submit_button_selector.hasAttribute('disabled')).notOk('ready for testing', { timeout: 120000 });
}
async function check_existing_class() {
    const blog_pager = Selector("#blog-pager");
    await t.expect(blog_pager.hasClass('blog-pager')).ok()
}
async function check_firstname_input_disabled() {
    const first_name_input = Selector("#text1")
    await t.expect(first_name_input.hasAttribute("disabled")).ok()
}
async function check_lastname_input_enabled() {
    const last_name_input = Selector("#text2")
    await t.expect(last_name_input.hasAttribute("disabled")).notOk();
}
async function check_checkbox_activation() {
    const boat_checkbox = Selector("#check3")
    await t.expect(boat_checkbox.checked).notOk();
    await t.click(boat_checkbox)
    await t.expect(boat_checkbox.checked).ok()
}
async function check_gender_radio_button() {
    const man_radio = Selector("#radio1")
    const female_radio = Selector("#radio2")

    await t.expect(man_radio.checked).notOk();
    await t.expect(female_radio.checked).notOk();

    await t.click(man_radio)
    await t.expect(man_radio.checked).ok();
    await t.expect(female_radio.checked).notOk();

    await t.click(female_radio)
    await t.expect(man_radio.checked).notOk();
    await t.expect(female_radio.checked).ok();
}

async function upload_file() {
    const upload_button = Selector("input[type=file]")
    //await t.setFilesToUpload(upload_button,"C:\\Users\\tamer\\Desktop\\tamer-testcafe\\data.json")
    await t.setFilesToUpload(upload_button, "../data.json")

}
async function get_value_of_dropdown() {
    const car_dropdown = Selector("#Carlist")
    await t.click(car_dropdown);
    await t.click(Selector("#car3")) //by id
    //or by innerText
    //await t.click(Selector('option').withText("Opel")) // by text
    //or by attribute
    //await t.click(Selector('option').withAttribute('value', 'Opel Car'))
    // or by navigation
    //await t.click(Selector('#Carlist option:nth-child(3)'))
    //await t.click(Selector("#Carlist").child(2))

}

async function test_confirmation_dialog() {
    const confirmation_button = Selector("button").withText("Show Me Confirmation")
    const message = Selector("#demo")
    await t.setNativeDialogHandler(() => true)
    await t.click(confirmation_button)
    await t.expect(message.innerText).eql("You pressed OK!")
    await t.setNativeDialogHandler(() => false)
    await t.click(confirmation_button)
    await t.expect(message.innerText).eql("You pressed Cancel!")
}
