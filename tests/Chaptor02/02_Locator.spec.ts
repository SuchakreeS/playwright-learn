import {test,expect } from "@playwright/test"

test("Locators in playwright",async({page})=>{
    await page.goto('http://localhost:3000/')

    await page.getByRole("link",{name:"Cart"}).click()
    await page.getByRole("link",{name:"Practice"}).click()

    await page.getByRole('textbox', { name: 'Username' }).click()
    
    await page.getByRole("link",{name:"Home"}).click()
    await page.getByTestId('category-select').isVisible()
})