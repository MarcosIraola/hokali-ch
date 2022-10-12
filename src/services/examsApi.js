import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://127.0.0.1:5432/';

const createRequest = (url) => ({ url, headers: {"Content-type": "application/json"}})

export const examsApi = createApi({
    reducerPath: 'examsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExams: builder.query({
            query: () => createRequest(`/exams`)
        }),
    })
});

export const { useGetExamsQuery } = examsApi;
