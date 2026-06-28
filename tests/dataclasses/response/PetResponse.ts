export interface Category {
    id: bigint;
    name: string;
}

export interface Tag {
    id: bigint;
    name: string;
}

export interface PetResponse {
    id: bigint;
    category: Category;
    name: string;
    photoUrls: string[];
    tags: Tag[];
    status: string;
}