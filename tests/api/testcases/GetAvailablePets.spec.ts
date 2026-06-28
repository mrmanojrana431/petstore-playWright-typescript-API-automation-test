import { test, expect } from "@playwright/test";
import { ApiClient } from "../helpers/ApiClient";
import { PetController } from "../../controllers/PetController";
import { PetResponse } from "../../dataclasses/response/PetResponse";

test("Verify available pets", async ({ request }) => {

    const apiClient = new ApiClient(request);
    const petController = new PetController(apiClient);
    const response = await petController.getAvailablePets();
    expect(response.status()).toBe(200);
    const pets: PetResponse[] = await response.json();
    expect(pets.length).toBeGreaterThan(0);
    expect(Array.isArray(pets)).toBeTruthy();
    expect(pets.length).toBeGreaterThan(0);

    for (const pet of pets) {
        expect(pet.status).toBe("available");
    }
});