import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BLOG_DETAILS_URL = "/blog-details";

export const blogDetailsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new blog details
    createBlogDetails: build.mutation({
      query: (data) => ({
        url: `${BLOG_DETAILS_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.blog_details],
    }),

    // Query for fetching all blog details
    getAllBlogDetails: build.query({
      query: (params) => ({
        url: `${BLOG_DETAILS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.blog_details],
    }),

    // Query for fetching a single blog detail by ID
    getSingleBlogDetail: build.query({
      query: (id) => ({
        url: `${BLOG_DETAILS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog_details],
    }),

    // Mutation for updating a single blog detail by ID
    updateBlogDetail: build.mutation({
      query: ({ id, data }) => ({
        url: `${BLOG_DETAILS_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.blog_details],
    }),

    // Mutation for deleting a blog detail by ID
    deleteBlogDetail: build.mutation({
      query: (id) => ({
        url: `${BLOG_DETAILS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog_details],
    }),
  }),
});

export const {
  useCreateBlogDetailsMutation,
  useGetAllBlogDetailsQuery,
  useGetSingleBlogDetailQuery,
  useUpdateBlogDetailMutation,
  useDeleteBlogDetailMutation,
} = blogDetailsApi;
