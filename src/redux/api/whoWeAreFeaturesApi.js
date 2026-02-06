import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const WHO_WE_ARE_FEATURES_URL = "/who-we-are-features";

export const whoWeAreFeaturesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new who-we-are features
    createWhoWeAreFeatures: build.mutation({
      query: (data) => ({
        url: `${WHO_WE_ARE_FEATURES_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.who_we_are_features],
    }),

    // Query for fetching all who-we-are features
    getAllWhoWeAreFeatures: build.query({
      query: (params) => ({
        url: `${WHO_WE_ARE_FEATURES_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.who_we_are_features],
    }),

    // Query for fetching a single who-we-are feature by ID
    getSingleWhoWeAreFeature: build.query({
      query: (id) => ({
        url: `${WHO_WE_ARE_FEATURES_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.who_we_are_features],
    }),

    // Mutation for updating a single who-we-are feature by ID
    updateWhoWeAreFeature: build.mutation({
      query: ({ id, data }) => ({
        url: `${WHO_WE_ARE_FEATURES_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.who_we_are_features],
    }),

    // Mutation for deleting a who-we-are feature by ID
    deleteWhoWeAreFeature: build.mutation({
      query: (id) => ({
        url: `${WHO_WE_ARE_FEATURES_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.who_we_are_features],
    }),
  }),
});

export const {
  useCreateWhoWeAreFeaturesMutation,
  useGetAllWhoWeAreFeaturesQuery,
  useGetSingleWhoWeAreFeatureQuery,
  useUpdateWhoWeAreFeatureMutation,
  useDeleteWhoWeAreFeatureMutation,
} = whoWeAreFeaturesApi;
