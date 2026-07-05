import { expect } from "@playwright/test"
import { test } from "../../src/fixture/pageFixture"
test("Test Reports in playwright", async ({ page, loginPage }) => {
    await loginPage.navigate()
    await loginPage.login("student", "student123")
    await expect(page).toHaveURL(/localhost:3000/)
})