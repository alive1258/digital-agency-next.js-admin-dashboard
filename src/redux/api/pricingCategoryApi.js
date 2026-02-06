import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PRICING_CATEGORY_URL = "/pricing-category";

export const pricingCategoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating a new pricing category
    createPricingCategory: build.mutation({
      query: (data) => ({
        url: `${PRICING_CATEGORY_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.pricing_category],
    }),

    // Query for fetching all pricing categories
    getAllPricingCategories: build.query({
      query: (params) => ({
        url: `${PRICING_CATEGORY_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.pricing_category],
    }),

    // Query for fetching a single pricing category by ID
    getSinglePricingCategory: build.query({
      query: (id) => ({
        url: `${PRICING_CATEGORY_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.pricing_category],
    }),

    // Mutation for updating a pricing category by ID
    updatePricingCategory: build.mutation({
      query: ({ id, data }) => ({
        url: `${PRICING_CATEGORY_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.pricing_category],
    }),

    // Mutation for deleting a pricing category by ID
    deletePricingCategory: build.mutation({
      query: (id) => ({
        url: `${PRICING_CATEGORY_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.pricing_category],
    }),
  }),
});

export const {
  useCreatePricingCategoryMutation,
  useGetAllPricingCategoriesQuery,
  useGetSinglePricingCategoryQuery,
  useUpdatePricingCategoryMutation,
  useDeletePricingCategoryMutation,
} = pricingCategoryApi;
