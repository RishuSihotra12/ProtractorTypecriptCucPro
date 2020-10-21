import { Given, When, Then } from "cucumber";
import {calculator} from "../pageObjects/calculator";
import {angularHomePage} from "../pageObjects/angularHomePage";

import { browser } from "protractor";
import chai from "chai";


var expect = chai.expect;
let calc=new calculator;
let ang=new angularHomePage();

// Given('I will navigate to calculator site', async ()=> {
//     // Write code here that turns the phrase above into concrete actions
//     await browser.get("https://juliemr.github.io/protractor-demo/");
//   });
  Given('I will navigate to {string} site', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    if(string=="calculator"){
        await browser.get("https://juliemr.github.io/protractor-demo/");   
    }else if(string=="Angular"){
        await browser.get("https://angularjs.org/");
    }
  });

  When('I add two numbers {string} and {string}', async (string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
      
  });
  Then('the output displayed should be {string}', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    await  calc.go.click();
        browser.sleep(9000);
       await calc.getResult.getText().then(function(text){
            expect(text).to.equal(string);
        })
  });

  When('I clicked on header link', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    await ang.angularLink.click();
  });

  When('you will navigate to angular page', async ()=> {
    // Write code here that turns the phrase above into concrete actions
   await console.log("Navigate to new page");
  });
  Then('you will enter {string} in search box', async (string)=> {
    await ang.search.sendKeys(string);
  });