import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { RootState } from "./store";

const baseQuery = fetchBaseQuery({
  baseUrl: "/",
  prepareHeaders: (headers, { getState }) => {
    const state: RootState = getState();
    const token = state.auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
