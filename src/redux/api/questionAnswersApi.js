import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const QUESTION_ANSWERS_URL = "/question-answers";

export const questionAnswersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Mutation for creating a new question-answer
    createQuestionAnswer: build.mutation({
      query: (data) => ({
        url: `${QUESTION_ANSWERS_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.question_answers],
    }),

    // Query for fetching all question-answers
    getAllQuestionAnswers: build.query({
      query: (params) => ({
        url: `${QUESTION_ANSWERS_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.question_answers],
    }),

    // Query for fetching a single question-answer by ID
    getSingleQuestionAnswer: build.query({
      query: (id) => ({
        url: `${QUESTION_ANSWERS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.question_answers],
    }),

    // Mutation for updating a question-answer by ID
    updateQuestionAnswer: build.mutation({
      query: ({ id, data }) => ({
        url: `${QUESTION_ANSWERS_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.question_answers],
    }),

    // Mutation for deleting a question-answer by ID
    deleteQuestionAnswer: build.mutation({
      query: (id) => ({
        url: `${QUESTION_ANSWERS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.question_answers],
    }),
  }),
});

export const {
  useCreateQuestionAnswerMutation,
  useGetAllQuestionAnswersQuery,
  useGetSingleQuestionAnswerQuery,
  useUpdateQuestionAnswerMutation,
  useDeleteQuestionAnswerMutation,
} = questionAnswersApi;
