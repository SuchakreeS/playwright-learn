import {test,expect} from "@playwright/test"

test("Browser Context in playwright test 1", async ({ page,browser }) => {
    await page.goto("http://localhost:3000/practice")

    await page.getByRole("textbox", { name: "Username" }).fill("student")
    await page.getByRole("textbox", { name: "Password" }).fill("student123")

    await page.getByRole("button", { name: "Login" }).click()

    await expect(page).toHaveURL(/localhost:3000/)

    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page2.goto("http://localhost:3000/practice")

    await page2.getByRole("textbox", { name: "Username" }).fill("student")
    await page2.getByRole("textbox", { name: "Password" }).fill("student123")

    await page2.getByRole("button", { name: "Login" }).click()

    await expect(page2).toHaveURL(/localhost:3000/)

    const page3 = await context2.newPage()

    await page3.goto("http://localhost:3000/practice")

    // await page3.getByRole("textbox", { name: "Username" }).fill("student")
    // await page3.getByRole("textbox", { name: "Password" }).fill("student123")

    // await page3.getByRole("button", { name: "Login" }).click()
    
    await expect(page3).toHaveURL(/localhost:3000/)

    await context2.close();
})