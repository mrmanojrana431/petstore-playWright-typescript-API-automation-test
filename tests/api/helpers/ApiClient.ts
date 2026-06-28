import { APIRequestContext } from "@playwright/test";

export class ApiClient {
    constructor(private request: APIRequestContext) {}
    async get(url: string, params?: Record<string, string>) {
        return await this.request.get(url, { params });
    }
    async post(url: string, data: any) {
        return await this.request.post(url, {
            data
        });
    }
}