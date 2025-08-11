import { defineConfig } from '@playwright/test'; // imports helper function from lib

export default defineConfig({   // exporting object as default, playwright looks for this when we run npx playwright test
  use: {                        // defining block of default settings for each test
    headless: true,             // no UI window
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',     // .playwright/videos/ or in test-results
  },
  timeout: 30000,           // Sets the global timeout for each test to 30 seconds 
});