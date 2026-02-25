import { Page, expect } from '@playwright/test';

export class BookStorePage {
  constructor(private readonly page: Page) { }

  async gotoBooks() {
    await this.page.goto('/books');
  }

  async searchForBook(searchTerm: string) {
    await this.page.fill('#searchBox', searchTerm);
  }

  async expectBookInResults(title: string) {
    // Prefer the historical React Table body selector, fall back to standard tbody
    const resultsContainer = this.page.locator('.rt-tbody, tbody');
    await expect(resultsContainer).toContainText(title);
  }

  async clickBook(title: string) {
    await this.page.getByRole('link', { name: title, exact: true }).click();
  }

  async expectBookDetailTitle(title: string) {
    // The detail page renders the title inside a label next to "Book Title"
    await expect(this.page.getByText(title, { exact: true })).toBeVisible();
    // Also confirm the URL changed to the book detail path
    await expect(this.page).toHaveURL(/.*books\?/);
  }
}

