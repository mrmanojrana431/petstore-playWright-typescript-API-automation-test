import { ApiClient } from "../api/helpers/ApiClient";
import { PetRequest } from "../dataclasses/request/PetRequest";

export class PetController {
    constructor(private apiClient: ApiClient) {}
    async getAvailablePets() {
        return await this.apiClient.get(
            "/v2/pet/findByStatus",
            {
                status: "available"
            }
        );
    }

    async createPet(petRequest: PetRequest) {
        return await this.apiClient.post(
            "v2/pet",
            petRequest
        );
    }

    async getPetById(petId: number) {
        return await this.apiClient.get(
            `/v2/pet/${petId}`
        );
    }

}