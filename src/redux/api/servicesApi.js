import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SERVICES_URL = "/services";

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating a new services
    createServices: build.mutation({
      query: (data) => ({
        url: `${SERVICES_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.services],
    }),

    // Query for fetching all services
    getAllServices: build.query({
      query: (params) => ({
        url: `${SERVICES_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.services],
    }),

    // Query for fetching a single service by its ID
    getSingleService: build.query({
      query: (id) => ({
        url: `${SERVICES_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.services],
    }),

    // Mutation for updating a single service by its ID
    updateService: build.mutation({
      query: ({ id, data }) => ({
        url: `${SERVICES_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.services],
    }),

    // Mutation for deleting a service by its ID
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICES_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.services],
    }),
  }),
});

export const {
  useCreateServicesMutation,
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = servicesApi;
