import { baseApi } from "./baseApi";

export interface Category {
    id: number;
    name: string;
    image: string;
    slug: string;
}

export interface Product {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
}

export const api = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // GET all products
        getAllProducts: builder.query<Product[], void>({
            query: () => "/products",
            providesTags: ["Products"],
        }),

        // GET single product by id
        getSingleProduct: builder.query<Product, number>({
            query: (id: number) => `/products/${id}`,
            providesTags: ["Products"],
        }),

        // GET all categories
        getAllCategories: builder.query<Category[], void>({
            query: () => "/categories",
            providesTags: ["Categories"],
        }),

        // GET products by category
        getProductsByCategory: builder.query<Product[], number>({
            query: (categoryId: number) => `/categories/${categoryId}/products`,
            providesTags: ["Products"],
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetSingleProductQuery,
    useGetAllCategoriesQuery,
    useGetProductsByCategoryQuery,
} = api;
