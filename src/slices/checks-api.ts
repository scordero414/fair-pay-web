import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrlApiRoutes } from '../constants/base-url-api-routes';
import { IGetChecksResponse } from '../types/checks-api';

/**
 * @desc This API holds all the required functions to manage the checks
 */
export const checksApi = createApi({
  reducerPath: 'checksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrlApiRoutes.CHECKS,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      /**
       * @desc Query to obtain the checks.
       *
       * @param {void}
       *
       * @return {IGetChecksResponse}
       */
      getChecks: builder.query<IGetChecksResponse, void>({
        query: () => {
          return {
            url: '/checks',
          };
        },
      }),
    };
  },
});

export const { useGetChecksQuery } = checksApi;
