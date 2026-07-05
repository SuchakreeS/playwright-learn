import {test,expect} from "@playwright/test"

test("Visual Test in playwright",{tag:["@Smoketest"]}, async ({ page }) => {
    await page.goto("http://localhost:3000/cart")

    await expect(page).toHaveScreenshot("Learning.png")


})