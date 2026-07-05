import { expect } from "@playwright/test"
import { test } from "../../src/fixture/pageFixture"
test("Test Reports in playwright", async ({ page, loginPage }) => {
    await loginPage.navigate()
    await loginPage.login(`${process.env.ADMIN_USERNAME}`,`${process.env.ADMIN_PASSWORD}`)
    await expect(page).toHaveURL(/localhost:3000/)
})