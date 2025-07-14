import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Navigate using POM', async ({ page }) => {
  const home = new HomePage(page);
  await home.navigate();
  await home.clickGetStarted();
});