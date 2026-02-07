import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PRICINGS_URL = "/pricings";

export const pricingsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating a new pricing
    createPricing: build.mutation({
      query: (data) => ({
        url: `${PRICINGS_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.pricings],
    }),

    // Query for fetching all pricings
    getAllPricings: build.query({
      query: (params) => ({
        url: `${PRICINGS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.pricings],
    }),

    // Query for fetching a single pricing by ID
    getSinglePricing: build.query({
      query: (id) => ({
        url: `${PRICINGS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.pricings],
    }),

    // Mutation for updating a pricing by ID
    updatePricing: build.mutation({
      query: ({ id, data }) => ({
        url: `${PRICINGS_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.pricings],
    }),

    // Mutation for deleting a pricing by ID
    deletePricing: build.mutation({
      query: (id) => ({
        url: `${PRICINGS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.pricings],
    }),
  }),
});

export const {
  useCreatePricingMutation,
  useGetAllPricingsQuery,
  useGetSinglePricingQuery,
  useUpdatePricingMutation,
  useDeletePricingMutation,
} = pricingsApi;
