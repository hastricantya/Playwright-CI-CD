# DemoQA Playwright Test Automation - Template

A simple and minimal Playwright test automation template repository for testing critical scenarios on [demoqa.com](https://demoqa.com/).

Built with **TypeScript** and **Playwright**.

## Your Task

**Create a minimum of 3 critical test scenarios** from [https://demoqa.com/](https://demoqa.com/).

### Instructions:

1. **Explore the website:**

   - Open [https://demoqa.com/](https://demoqa.com/) in your browser
   - Navigate through different sections and features
   - Identify the most critical user flows and functionalities

2. **Create your test scenarios:**

   - Implement tests for "Book Store Application" in the provided template files:
     - `tests/scenario-1.spec.ts`
     - `tests/scenario-2.spec.ts`
     - `tests/scenario-3.spec.ts`
   - Each test should cover scenario:
     - Register
     - Login
     - Search a book
   - Make sure your tests include:
     - Navigation to the relevant page
     - User interactions (clicks, form fills, selections, etc.)
     - Assertions to verify expected behavior

3. **Test quality considerations:**
   - Ensure tests are reliable and maintainable
   - Use appropriate selectors and wait strategies
   - Include meaningful assertions

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/claramanik/demoqa-playwright-tests.git
   cd demoqa-playwright-tests
   ```

   **Important:** Make sure you're in the repository directory (where `package.json` is located) before running any npm commands.

2. **Verify you're in the correct directory:**

   You should see files like `package.json`, `playwright.config.ts`, and a `tests/` folder. If you don't see these files, navigate to the correct directory.

## Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install
   ```

   **Note:** If you get an error like "Could not read package.json", make sure you're in the repository root directory (where `package.json` is located).

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## Running Tests

**Run all tests:**

```bash
npm test
```

**Run tests in headed mode (see browser):**

```bash
npm run test:headed
```

**Run tests with UI mode (interactive):**

```bash
npm run test:ui
```

**Run tests in debug mode:**

```bash
npm run test:debug
```

**Run a specific test file:**

```bash
npx playwright test tests/scenario-1.spec.ts
```

## Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```
.
├── tests/
│   ├── scenario-1.spec.ts    # Your first critical test scenario
│   ├── scenario-2.spec.ts    # Your second critical test scenario
│   └── scenario-3.spec.ts    # Your third critical test scenario
├── playwright.config.ts      # Playwright configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## Configuration

- Tests are configured to run against `https://demoqa.com` (baseURL in `playwright.config.ts`)
- Screenshots are captured on test failures
- Tests retry once on failure (in CI environments)
- All tests run in parallel by default
- TypeScript is configured with strict mode enabled

## Tips

- Use Playwright's built-in auto-waiting features
- Leverage TypeScript for type safety
- Use meaningful test descriptions
- Keep tests independent and isolated
- Use page object pattern if needed for complex scenarios

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [DemoQA Website](https://demoqa.com/)
