import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const CATEGORIES_URL = "/categories";

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating a new category
    createCategory: build.mutation({
      query: (data) => ({
        url: `${CATEGORIES_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.categories],
    }),

    // Query for fetching all categories
    getAllCategories: build.query({
      query: (arg) => ({
        url: `${CATEGORIES_URL}`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.categories],
    }),

    // Query for fetching a single category by its ID
    getSingleCategory: build.query({
      query: (id) => ({
        url: `${CATEGORIES_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.categories],
    }),

    // Mutation for updating a single category by its ID
    updateCategory: build.mutation({
      query: ({ id, data }) => ({
        url: `${CATEGORIES_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.categories],
    }),

    // Mutation for deleting a category by its ID
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `${CATEGORIES_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.categories],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApi;
