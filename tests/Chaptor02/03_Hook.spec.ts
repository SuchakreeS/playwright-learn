import {test,expect} from "@playwright/test";

test.beforeAll(async()=>{
    console.log("Run before all tests")
})
test.beforeEach(async()=>{
    console.log("Run before each tests")
})
test.afterEach(async()=>{
    console.log("Run after each tests")
})
test.afterAll(async()=>{
    console.log("Run after all tests")
})


test("Test1",async({page})=>{
  console.log("Test 1 Execute begin")
  
  await page.goto("http://localhost:3000/")

  await expect(page).toHaveTitle("ShopBoard")
})
test("Test2",async({page})=>{
  console.log("Test 2 Execute begin")
  
  await page.goto("http://localhost:3000/")

  await expect(page).toHaveTitle("ShopBoard")
})