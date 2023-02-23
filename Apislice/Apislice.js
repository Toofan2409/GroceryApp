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
      query: body => ({url: `/products/category/${body}`, method: 'GET'}),
    }),
    AddtoCart: builder.mutation({
      query: body => ({
        url: '/carts/add',
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body,
      }),
    }),
    GetCartOfuser: builder.query({
      query: () => ({
        url: `/carts/user/1`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetCategoryQuery,
  useAddtoCartMutation,
  useGetCartOfuserQuery,
} = Apidata;
