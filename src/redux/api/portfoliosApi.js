import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PORTFOLIOS_URL = "/portfolios";

export const portfoliosApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating a new portfolio
    createPortfolio: build.mutation({
      query: (data) => ({
        url: `${PORTFOLIOS_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.portfolios],
    }),

    // Query for fetching all portfolios
    getAllPortfolios: build.query({
      query: (params) => ({
        url: `${PORTFOLIOS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.portfolios],
    }),

    // Query for fetching a single portfolio by ID
    getSinglePortfolio: build.query({
      query: (id) => ({
        url: `${PORTFOLIOS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.portfolios],
    }),

    // Mutation for updating a portfolio by ID
    updatePortfolio: build.mutation({
      query: ({ id, data }) => ({
        url: `${PORTFOLIOS_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.portfolios],
    }),

    // Mutation for deleting a portfolio by ID
    deletePortfolio: build.mutation({
      query: (id) => ({
        url: `${PORTFOLIOS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.portfolios],
    }),
  }),
});

export const {
  useCreatePortfolioMutation,
  useGetAllPortfoliosQuery,
  useGetSinglePortfolioQuery,
  useUpdatePortfolioMutation,
  useDeletePortfolioMutation,
} = portfoliosApi;
