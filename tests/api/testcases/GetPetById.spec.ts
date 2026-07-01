import { test, expect } from "@playwright/test";
import { ApiClient } from "../helpers/ApiClient";
import { PetController } from "../../controllers/PetController";
import { PetResponse } from "../../dataclasses/response/PetResponse";
import {PetRequest} from "../../dataclasses/request/PetRequest";

test("Verify get pet by ID", async ({ request }) => {
    const apiClient = new ApiClient(request);
    const petController = new PetController(apiClient);
    const petRequest = new PetRequest();
    await petController.createPet(petRequest); // test data creation
    const response = await petController.getPetById(petRequest.id);
    
    expect(response.status()).toBe(200);
    const pet: PetResponse = await response.json();
    expect(pet).toBeTruthy();
    expect(pet.id).toBe(petRequest.id);
    expect(pet.name).toBeTruthy();
    expect(pet.status).toBeTruthy();
});
