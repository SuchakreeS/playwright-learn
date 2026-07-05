import {test,expect} from "@playwright/test"

const searchKeywords = ["Wallet","Shirt","Jacket"]

for(let searchKeyword of searchKeywords){
    test(`Parameterize in playwright ${searchKeyword}`, async ({ page }) => {
        await page.goto("http://localhost:3000/")
    
        await page.getByRole('textbox',{name:'Search products...'}).fill(searchKeyword)
        await page.getByRole('textbox',{name:'Search products...'}).press("Enter")

        await page.getByRole("link",{name:searchKeyword}).click()

        await expect(page.getByText(searchKeyword)).toBeVisible()
    })
}
