import { test, expect } from "@playwright/test"

test("Test Reports in playwright", async ({ page, browser }) => {
    await page.goto('http://localhost:3000/practice');
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('textbox', { name: 'Password' }).press('Enter');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('United States').check();
    await page.getByText('Japan').check();
    await expect(page.getByText('Japan')).toBeChecked();
    await expect(page.getByText('United States')).toBeChecked();
    await page.getByText('Playwright', { exact: true }).click();
    await page.getByText('JavaScript', { exact: true }).click();
    await expect(page.getByText('Playwright', { exact: true })).toBeVisible();
})