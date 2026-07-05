import {test,expect} from "@playwright/test"

test("Test Reports in playwright", async ({ page,browser }) => {
    await page.goto("http://localhost:3000/")

    const productHeader = await page.locator('h1').textContent()

    await expect(productHeader).toBe('Products');

    const searchPlaceholder = await page.locator('[data-testid="search-input"]').getAttribute('placeholder')

    await expect(searchPlaceholder).toBe("Search products...")
})