import { test, expect } from "@playwright/test";
import { ApiClient } from "../helpers/apiClient";
import { PetController } from "../../controllers/PetController";
import { PetRequest } from "../../dataclasses/request/PetRequest";

test("Create Pet", async ({ request }) => {
    const apiClient = new ApiClient(request);
    const petController = new PetController(apiClient);
    const petRequest = new PetRequest();
    const response = await petController.createPet(petRequest);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.id).toBe(petRequest.id);
    expect(body.name).toBe(petRequest.name);
    expect(body.status).toBe(petRequest.status);
});