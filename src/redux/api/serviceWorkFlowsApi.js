import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SERVICE_WORK_FLOWS_URL = "/service-work-flows";

export const serviceWorkFlowsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating new service work flows
    createServiceWorkFlows: build.mutation({
      query: (data) => ({
        url: `${SERVICE_WORK_FLOWS_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.service_work_flows],
    }),

    // Query for fetching all service work flows
    getAllServiceWorkFlows: build.query({
      query: (params) => ({
        url: `${SERVICE_WORK_FLOWS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.service_work_flows],
    }),

    // Query for fetching a single service work flow by ID
    getSingleServiceWorkFlow: build.query({
      query: (id) => ({
        url: `${SERVICE_WORK_FLOWS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service_work_flows],
    }),

    // Mutation for updating a single service work flow by ID
    updateServiceWorkFlow: build.mutation({
      query: ({ id, data }) => ({
        url: `${SERVICE_WORK_FLOWS_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.service_work_flows],
    }),

    // Mutation for deleting a service work flow by ID
    deleteServiceWorkFlow: build.mutation({
      query: (id) => ({
        url: `${SERVICE_WORK_FLOWS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service_work_flows],
    }),
  }),
});

export const {
  useCreateServiceWorkFlowsMutation,
  useGetAllServiceWorkFlowsQuery,
  useGetSingleServiceWorkFlowQuery,
  useUpdateServiceWorkFlowMutation,
  useDeleteServiceWorkFlowMutation,
} = serviceWorkFlowsApi;
