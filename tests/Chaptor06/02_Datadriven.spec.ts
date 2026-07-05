import { test, expect } from "@playwright/test"
import testdata from "../../test-data/testdata.json"


type Skillset = {
    Skill1:string,
    Skill2:string,
    Skill3:string
}

type TestData = Record<string,Skillset>

const typeTestData = testdata as TestData

for(const dataSetName in typeTestData){
    const skill = typeTestData[dataSetName as keyof TestData]
    test(`Data driven testing in playwright ${dataSetName}`,async({page})=>{
        console.log(`Dataset : ${dataSetName}`)
        console.log(`Search term ${skill.Skill1}`)
        console.log(`Search term ${skill.Skill2}`)
        console.log(`Search term ${skill.Skill3}`)


    })
}
