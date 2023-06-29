import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
interface Products {
  products: any[];
}
export const homeApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:8000" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products, string>({
      query: (id) => "/products",
    }),
  }),
});

// export const { useGetProductsQuery } = homeApi;
