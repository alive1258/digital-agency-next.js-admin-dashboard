import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SUBSCRIPTIONS_URL = "/subscriptions";

export const subscriptionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new subscriptions
    createSubscriptions: build.mutation({
      query: (data) => ({
        url: `${SUBSCRIPTIONS_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.subscriptions],
    }),

    // Query for fetching all subscriptions
    getAllSubscriptions: build.query({
      query: (params) => ({
        url: `${SUBSCRIPTIONS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.subscriptions],
    }),

    // Query for fetching a single subscription by ID
    getSingleSubscription: build.query({
      query: (id) => ({
        url: `${SUBSCRIPTIONS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.subscriptions],
    }),

    // Mutation for updating a single subscription by ID
    updateSubscription: build.mutation({
      query: ({ id, data }) => ({
        url: `${SUBSCRIPTIONS_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.subscriptions],
    }),

    // Mutation for deleting a subscription by ID
    deleteSubscription: build.mutation({
      query: (id) => ({
        url: `${SUBSCRIPTIONS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.subscriptions],
    }),
  }),
});

export const {
  useCreateSubscriptionsMutation,
  useGetAllSubscriptionsQuery,
  useGetSingleSubscriptionQuery,
  useUpdateSubscriptionMutation,
  useDeleteSubscriptionMutation,
} = subscriptionsApi;
