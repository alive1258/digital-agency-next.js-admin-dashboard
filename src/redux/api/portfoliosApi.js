import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PARTNERS_URL = "/partners";

export const partnersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating a new partner
    createPartner: build.mutation({
      query: (data) => ({
        url: `${PARTNERS_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.partners],
    }),

    // Query for fetching all partners
    getAllPartners: build.query({
      query: (params) => ({
        url: `${PARTNERS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.partners],
    }),

    // Query for fetching a single partner by ID
    getSinglePartner: build.query({
      query: (id) => ({
        url: `${PARTNERS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.partners],
    }),

    // Mutation for updating a partner by ID
    updatePartner: build.mutation({
      query: ({ id, data }) => ({
        url: `${PARTNERS_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.partners],
    }),

    // Mutation for deleting a partner by ID
    deletePartner: build.mutation({
      query: (id) => ({
        url: `${PARTNERS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.partners],
    }),
  }),
});

export const {
  useCreatePartnerMutation,
  useGetAllPartnersQuery,
  useGetSinglePartnerQuery,
  useUpdatePartnerMutation,
  useDeletePartnerMutation,
} = partnersApi;
