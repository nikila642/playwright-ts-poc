import { Page } from '@playwright/test';  // importing Page type

export class HomePage { // defining class, this follows POM -- grouping all action related to home page in one place
  readonly page: Page;  // declares a readonly property named page, typed as Page

  constructor(page: Page) { //  once it's set in the constructor, it can’t be changed, makes your class more robust and predictable. Constructor is called when you create an instance of HomePage
    this.page = page; // when obj of this class is created, page gets saved as this.page so that the other methods can use it.
  }

  async navigate() {  // await cannot work without async. await - waiting for something to finish, async - means fn might pause and wait for something to finish
    await this.page.goto('https://playwright.dev/');
  }

  async clickGetStarted() { //  encapsulating user actions as methods, following POM best practices.
    await this.page.click('text=Get Started');
  }
}