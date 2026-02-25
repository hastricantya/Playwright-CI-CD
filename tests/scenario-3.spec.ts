import { test } from '@playwright/test';
import { loginToBookStore, registerTestUser } from './utils/bookstore-helpers';
import { BookStorePage } from './pages/book-store-page';

test.describe('Scenario 3: Register + Login + Search + Verify Book Detail', () => {
  let bookStorePage: BookStorePage;

  test.beforeEach(async ({ page }) => {
    bookStorePage = new BookStorePage(page);
  });

  test('should register, login, search a book, open it, and assert the detail page title', async ({
    page,
    request,
  }) => {
    const bookTitle = 'Git Pocket Guide';

    const credentials = await test.step('Register a new user via API', async () =>
      registerTestUser(request, 's3')
    );

    await test.step('Login with the newly created user', async () => {
      await loginToBookStore(page, credentials);
    });

    await test.step(`Search for "${bookTitle}"`, async () => {
      await bookStorePage.gotoBooks();
      await bookStorePage.searchForBook(bookTitle);
      await bookStorePage.expectBookInResults(bookTitle);
    });

    await test.step(`Click on "${bookTitle}" and assert the detail page`, async () => {
      await bookStorePage.clickBook(bookTitle);
      await bookStorePage.expectBookDetailTitle(bookTitle);
    });
  });
});
