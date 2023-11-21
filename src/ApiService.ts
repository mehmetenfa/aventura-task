import axios from "axios";
import {AllProductsApiResponse, CategoryAndSubCategoryApiResponse, RelatedCategoryApiResponse} from "./types";

const categoryAndSubCategoryApiUrl = 'https://kadimgross.com.tr/avensellservice/api/Categories/getallCategoryAndSubCategories';
const allProductsApiUrl = 'https://www.kadimgross.com.tr/avenSellService/api/products/getAll';
const relatedCategoryApiUrl = 'https://kadimgross.com.tr/avensellservice/api/Products/GetAllByCategoryId?categoryId=3';

export const categoryAndSubCategoryFetchData = async (): Promise<CategoryAndSubCategoryApiResponse> => {
    try {
        const response = await axios.get<CategoryAndSubCategoryApiResponse>(categoryAndSubCategoryApiUrl);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }
};

export const allProductsFetchData = async (): Promise<AllProductsApiResponse> => {
    try {
        const response = await axios.get<AllProductsApiResponse>(allProductsApiUrl);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }
};

export const relatedCategoryFetchData = async (): Promise<RelatedCategoryApiResponse> => {
    try {
        const response = await axios.get<RelatedCategoryApiResponse>(relatedCategoryApiUrl);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }
};


