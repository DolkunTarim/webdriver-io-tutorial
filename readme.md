# WebDriver IO Tutorial UI Automation Code
> This code gives you a jump start about using the WebDriver.IO for UI Automation.

## Installation and Environment Setup

## OS X & Linux & Windows:
> make sure to install nodejs on your PC
> check out the code and open the project with your favorite development IDEA like visual studio code or Intellij IDEA
> in the terminal, run the command below to install all the dependencies

```sh
npm install --save-dev
```

## Execute the UI test 
> in the terminal, type the command below and observe the test execution

```sh
wdio
```
> the above command will execute the cubecart.e2e.js spec file


## Test Cases
> 1. verify admin user login
> 2. verify the customer list link on the dashboard
> 3. verify that admin user can add a new customer

## Note
> during the test, browser coookies are maintained, so admin user login the dashboard only once
> after the test, the admin user logs out


