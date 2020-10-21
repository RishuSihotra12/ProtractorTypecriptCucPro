// An example configuration file

import * as path from "path";

import { browser, Config } from "protractor";
import { Reporter } from "./support/reporter";
import * as reporter from "cucumber-html-reporter";

const jsonReports = process.cwd() + "/reports/json";

//var reporter = require('cucumber-html-reporter');

export let config:Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    
    directConnect:true,
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
       browser.ignoreSynchronization = true;
      // browser.manage().window().maximize();
      Reporter.createDirectory(jsonReports);
  },
    cucumberOpts: {
        // require step definitions
        tags:"@calculatorTesting2",
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",

        require: [
          './stepdefinations/*.js' // accepts a glob
        ],
        //require: ['./stepdefinations/*.js', "../../typeScript/support/*.js"],
        strict: true,
      },
      onComplete: () => {
        Reporter.createHTMLReport();
    },
    // Options to be passed to Jasmine-node.
  
  };