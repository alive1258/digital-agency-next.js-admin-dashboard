import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const TEAMS_URL = "/teams";

export const teamsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new team members
    createTeams: build.mutation({
      query: (data) => ({
        url: `${TEAMS_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.teams],
    }),

    // Query for fetching all team members
    getAllTeams: build.query({
      query: (params) => ({
        url: `${TEAMS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.teams],
    }),

    // Query for fetching a single team member by ID
    getSingleTeam: build.query({
      query: (id) => ({
        url: `${TEAMS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.teams],
    }),

    // Mutation for updating a single team member by ID
    updateTeam: build.mutation({
      query: ({ id, data }) => ({
        url: `${TEAMS_URL}/${id}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.teams],
    }),

    // Mutation for deleting a team member by ID
    deleteTeam: build.mutation({
      query: (id) => ({
        url: `${TEAMS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.teams],
    }),
  }),
});

export const {
  useCreateTeamsMutation,
  useGetAllTeamsQuery,
  useGetSingleTeamQuery,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
} = teamsApi;
