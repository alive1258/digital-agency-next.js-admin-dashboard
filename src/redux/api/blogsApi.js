import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BLOGS_URL = "/blogs";

export const blogsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating a new blog
    createBlog: build.mutation({
      query: (data) => ({
        url: `${BLOGS_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.blogs],
    }),

    // Query for fetching all blogs
    getAllBlogs: build.query({
      query: (params) => ({
        url: `${BLOGS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.blogs],
    }),

    // Query for fetching a single blog by ID
    getSingleBlog: build.query({
      query: (id) => ({
        url: `${BLOGS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blogs],
    }),

    // Mutation for updating a single blog by ID
    updateBlog: build.mutation({
      query: ({ id, data }) => ({
        url: `${BLOGS_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.blogs],
    }),

    // Mutation for deleting a blog by ID
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `${BLOGS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blogs],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApi;
