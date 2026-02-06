import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BLOG_CATEGORIES_URL = "/blog-categories";

export const blogCategoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new blog categories
    createBlogCategories: build.mutation({
      query: (data) => ({
        url: `${BLOG_CATEGORIES_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.blog_categories],
    }),

    // Query for fetching all blog categories
    getAllBlogCategories: build.query({
      query: (params) => ({
        url: `${BLOG_CATEGORIES_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.blog_categories],
    }),

    // Query for fetching a single blog category by ID
    getSingleBlogCategory: build.query({
      query: (id) => ({
        url: `${BLOG_CATEGORIES_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog_categories],
    }),

    // Mutation for updating a single blog category by ID
    updateBlogCategory: build.mutation({
      query: ({ id, data }) => ({
        url: `${BLOG_CATEGORIES_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.blog_categories],
    }),

    // Mutation for deleting a blog category by ID
    deleteBlogCategory: build.mutation({
      query: (id) => ({
        url: `${BLOG_CATEGORIES_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog_categories],
    }),
  }),
});

export const {
  useCreateBlogCategoriesMutation,
  useGetAllBlogCategoriesQuery,
  useGetSingleBlogCategoryQuery,
  useUpdateBlogCategoryMutation,
  useDeleteBlogCategoryMutation,
} = blogCategoriesApi;
