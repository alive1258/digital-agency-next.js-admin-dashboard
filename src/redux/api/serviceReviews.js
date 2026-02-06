import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SERVICE_REVIEWS_URL = "/service-reviews";

export const serviceReviewsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new service reviews
    createServiceReviews: build.mutation({
      query: (data) => ({
        url: `${SERVICE_REVIEWS_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.service_reviews],
    }),

    // Query for fetching all service reviews
    getAllServiceReviews: build.query({
      query: (params) => ({
        url: `${SERVICE_REVIEWS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.service_reviews],
    }),

    // Query for fetching a single service review by ID
    getSingleServiceReview: build.query({
      query: (id) => ({
        url: `${SERVICE_REVIEWS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service_reviews],
    }),

    // Mutation for updating a single service review by ID
    updateServiceReview: build.mutation({
      query: ({ id, data }) => ({
        url: `${SERVICE_REVIEWS_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.service_reviews],
    }),

    // Mutation for deleting a service review by ID
    deleteServiceReview: build.mutation({
      query: (id) => ({
        url: `${SERVICE_REVIEWS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service_reviews],
    }),
  }),
});

export const {
  useCreateServiceReviewsMutation,
  useGetAllServiceReviewsQuery,
  useGetSingleServiceReviewQuery,
  useUpdateServiceReviewMutation,
  useDeleteServiceReviewMutation,
} = serviceReviewsApi;
