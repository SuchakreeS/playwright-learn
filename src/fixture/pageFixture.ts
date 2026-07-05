import { test as base } from "@playwright/test"
import { Homepage } from "../pages/Homepage"
import { Apipage } from "../pages/Apipage"
// import {Ecommercepage} from "../pages/Ecommercepage"
type PageHelpers = {
    loginPage: Homepage
    Apipage: Apipage
    // Ecommercepage : Ecommercepage
}

export const test = base.extend<PageHelpers>({
    loginPage: async ({ page }, use) => {
        await use(new Homepage(page))
    },
    Apipage: async ({ page,request }, use) => {
        await use(new Apipage(page,request))
    }
    // ecommercepage : async({page},use) =>{
    //     await use(new Ecommercepage(page))
    // }
})