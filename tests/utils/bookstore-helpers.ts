import { APIRequestContext, Page, expect } from '@playwright/test';

export const DEFAULT_PASSWORD = 'Test@1234';

export interface TestUserCredentials {
  userName: string;
  password: string;
}

export async function registerTestUser(
  request: APIRequestContext,
  scenarioSuffix: string
): Promise<TestUserCredentials> {
  const userName = `user_${scenarioSuffix}_${Date.now()}`;
  const password = DEFAULT_PASSWORD;

  const response = await request.post('https://demoqa.com/Account/v1/User', {
    data: {
      userName,
      password,
    },
  });

  expect(response.ok()).toBeTruthy();

  return { userName, password };
}

export async function loginToBookStore(
  page: Page,
  credentials: TestUserCredentials
): Promise<void> {
  await page.goto('/login');

  await page.locator('#userName').fill(credentials.userName);
  await page.locator('#password').fill(credentials.password);
  await page.locator('#login').click();

  await expect(page.locator('#userName-value')).toHaveText(credentials.userName);
}

