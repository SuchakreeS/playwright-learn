import {test,expect} from "@playwright/test"
import { Homepage } from "../../src/pages/Homepage"

test("Test Reports in playwright", async ({ page }) => {
    const loginPage = new Homepage(page)
    await loginPage.navigate()
    await loginPage.login("student","student123")
    await expect(page).toHaveURL(/localhost:3000/)
})