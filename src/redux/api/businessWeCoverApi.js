import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BUSINESS_WE_COVER_URL = "/business-we-cover";

export const businessWeCoverApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new business-we-cover entries
    createBusinessWeCover: build.mutation({
      query: (data) => ({
        url: `${BUSINESS_WE_COVER_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.business_we_cover],
    }),

    // Query for fetching all business-we-cover entries
    getAllBusinessWeCover: build.query({
      query: (params) => ({
        url: `${BUSINESS_WE_COVER_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.business_we_cover],
    }),

    // Query for fetching a single business-we-cover entry by ID
    getSingleBusinessWeCover: build.query({
      query: (id) => ({
        url: `${BUSINESS_WE_COVER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.business_we_cover],
    }),

    // Mutation for updating a single business-we-cover entry by ID
    updateBusinessWeCover: build.mutation({
      query: ({ id, data }) => ({
        url: `${BUSINESS_WE_COVER_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.business_we_cover],
    }),

    // Mutation for deleting a business-we-cover entry by ID
    deleteBusinessWeCover: build.mutation({
      query: (id) => ({
        url: `${BUSINESS_WE_COVER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.business_we_cover],
    }),
  }),
});

export const {
  useCreateBusinessWeCoverMutation,
  useGetAllBusinessWeCoverQuery,
  useGetSingleBusinessWeCoverQuery,
  useUpdateBusinessWeCoverMutation,
  useDeleteBusinessWeCoverMutation,
} = businessWeCoverApi;
