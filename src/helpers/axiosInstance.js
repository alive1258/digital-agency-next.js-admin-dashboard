import { getNewAccessToken } from "@/services/auth.services";
import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  timeout: 60000,
});

let isRefreshing = false;
let pendingRequests = [];

instance.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (error) {
    const config = error.config;

    if (error.response?.status === 401 && !config.sent) {
      if (!isRefreshing) {
        isRefreshing = true;
        config.sent = true;

        try {
          await getNewAccessToken();
          pendingRequests.forEach((callback) => callback());
          pendingRequests = [];

          return instance(config);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise((resolve) => {
        pendingRequests.push(() => resolve(instance(config)));
      });
    } else {
      const responseObject = {
        statusCode: error?.response?.status || 500,
        message: error?.response?.data?.message || "Something went wrong!",
      };
      return Promise.reject(responseObject);
    }
  },
);

export { instance };
