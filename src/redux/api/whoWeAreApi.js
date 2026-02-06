import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const WHO_WE_ARE_URL = "/who-we-are";

export const whoWeAreApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new who-we-are entries
    createWhoWeAre: build.mutation({
      query: (data) => ({
        url: `${WHO_WE_ARE_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.who_we_are],
    }),

    // Query for fetching all who-we-are entries
    getAllWhoWeAre: build.query({
      query: (params) => ({
        url: `${WHO_WE_ARE_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.who_we_are],
    }),

    // Query for fetching a single who-we-are entry by ID
    getSingleWhoWeAre: build.query({
      query: (id) => ({
        url: `${WHO_WE_ARE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.who_we_are],
    }),

    // Mutation for updating a single who-we-are entry by ID
    updateWhoWeAre: build.mutation({
      query: ({ id, data }) => ({
        url: `${WHO_WE_ARE_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.who_we_are],
    }),

    // Mutation for deleting a who-we-are entry by ID
    deleteWhoWeAre: build.mutation({
      query: (id) => ({
        url: `${WHO_WE_ARE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.who_we_are],
    }),
  }),
});

export const {
  useCreateWhoWeAreMutation,
  useGetAllWhoWeAreQuery,
  useGetSingleWhoWeAreQuery,
  useUpdateWhoWeAreMutation,
  useDeleteWhoWeAreMutation,
} = whoWeAreApi;
