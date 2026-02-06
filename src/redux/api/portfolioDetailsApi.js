import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PORTFOLIO_DETAILS_URL = "/portfolio-details";

export const portfolioDetailsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new portfolio details
    createPortfolioDetails: build.mutation({
      query: (data) => ({
        url: `${PORTFOLIO_DETAILS_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.portfolio_details],
    }),

    // Query for fetching all portfolio details
    getAllPortfolioDetails: build.query({
      query: (params) => ({
        url: `${PORTFOLIO_DETAILS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.portfolio_details],
    }),

    // Query for fetching a single portfolio detail by ID
    getSinglePortfolioDetail: build.query({
      query: (id) => ({
        url: `${PORTFOLIO_DETAILS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.portfolio_details],
    }),

    // Mutation for updating a portfolio detail by ID
    updatePortfolioDetail: build.mutation({
      query: ({ id, data }) => ({
        url: `${PORTFOLIO_DETAILS_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.portfolio_details],
    }),

    // Mutation for deleting a portfolio detail by ID
    deletePortfolioDetail: build.mutation({
      query: (id) => ({
        url: `${PORTFOLIO_DETAILS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.portfolio_details],
    }),
  }),
});

export const {
  useCreatePortfolioDetailsMutation,
  useGetAllPortfolioDetailsQuery,
  useGetSinglePortfolioDetailQuery,
  useUpdatePortfolioDetailMutation,
  useDeletePortfolioDetailMutation,
} = portfolioDetailsApi;
