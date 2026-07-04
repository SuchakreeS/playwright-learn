import { test, expect } from "@playwright/test"

test("Iframes in playwright", async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('link', { name: 'Practice' }).click();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    const iframes = page.locator('div.flex.gap-8.items-center.mt-2') 
    // เนื่องจากตัว Locator ต้องดูผ่าน class เท่านั้นทำให้ไม่สามารถใช้ iframe locator ได้ครับ
    const dragable = iframes.locator(".drag-box")
    const dropable = iframes.locator(".drop-box")

    await dragable.dragTo(dropable)
})