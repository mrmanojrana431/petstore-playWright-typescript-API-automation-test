export class PetRequest {
    id: number;
    category: {
        id: number;
        name: string;
    };
    name: string;
    photoUrls: string[];
    tags: {
        id: number;
        name: string;
    }[];
    status: string;

    constructor() {
        const randomId = Math.floor(Math.random() * 1000000);
        this.id = randomId;
        this.category = {
            id: randomId,
            name: `category_${randomId}`
        };
        this.name = `doggie_${randomId}`;
        this.photoUrls = [
            `https://test.com/photo_${randomId}.jpg`
        ];
        this.tags = [
            {
                id: randomId,
                name: `tag_${randomId}`
            }
        ];
        this.status = "available";
    }
}