import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://cinephile.up.railway.app',
  credentials: 'include',
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
