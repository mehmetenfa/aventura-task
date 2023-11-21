interface Product {
    id: number;
    name: string;
    price: number;
}

interface SubCategory {
    id: number;
    name: string;
    orderBy: number;
    categoryId: number;
    products: Product[];
}

interface Category {
    id: number;
    name: string;
    orderBy: number;
    imageUrl: string;
    subCategories: SubCategory[];
}
