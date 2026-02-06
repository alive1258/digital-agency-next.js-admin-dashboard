import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SERVICE_FAQS_URL = "/service-faqs";

export const serviceFaqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new service faqs
    createServiceFaqs: build.mutation({
      query: (data) => ({
        url: `${SERVICE_FAQS_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.service_faqs],
    }),

    // Query for fetching all service faqs
    getAllServiceFaqs: build.query({
      query: (params) => ({
        url: `${SERVICE_FAQS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.service_faqs],
    }),

    // Query for fetching a single service faq by ID
    getSingleServiceFaq: build.query({
      query: (id) => ({
        url: `${SERVICE_FAQS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service_faqs],
    }),

    // Mutation for updating a single service faq by ID
    updateServiceFaq: build.mutation({
      query: ({ id, data }) => ({
        url: `${SERVICE_FAQS_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.service_faqs],
    }),

    // Mutation for deleting a service faq by ID
    deleteServiceFaq: build.mutation({
      query: (id) => ({
        url: `${SERVICE_FAQS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service_faqs],
    }),
  }),
});

export const {
  useCreateServiceFaqsMutation,
  useGetAllServiceFaqsQuery,
  useGetSingleServiceFaqQuery,
  useUpdateServiceFaqMutation,
  useDeleteServiceFaqMutation,
} = serviceFaqApi;
