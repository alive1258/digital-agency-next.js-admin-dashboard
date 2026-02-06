import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SERVICE_WORK_GALLERIES_URL = "/service-work-galleries";

export const serviceWorkGalleriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new service work galleries
    createServiceWorkGalleries: build.mutation({
      query: (data) => ({
        url: `${SERVICE_WORK_GALLERIES_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.service_work_galleries],
    }),

    // Query for fetching all service work galleries
    getAllServiceWorkGalleries: build.query({
      query: (params) => ({
        url: `${SERVICE_WORK_GALLERIES_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.service_work_galleries],
    }),

    // Query for fetching a single service work gallery by ID
    getSingleServiceWorkGallery: build.query({
      query: (id) => ({
        url: `${SERVICE_WORK_GALLERIES_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service_work_galleries],
    }),

    // Mutation for updating a single service work gallery by ID
    updateServiceWorkGallery: build.mutation({
      query: ({ id, data }) => ({
        url: `${SERVICE_WORK_GALLERIES_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.service_work_galleries],
    }),

    // Mutation for deleting a service work gallery by ID
    deleteServiceWorkGallery: build.mutation({
      query: (id) => ({
        url: `${SERVICE_WORK_GALLERIES_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service_work_galleries],
    }),
  }),
});

export const {
  useCreateServiceWorkGalleriesMutation,
  useGetAllServiceWorkGalleriesQuery,
  useGetSingleServiceWorkGalleryQuery,
  useUpdateServiceWorkGalleryMutation,
  useDeleteServiceWorkGalleryMutation,
} = serviceWorkGalleriesApi;
