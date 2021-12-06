const createTestCafe = require('testcafe');

createTestCafe('localhost', 0, 0).then(async testcafe => {
    await testcafe.createRunner()
        .src('test.js')
        .browsers('chrome')
        .run();

    await testcafe.createRunner()
        .src('test.js')
        .browsers('chrome')
        .run();

    await testcafe.close();
    process.exit();
});
