const { Given, When, Then, And,defineStep } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/HomePage')



defineStep(/^I would like to Launch the coinmarket cap URL$/, async () => {
    await HomePage.visitHomePage()
});
defineStep(/^I would like to Show rows of  the table to 20$/, async () => {
        await HomePage.filter20()
});
defineStep (/^I would like to apply the filter  with (\w+) and price range (\w+) to (\w+)$/, async (algorithm,priceRangeFrom,priceRangeTo) => {
    await HomePage.moreFilters(algorithm, priceRangeFrom, priceRangeTo)
});
defineStep (/^I would like to Capture page content after apply the filter/, async () => {
    await HomePage.captureTableData()
});
defineStep (/^I would like to Capture page content for all the filter/, async () => {
    await HomePage.captureTableData1()
});
defineStep (/^I would like to Compare page content to the content in step 3/, async () => {
    await HomePage.compareTables()
});
