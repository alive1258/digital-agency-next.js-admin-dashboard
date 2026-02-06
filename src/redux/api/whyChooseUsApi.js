import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const WHY_CHOOSE_US_URL = "/why-choose-us";

export const whyChooseUsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new why-choose-us entries
    createWhyChooseUs: build.mutation({
      query: (data) => ({
        url: `${WHY_CHOOSE_US_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.why_choose_us],
    }),

    // Query for fetching all why-choose-us entries
    getAllWhyChooseUs: build.query({
      query: (params) => ({
        url: `${WHY_CHOOSE_US_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.why_choose_us],
    }),

    // Query for fetching a single why-choose-us entry by ID
    getSingleWhyChooseUs: build.query({
      query: (id) => ({
        url: `${WHY_CHOOSE_US_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.why_choose_us],
    }),

    // Mutation for updating a single why-choose-us entry by ID
    updateWhyChooseUs: build.mutation({
      query: ({ id, data }) => ({
        url: `${WHY_CHOOSE_US_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.why_choose_us],
    }),

    // Mutation for deleting a why-choose-us entry by ID
    deleteWhyChooseUs: build.mutation({
      query: (id) => ({
        url: `${WHY_CHOOSE_US_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.why_choose_us],
    }),
  }),
});

export const {
  useCreateWhyChooseUsMutation,
  useGetAllWhyChooseUsQuery,
  useGetSingleWhyChooseUsQuery,
  useUpdateWhyChooseUsMutation,
  useDeleteWhyChooseUsMutation,
} = whyChooseUsApi;
