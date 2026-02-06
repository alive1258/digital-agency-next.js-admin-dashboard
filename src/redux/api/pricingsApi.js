import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PRICING_FEATURES_URL = "/pricing-features";

export const pricingFeaturesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating a new pricing feature
    createPricingFeature: build.mutation({
      query: (data) => ({
        url: `${PRICING_FEATURES_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.pricing_features],
    }),

    // Query for fetching all pricing features
    getAllPricingFeatures: build.query({
      query: (params) => ({
        url: `${PRICING_FEATURES_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.pricing_features],
    }),

    // Query for fetching a single pricing feature by ID
    getSinglePricingFeature: build.query({
      query: (id) => ({
        url: `${PRICING_FEATURES_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.pricing_features],
    }),

    // Mutation for updating a pricing feature by ID
    updatePricingFeature: build.mutation({
      query: ({ id, data }) => ({
        url: `${PRICING_FEATURES_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.pricing_features],
    }),

    // Mutation for deleting a pricing feature by ID
    deletePricingFeature: build.mutation({
      query: (id) => ({
        url: `${PRICING_FEATURES_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.pricing_features],
    }),
  }),
});

export const {
  useCreatePricingFeatureMutation,
  useGetAllPricingFeaturesQuery,
  useGetSinglePricingFeatureQuery,
  useUpdatePricingFeatureMutation,
  useDeletePricingFeatureMutation,
} = pricingFeaturesApi;
