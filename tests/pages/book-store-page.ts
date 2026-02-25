import { Page, expect } from '@playwright/test';

export class BookStorePage {
  constructor(private readonly page: Page) {}

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
}

