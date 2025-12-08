import { test, expect } from '@playwright/test';

/**
 * TASK: Create your second critical test scenario from https://demoqa.com/
 * 
 * Instructions:
 * 1. Open https://demoqa.com/ in your browser
 * 2. Explore the website and identify another critical user flow or feature
 * 3. Write a test that validates this critical scenario
 * 4. Make sure to include:
 *    - Navigation to the page
 *    - User interactions (clicks, fills, etc.)
 *    - Assertions to verify expected behavior
 * 
 * Example scenarios you might consider:
 * - Dynamic elements (elements that appear/disappear)
 * - Alerts and dialogs handling
 * - Dropdowns and select elements
 * - Checkboxes and radio buttons
 * - File uploads
 */

test.describe('Scenario 2: [Describe your second critical scenario here]', () => {
  test('should [describe what this test validates]', async ({ page }) => {
    // TODO: Navigate to the page
    // await page.goto('/your-page-path');
    
    // TODO: Perform user actions
    // await page.click('selector');
    // await page.fill('selector', 'value');
    
    // TODO: Add assertions to verify expected behavior
    // await expect(page.locator('selector')).toBeVisible();
    // await expect(page.locator('selector')).toContainText('expected text');
  });
});

