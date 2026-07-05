import { Locator, Page, APIRequestContext } from "@playwright/test";

export class Apipage {
    readonly page: Page;
    readonly request: APIRequestContext
    constructor(page: Page, request: APIRequestContext) {
        this.page = page
        this.request = request
    }
    async getApi(id: number) {
        return await this.request.get(`/posts/${id}`)
    }
    async postApi(data: { title: string, body: string, userId: number }) {
        return await this.request.post(`/posts`, { data })
    }
    async putApi(id: number, data: object) {
        return await this.request.put(`/posts/${id}`, { data })
    }
    async deleteApi(id: number) {
        return await this.request.delete(`/posts/${id}`)
    }
}