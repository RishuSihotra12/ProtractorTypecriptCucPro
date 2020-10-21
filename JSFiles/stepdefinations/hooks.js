"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var { After, Before } = require('cucumber');
Before({ tags: "@calculatorTesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    protractor_1.browser.driver.manage().window().maximize();
});
After({ tags: "@calculatorTesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
});
Before({ tags: "AngularTesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
    console.log("need to execute first");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBcUM7QUFFckMsSUFBSSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFHMUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDLEVBQUU7SUFDbkMsK0RBQStEO0lBQy9ELG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzlDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsS0FBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDLEVBQUU7SUFDaEMsK0RBQStEO0lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtBQUNsQyxDQUFDLENBQUMsQ0FBQztBQUVMLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQyxFQUFFO0lBQy9CLHdFQUF3RTtJQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7QUFDdEMsQ0FBQyxDQUFDLENBQUMifQ==