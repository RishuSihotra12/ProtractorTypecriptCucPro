import { browser } from "protractor";

var {After, Before} = require('cucumber');


Before({tags: "@calculatorTesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo
  browser.driver.manage().window().maximize();
});
After({tags: "@calculatorTesting"}, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed")
  });

Before({tags: "AngularTesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
  console.log("need to execute first")
});
