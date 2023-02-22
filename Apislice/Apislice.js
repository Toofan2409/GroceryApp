import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const base_url = 'https://dummyjson.com';

export const Apidata = createApi({
  reducerPath: 'Apidata',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
  endpoints: builder => ({
    GetAllProduct: builder.query({
      query: () => ({url: `/products/categories`, method: 'GET'}),
    }),
    GetCategory: builder.query({
      query: () => ({url: `/products/category/smartphones`, method: 'GET'}),
    }),
  }),
});

export const {useGetAllProductQuery, useGetCategoryQuery} = Apidata;
