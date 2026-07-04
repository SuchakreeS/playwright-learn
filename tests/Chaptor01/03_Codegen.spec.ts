import { test, expect } from "@playwright/test"

test("Codegen in playwright", async ({ page }) => {
    await page.goto('http://localhost:3000/')

    await page.getByRole('link', { name: 'Practice' }).click();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
})