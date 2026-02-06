import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const HOME_HERO_URL = "/heroes";

export const homeHeroApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating a new  heroes
    createHomeHeros: build.mutation({
      query: (data) => ({
        url: `${HOME_HERO_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.heroes],
    }),

    // Query for fetching all heroes
    getAllHomeHeros: build.query({
      query: (params) => ({
        url: `${HOME_HERO_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.heroes],
    }),

    // Query for fetching a single heroes by its ID
    getSingleHomeHero: build.query({
      query: (id) => ({
        url: `${HOME_HERO_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.heroes],
    }),

    // Mutation for updating a single heroes by its ID
    updateHomeHero: build.mutation({
      query: ({ id, data }) => ({
        url: `${HOME_HERO_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.heroes],
    }),

    // Mutation for deleting a heroes by its ID
    deleteHomeHero: build.mutation({
      query: (id) => ({
        url: `${HOME_HERO_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.heroes],
    }),
  }),
});

export const {
  useCreateHomeHerosMutation,
  useGetAllHomeHerosQuery,
  useGetSingleHomeHeroQuery,
  useUpdateHomeHeroMutation,
  useDeleteHomeHeroMutation,
} = homeHeroApi;
