import {test,expect } from "@playwright/test"

test("Soft Assertion in playwright",async({page})=>{
    await page.goto('http://localhost:3000/')
    
    await expect.soft(page).toHaveTitle('test')
    await expect.soft(page).toHaveTitle('ShopBoard')

})