import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const ASSIGEN_PRICING_FEATURES_URL = "/assigen-pricing-features";

export const assigenPricingFeaturesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new assigen pricing features
    createAssigenPricingFeatures: build.mutation({
      query: (data) => ({
        url: `${ASSIGEN_PRICING_FEATURES_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.assigen_pricing_features],
    }),

    // Query for fetching all assigen pricing features
    getAllAssigenPricingFeatures: build.query({
      query: (params) => ({
        url: `${ASSIGEN_PRICING_FEATURES_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.assigen_pricing_features],
    }),

    // Query for fetching a single assigen pricing feature by ID
    getSingleAssigenPricingFeature: build.query({
      query: (id) => ({
        url: `${ASSIGEN_PRICING_FEATURES_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.assigen_pricing_features],
    }),

    // Mutation for updating a single assigen pricing feature by ID
    updateAssigenPricingFeature: build.mutation({
      query: ({ id, data }) => ({
        url: `${ASSIGEN_PRICING_FEATURES_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.assigen_pricing_features],
    }),

    // Mutation for deleting a assigen pricing feature by ID
    deleteAssigenPricingFeature: build.mutation({
      query: (id) => ({
        url: `${ASSIGEN_PRICING_FEATURES_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.assigen_pricing_features],
    }),
  }),
});

export const {
  useCreateAssigenPricingFeaturesMutation,
  useGetAllAssigenPricingFeaturesQuery,
  useGetSingleAssigenPricingFeatureQuery,
  useUpdateAssigenPricingFeatureMutation,
  useDeleteAssigenPricingFeatureMutation,
} = assigenPricingFeaturesApi;
