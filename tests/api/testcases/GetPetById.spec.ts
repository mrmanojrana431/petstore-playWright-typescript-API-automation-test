import { test, expect } from "@playwright/test";
import { ApiClient } from "../helpers/ApiClient";
import { PetController } from "../../controllers/PetController";
import { PetResponse } from "../../dataclasses/response/PetResponse";

test("Verify get pet by ID", async ({ request }) => {
    const apiClient = new ApiClient(request);
    const petController = new PetController(apiClient);
    const petId = 1;
    const response = await petController.getPetById(petId);
    
    expect(response.status()).toBe(200);
    const pet: PetResponse = await response.json();
    expect(pet).toBeTruthy();
    expect(pet.id).toBe(petId);
    expect(pet.name).toBeTruthy();
    expect(pet.status).toBeTruthy();
});
