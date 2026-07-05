import {test,expect} from "@playwright/test"

test.describe("Smoketesting",()=>{
    test("grouping in playwright test 1",async ({page})=>{
        await page.goto("http://localhost:3000/practice")
    
        await page.getByRole("textbox",({name:"username"})).fill("student")
        await page.getByRole("textbox",({name:"password"})).fill("student123")
    
        await page.getByRole("button",({name:"Login"})).click()
    
        await expect(page).toHaveURL(/localhost:3000/)
    })
    test("grouping in playwright test 2",async ({page})=>{
        await page.goto("http://localhost:3000/practice")
    
        await page.getByRole("textbox",({name:"username"})).fill("student")
        await page.getByRole("textbox",({name:"password"})).fill("student123")
    
        await page.getByRole("button",({name:"Login"})).click()
    
        await expect(page).toHaveURL(/localhost:3000/)
    })
    test("grouping in playwright test 3",async ({page})=>{
        await page.goto("http://localhost:3000/practice")
    
        await page.getByRole("textbox",({name:"username"})).fill("student")
        await page.getByRole("textbox",({name:"password"})).fill("student123")
    
        await page.getByRole("button",({name:"Login"})).click()
    
        await expect(page).toHaveURL(/localhost:3000/)
    })
})
