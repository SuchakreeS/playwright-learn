import {test,expect } from "@playwright/test"

test("First Test in playwright",async({page})=>{
    await page.goto('http://localhost:3000/')

    await page.getByRole("main").screenshot({path:"./screenshots/ElementScreenshot.png"})

    await page.screenshot({path:"./screenshots/FullpageScreenshot.png"})
})