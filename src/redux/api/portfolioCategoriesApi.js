import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PORTFOLIO_CATEGORIES_URL = "/portfolio-categories";

export const portfolioCategoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating a new portfolio category
    createPortfolioCategory: build.mutation({
      query: (data) => ({
        url: `${PORTFOLIO_CATEGORIES_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.portfolio_categories],
    }),

    // Query for fetching all portfolio categories
    getAllPortfolioCategories: build.query({
      query: (params) => ({
        url: `${PORTFOLIO_CATEGORIES_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.portfolio_categories],
    }),

    // Query for fetching a single portfolio category by ID
    getSinglePortfolioCategory: build.query({
      query: (id) => ({
        url: `${PORTFOLIO_CATEGORIES_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.portfolio_categories],
    }),

    // Mutation for updating a portfolio category by ID
    updatePortfolioCategory: build.mutation({
      query: ({ id, data }) => ({
        url: `${PORTFOLIO_CATEGORIES_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.portfolio_categories],
    }),

    // Mutation for deleting a portfolio category by ID
    deletePortfolioCategory: build.mutation({
      query: (id) => ({
        url: `${PORTFOLIO_CATEGORIES_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.portfolio_categories],
    }),
  }),
});

export const {
  useCreatePortfolioCategoryMutation,
  useGetAllPortfolioCategoriesQuery,
  useGetSinglePortfolioCategoryQuery,
  useUpdatePortfolioCategoryMutation,
  useDeletePortfolioCategoryMutation,
} = portfolioCategoriesApi;
