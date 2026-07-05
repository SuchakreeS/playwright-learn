import {test,expect} from "@playwright/test"

test("Alert Popup in playwright test 1", async ({ page }) => {
    await page.goto("http://localhost:3000/products/1")

    await page.getByRole('button',{name:"Add to Cart"}).click()

    await page.getByRole('link',{name:"Cart"}).click();

    page.once('dialog',async (dialog)=>{
        console.log(`Dialog message : ${dialog.message()}`);
        // await dialog.accept()
        await dialog.dismiss()
    })

    await expect(page.getByRole('button',{name:'Remove T-Shirt'})).toBeVisible()
    await page.getByRole("button",{name:'Remove T-Shirt'}).click()

    // await expect(page.getByText('Your cart is empty. Browse')).toBeVisible();

})