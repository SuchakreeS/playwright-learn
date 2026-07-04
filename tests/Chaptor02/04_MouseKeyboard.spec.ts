import {test,expect } from "@playwright/test"

test("Mouse & Keyboard actions in playwright",async({page})=>{
    await page.goto('http://localhost:3000/')

    await page.getByRole('img',{name:"polo"}).click({button:'left'})
    await page.getByRole('img',{name:"polo"}).hover()
    await page.getByRole('img',{name:"polo"}).dblclick()
    await page.getByRole('textbox',{exact:true}).press("Enter")
})