import { expect } from "@playwright/test"
import { test } from "../../src/fixture/pageFixture"


test("Request Api", async ({ page, Apipage }) => {
    const createPost = await Apipage.postApi({
        title: 'Hello world',
        body: 'Testing clean code architecture',
        userId: 1
    })
    await expect(createPost.status()).toBe(201)
    const createData = await createPost.json()
    console.log(`Create ID : ${createData.id}`)


    const getRes = await Apipage.getApi(1);
    expect(getRes.status()).toBe(200)
    const getData = await getRes.json()
    console.log(`Get ID : ${getData.id}`)

    const putRes = await Apipage.putApi(1,{title:"Hello playwright"})
    expect(putRes.status()).toBe(200)
    const putData = await putRes.json()
    console.log(`Put Title : ${putData.title}`)

    const deleteRes = await Apipage.deleteApi(1)
    expect(deleteRes.status()).toBe(200)
    console.log(`Deleted Data`)
})