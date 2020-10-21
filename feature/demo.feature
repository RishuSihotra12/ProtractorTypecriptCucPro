Feature: I am going to validate my wesite functionalities

@calculatorTesting
Scenario: Calculator add functionality testing
Given I will navigate to "calculator" site
When I add two numbers "3" and "5"
Then the output displayed should be "8"

@calculatorTesting
Scenario: Calculator add functionality testing
Given I will navigate to "calculator" site
When I add two numbers "2" and "7"
Then the output displayed should be "9"

@calculatorTesting2
Scenario Outline: Calculator add functionality testing
Given I will navigate to "calculator" site
When I add two numbers "<num1>" and "<num2>"
Then the output displayed should be "<result>"
Examples:
    | num1 | num2 | result |
    | 4    | 4    | 8      |
    | 6    | 4    | 10     |

@AngularTesting
Scenario Outline: Calculator add functionality testing
Given I will navigate to "Angular" site
When I clicked on header link
And you will navigate to angular page
Then you will enter "<keys>" in search box
Examples:
    | keys | 
    | hello  |
    | hey    | 

