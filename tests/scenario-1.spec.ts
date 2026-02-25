import { test } from '@playwright/test';
import { loginToBookStore, registerTestUser } from './utils/bookstore-helpers';
import { BookStorePage } from './pages/book-store-page';

test.describe('Scenario 1: Book Store - happy path register, login, search', () => {
  let bookStorePage: BookStorePage;

  test.beforeEach(async ({ page }) => {
    bookStorePage = new BookStorePage(page);
  });

  test('User can register, login, and search for a book successfully', async ({
    page,
    request,
  }) => {
    const credentials = await test.step('Register a new user via API', async () =>
      registerTestUser(request, 's1')
    );

    await test.step('Login with the newly created user', async () => {
      await loginToBookStore(page, credentials);
    });

    await test.step('Search for book "Git Pocket Guide" and verify it appears', async () => {
      await bookStorePage.gotoBooks();
      await bookStorePage.searchForBook('Git Pocket Guide');
      await bookStorePage.expectBookInResults('Git Pocket Guide');
    });
  });
});

