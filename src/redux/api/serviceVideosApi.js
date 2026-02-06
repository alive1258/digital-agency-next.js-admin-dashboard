import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SERVICE_VIDEOS_URL = "/service-videos";

export const serviceVideosApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new service videos
    createServiceVideos: build.mutation({
      query: (data) => ({
        url: `${SERVICE_VIDEOS_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.service_videos],
    }),

    // Query for fetching all service videos
    getAllServiceVideos: build.query({
      query: (params) => ({
        url: `${SERVICE_VIDEOS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.service_videos],
    }),

    // Query for fetching a single service video by ID
    getSingleServiceVideo: build.query({
      query: (id) => ({
        url: `${SERVICE_VIDEOS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service_videos],
    }),

    // Mutation for updating a single service video by ID
    updateServiceVideo: build.mutation({
      query: ({ id, data }) => ({
        url: `${SERVICE_VIDEOS_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.service_videos],
    }),

    // Mutation for deleting a service video by ID
    deleteServiceVideo: build.mutation({
      query: (id) => ({
        url: `${SERVICE_VIDEOS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service_videos],
    }),
  }),
});

export const {
  useCreateServiceVideosMutation,
  useGetAllServiceVideosQuery,
  useGetSingleServiceVideoQuery,
  useUpdateServiceVideoMutation,
  useDeleteServiceVideoMutation,
} = serviceVideosApi;
