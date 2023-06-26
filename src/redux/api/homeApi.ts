import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
interface Products {
  products: any[];
}
export const homeApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:8000" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products, void>({
      query: (id) => ({ url: "products" }),
    }),
  }),
});


