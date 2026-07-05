import {test,expect} from "@playwright/test"

test("Test Reports in playwright", async ({ page,browser }) => {
    await page.goto("http://localhost:3000/")

    const navLinks = await page.$$("header nav a")

    await expect(navLinks.length).toBeGreaterThanOrEqual(3)

    for(let i = 0;i<navLinks.length;i++){
        const text = await navLinks[i].textContent()
        console.log(`Text from first loop ${text}`)
        await expect(text).toBeTruthy()
    }

    for(let navLink of navLinks){
        const text2 = await navLink.textContent()
        console.log(`Text from Second loop ${text2}`)
        await expect(text2).toBeTruthy()
    }

    const navLocator = page.locator("header nav a")
    const count = await navLocator.count()
    await expect(count).toBe(navLinks.length)

    for(let i = 0;i<count;i++){
        const text3 = await navLocator.nth(i).textContent()
        console.log(`Text from Third loop ${text3}`)
        await expect(text3).toBeTruthy()
    }

})