# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chaptor04\06_Checkbox_Radio.spec.ts >> Test Reports in playwright
- Location: tests\Chaptor04\06_Checkbox_Radio.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeChecked() failed

Locator:  getByText('Japan')
Expected: checked
Received: unchecked
Timeout:  30000ms

Call log:
  - Expect "toBeChecked" with timeout 30000ms
  - waiting for getByText('Japan')
    62 × locator resolved to <label class="flex items-center gap-1.5 text-sm cursor-pointer">…</label>
       - unexpected value "unchecked"

```

```yaml
- radio "Japan"
- text: Japan
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | 
  3  | test("Test Reports in playwright", async ({ page, browser }) => {
  4  |     await page.goto('http://localhost:3000/practice');
  5  |     await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  6  |     await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  7  |     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  8  |     await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  9  |     await page.getByRole('button', { name: 'Login' }).click();
  10 |     await page.getByText('United States').check();
> 11 |     await expect(page.getByText('Japan')).toBeChecked();
     |                                           ^ Error: expect(locator).toBeChecked() failed
  12 |     await expect(page.getByText('United States')).not.toBeChecked();
  13 |     await page.getByText('Playwright', { exact: true }).click();
  14 |     await page.getByText('JavaScript', { exact: true }).click();
  15 |     await expect(page.getByText('Playwright', { exact: true })).toBeVisible();
  16 | })
```