import { instance as axiosInstance } from "./axiosInstance";

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: process.env.NEXT_PUBLIC_API_URL }) =>
  async ({ url, method, data, params, headers, contentType }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          ...headers,
          "Content-Type":
            contentType || "application/json" || "multipart/form-data",
        },
        withCredentials: true,
      });

      return { data: result.data };
    } catch (axiosError) {
      console.log("axiosError", axiosError);
      const err = axiosError;
      if (Array.isArray(err?.message)) {
        err.message = err.message[0];
      }
      return {
        error: {
          status: err.statusCode,
          message: err.message,
        },
      };
    }
  };
