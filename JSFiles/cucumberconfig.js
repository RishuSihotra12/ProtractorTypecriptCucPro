"use strict";
// An example configuration file
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
const reporter_1 = require("./support/reporter");
const jsonReports = process.cwd() + "/reports/json";
//var reporter = require('cucumber-html-reporter');
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    //start protractor without starting selenium server
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../feature/demo.feature'],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        // browser.manage().window().maximize();
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        // require step definitions
        tags: "@calculatorTesting2",
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: [
            './stepdefinations/*.js' // accepts a glob
        ],
        //require: ['./stepdefinations/*.js', "../../typeScript/support/*.js"],
        strict: true,
    },
    onComplete: () => {
        reporter_1.Reporter.createHTMLReport();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQWdDOzs7QUFJaEMsMkNBQTZDO0FBQzdDLGlEQUE4QztBQUc5QyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsZUFBZSxDQUFDO0FBRXBELG1EQUFtRDtBQUV4QyxRQUFBLE1BQU0sR0FBVTtJQUN2Qiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBRWxELGFBQWEsRUFBQyxJQUFJO0lBQ2xCLG1EQUFtRDtJQUVuRCxTQUFTLEVBQUUsUUFBUTtJQUNsQiwyQ0FBMkM7SUFDOUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFN0QsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMseUJBQXlCLENBQUM7SUFDbEMsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNiLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLHdDQUF3QztRQUN4QyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0MsWUFBWSxFQUFFO1FBQ1YsMkJBQTJCO1FBQzNCLElBQUksRUFBQyxxQkFBcUI7UUFDMUIsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixNQUFNLEVBQUUsMENBQTBDO1FBRWxELE9BQU8sRUFBRTtZQUNQLHdCQUF3QixDQUFDLGlCQUFpQjtTQUMzQztRQUNELHVFQUF1RTtRQUN2RSxNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLG1CQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0NBR0YsQ0FBQyJ9