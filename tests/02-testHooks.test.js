fixture`Testing BeforeEach and After Hook in a test`
    .before(async t => {  //will run 1 time
        console.log("1")
    }).beforeEach(async t => {  //will run before each test
        t.ctx.someProp = 123;  //can be used to share variable value to tests
    });

test('Testing That After will be executed', async t => {
    console.log(t.ctx.someProp); // > 123
})
    .after(async t => { //will run only after this test
        console.log(t.ctx.someProp); // > 123
    });

test('Test2', async t => {
    console.log(t.ctx.someProp); // > 123
})