import {test,expect} from "@playwright/test"

test("Test Reports in playwright", async ({ page,browser }) => {
    await page.goto("http://localhost:3000/practice")

    await page.getByRole("textbox", ({ name: "username" })).fill("student")
    await page.getByRole("textbox", ({ name: "password" })).fill("student123")

    await page.getByRole("button", ({ name: "Login" })).click()

    await expect(page).toHaveURL(/localhost:3000/)
})