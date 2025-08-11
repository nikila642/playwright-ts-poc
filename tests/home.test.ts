import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page'; //  importing the HomePage class

test('Navigate using POM', async ({ page }) => { // declaring test case name. ({ page }) - Destructuring - Playwright automatically gives you a browser page, and this line pulls it out 
  const home = new HomePage(page);  // creating an instance of the HomePage class and passing in the page object, yhis is how you give your POM class access to the browser tab, inside that class, you can use this.page to perform actions.
  await home.navigate();
  await home.clickGetStarted();
});