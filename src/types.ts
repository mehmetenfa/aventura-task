export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface SubCategory {
    id: number;
    name: string;
    orderBy: number;
    categoryId: number;
    products: Product[];
}

export interface CategoryAndSubCategory {
    id: number;
    name: string;
    orderBy: number;
    imageUrl: string;
    subCategories: SubCategory[];
}

export interface CategoryAndSubCategoryItemProps {
    item: CategoryAndSubCategory;
    index: number;
}

export interface CategoryAndSubCategoryApiResponse {
    data: CategoryAndSubCategory[];
    success: boolean;
    message: string | null;
}

export interface AllProducts {
    id: number;
    name: string;
    orderBy: number;
    imageUrl: string;
    description: string;
    unitPrice: number;
}

export interface AllProductsItemProps {
    item: AllProducts;
    index: number;
    // onClick: any;
    // isExpanded: boolean;
}

export interface AllProductsApiResponse {
    data: AllProducts[];
    success: boolean;
    message: string | null;
}

export interface RelatedCategory {
    id: number;
    name: string;
    orderBy: number;
    imageUrl: string;
    description: string;
    unitPrice: number;
}

export interface RelatedCategoryItemProps {
    item: AllProducts;
    index: number;
}

export interface RelatedCategoryApiResponse {
    data: RelatedCategory[];
    success: boolean;
    message: string | null;
}
