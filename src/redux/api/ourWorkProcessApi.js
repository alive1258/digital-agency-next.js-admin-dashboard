import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const OUR_WORK_PROCESS_URL = "/our-work-process";

export const ourWorkProcessApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating a new work process
    createOurWorkProcess: build.mutation({
      query: (data) => ({
        url: `${OUR_WORK_PROCESS_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.our_work_process],
    }),

    // Query for fetching all work processes
    getAllOurWorkProcess: build.query({
      query: (params) => ({
        url: `${OUR_WORK_PROCESS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.our_work_process],
    }),

    // Query for fetching a single work process by ID
    getSingleOurWorkProcess: build.query({
      query: (id) => ({
        url: `${OUR_WORK_PROCESS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.our_work_process],
    }),

    // Mutation for updating a work process by ID
    updateOurWorkProcess: build.mutation({
      query: ({ id, data }) => ({
        url: `${OUR_WORK_PROCESS_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.our_work_process],
    }),

    // Mutation for deleting a work process by ID
    deleteOurWorkProcess: build.mutation({
      query: (id) => ({
        url: `${OUR_WORK_PROCESS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.our_work_process],
    }),
  }),
});

export const {
  useCreateOurWorkProcessMutation,
  useGetAllOurWorkProcessQuery,
  useGetSingleOurWorkProcessQuery,
  useUpdateOurWorkProcessMutation,
  useDeleteOurWorkProcessMutation,
} = ourWorkProcessApi;
