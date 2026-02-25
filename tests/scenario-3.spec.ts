import { test, expect } from '@playwright/test';
import { loginToBookStore, registerTestUser } from './utils/bookstore-helpers';

test.describe('Scenario 3: Book Store - search filter behavior', () => {
  test('should filter and clear book search results for a logged-in user', async ({
    page,
    request,
  }) => {
    const credentials = await test.step('register a new user via API', async () =>
      registerTestUser(request, 's3')
    );

    await test.step('login with the newly created user', async () => {
      await loginToBookStore(page, credentials);
    });

    await test.step('verify search filter narrows and restores results', async () => {
      await page.goto('/books');

      const filteredBook = 'Git Pocket Guide';
      const otherBook = 'Learning JavaScript Design Patterns';

      await page.locator('#searchBox').fill('Git');

      await expect(
        page.getByRole('link', { name: filteredBook, exact: true })
      ).toBeVisible();

      await expect(
        page.getByRole('link', { name: otherBook, exact: true })
      ).toHaveCount(0);

      await page.locator('#searchBox').fill('');

      await expect(
        page.getByRole('link', { name: otherBook, exact: true })
      ).toBeVisible();
    });
  });
});

