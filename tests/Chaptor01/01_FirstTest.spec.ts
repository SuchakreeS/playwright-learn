import {test,expect } from "@playwright/test"

test("First Test in playwright",async({page})=>{
    await page.goto('http://localhost:3000/')

    await expect(page).toHaveTitle('ShopBoard')
})