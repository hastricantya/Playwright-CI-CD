import { test, expect } from '@playwright/test';
import { loginToBookStore, registerTestUser, DEFAULT_PASSWORD } from './utils/bookstore-helpers';
import { BookStorePage } from './pages/book-store-page';

test.describe('Scenario 2: Invalid Login + Valid Login + Search', () => {
  let bookStorePage: BookStorePage;

  test.beforeEach(async ({ page }) => {
    bookStorePage = new BookStorePage(page);
  });

  test('should show error on wrong password, then login correctly and search a book', async ({
    page,
    request,
  }) => {
    // Register a fresh user so we have valid credentials ready
    const credentials = await test.step('Register a new user', async () =>
      registerTestUser(request, 's2')
    );

    await test.step('Login with wrong password and assert error message', async () => {
      await page.goto('/login');

      await page.locator('#userName').fill(credentials.userName);
      await page.locator('#password').fill('WrongPassword!999');
      await page.locator('#login').click();

      //nvalid-credentials banner with this text
      const errorBanner = page.locator('#name');
      await expect(errorBanner).toBeVisible();
      await expect(errorBanner).toContainText('Invalid username or password!');
    });
    ``
    await test.step('Login successfully with correct credentials', async () => {
      await loginToBookStore(page, credentials);
    });

    await test.step('Search for "JavaScript" and assert results are filtered', async () => {
      await bookStorePage.gotoBooks();

      const searchTerm = 'JavaScript';
      await bookStorePage.searchForBook(searchTerm);

      // The search term showing
      await bookStorePage.expectBookInResults(searchTerm);

      // Unrelated book should not appear in the filtered list
      const unrelatedBook = 'Git Pocket Guide';
      const unrelatedLink = page.getByRole('link', { name: unrelatedBook, exact: true });
      await expect(unrelatedLink).toHaveCount(0);
    });
  });
});
