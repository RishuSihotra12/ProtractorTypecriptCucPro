import {browser,element,by} from 'protractor';
import {async} from 'q';
import {calculator} from "./pageObjects/calculator";
import {angularHomePage} from "./pageObjects/angularHomePage";

describe('chain locator demo',()=>{
    it('open Angular website',async()=>{
       await browser.get("https://juliemr.github.io/protractor-demo/");

        let calc=new calculator;

       await calc.firstEditBox.sendKeys('3');
       await calc.secondEditBox.sendKeys('5');
           
      await  calc.go.click();
       // browser.sleep(9000);
        calc.getResult.getText().then(function(text){
            console.log(text);
        })
    });
    it('Anugular website',async()=>{
       await browser.get("https://angularjs.org/");
       let ang=new angularHomePage();

       await ang.angularLink.click();
       await ang.search.sendKeys("hello");
    });
});